import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import { ItemMixin } from '@vaadin/vaadin-item/src/vaadin-item-mixin';
import '@polymer/iron-icon';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu';
import './vcf-context-menu-content';
import './icons';

/**
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ThemableMixin
 */
class VcfContextItem extends ItemMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([context-menu-active]) {
          background-color: var(--lumo-contrast-10pct);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .context-menu {
          color: inherit;
          padding: 0;
          opacity: 0.3;
          flex: none;
          margin: 0;
          align-self: center;
        }

        .content {
          flex: auto;
          margin-right: var(--lumo-space-s);
          padding: var(--lumo-space-s) 0;
          position: relative;
        }

        vaadin-item span {
          vertical-align: middle;
          padding-left: var(--lumo-space-s);
        }

        vaadin-item iron-icon {
          color: var(--lumo-contrast-60pct);
        }

        @media (pointer: fine) {
          .context-menu {
            opacity: 0;
          }

          :host(:hover) .context-menu,
          :host([context-menu-active]) .context-menu {
            opacity: 0.5;
          }

          .context-menu:focus,
          .context-menu[focus-ring],
          :host(:hover) .context-menu:hover {
            opacity: 1;
          }
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>

      <vaadin-button
        theme="tertiary icon small"
        class="context-menu"
        id="contextMenuButton"
        on-click="_contextMenuTriggered"
      >
        <iron-icon icon="vcf:context-menu"></iron-icon>
      </vaadin-button>

      <vaadin-context-menu id="contextMenu" on-opened-changed="_onContextMenuOpened"></vaadin-context-menu>
    `;
  }

  static get is() {
    return 'vcf-context-item';
  }

  static get properties() {
    return {
      menuItems: {
        type: Array,
        value: () => null,
        observer: '_menuItemsChanged'
      },
      menuTemplate: {
        type: Object,
        observer: '_menuTemplateChanged'
      }
    };
  }

  ready() {
    super.ready();
    this._overlay = this.$.contextMenu.$.overlay;
    this.menuTemplate = this.querySelector('template');
    if (this.menuTemplate) {
      this._overlay.template = this.menuTemplate;
      this._overlay.addEventListener('click', e => {
        this.dispatchEvent(
          new CustomEvent('context-menu-click', {
            detail: { targetItem: this, sourceEvent: e }
          })
        );
      });
    }
  }

  _menuTemplateChanged(template) {
    this._hasMenuTemplate = !!template;
    if (this._hasMenuItems && this._hasMenuTemplate) {
      console.warn('Cannot use both template and menuItems API');
    } else {
      this.$.contextMenuButton.hidden = !template;
    }
  }

  _menuItemsChanged(menuItems) {
    this._hasMenuItems = menuItems && menuItems.length;
    if (this._hasMenuItems && this._hasMenuTemplate) {
      console.warn('Cannot use both template and menuItems API');
    } else {
      if (this._hasMenuItems) {
        this.$.contextMenuButton.hidden = false;
        this.$.contextMenu.renderer = root => {
          let content = root.firstElementChild;
          if (!content) {
            content = document.createElement('vcf-context-menu-content');
            content.context = this;
            root.appendChild(content);
          }
          content.items = menuItems;
        };
      } else {
        this.$.contextMenuButton.hidden = true;
      }
    }
  }

  _contextMenuTriggered(e) {
    e.currentTarget.setAttribute('context-menu-active', '');
    this.$.contextMenu.open(e);
    e.preventDefault();
    e.stopPropagation();
  }

  _onContextMenuOpened(e) {
    if (!e.detail.value) {
      this.removeAttribute('context-menu-active');
    }
  }
}

customElements.define(VcfContextItem.is, VcfContextItem);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfContextItem = VcfContextItem;
