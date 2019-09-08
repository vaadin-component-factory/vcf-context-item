import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * `vcf-context-menu-content`
 * @class VcfContextMenuContent
 * @extends {PolymerElement}
 */
class VcfContextMenuContent extends PolymerElement {
  static get is() {
    return 'vcf-context-menu-content';
  }

  static get properties() {
    return {
      context: Object,
      items: {
        type: Array,
        observer: '_itemsChanged'
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        vaadin-item span {
          vertical-align: middle;
          padding-left: var(--lumo-space-s);
        }

        vaadin-item iron-icon {
          color: var(--lumo-contrast-60pct);
        }
      </style>
      <vaadin-list-box id="listBox"></vaadin-list-box>
    `;
  }

  _itemsChanged(items) {
    items.forEach(menuItem => {
      const item = document.createElement('vaadin-item');
      const icon = document.createElement('iron-icon');
      const textSpan = document.createElement('span');
      icon.icon = menuItem.icon;
      textSpan.textContent = menuItem.text;
      item.appendChild(icon);
      item.appendChild(textSpan);
      item.addEventListener('click', () => menuItem.callback && menuItem.callback(this.context));
      this.$.listBox.appendChild(item);
    });
  }
}

customElements.define(VcfContextMenuContent.is, VcfContextMenuContent);
