import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

class VcfContextItem extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }

  static get is() {
    return 'vcf-context-item';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {};
  }
}

customElements.define(VcfContextItem.is, VcfContextItem);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfContextItem = VcfContextItem;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfContextItem);
}
