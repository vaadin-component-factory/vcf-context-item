# &lt;vcf-context-item&gt;

## Installation

Install `vcf-context-item`:

```sh
npm i @vaadin-component-factory/vcf-context-item --save
```

## Usage

Once installed, import the module in your application:

```js
import '@vaadin-component-factory/vcf-context-item';
```

Add `<vcf-context-item>` element to the page:

```html
<vcf-context-item>Foobar</vcf-context-item>
```

## Properties

- `menuItems`: An array of objects used to define the content of the context menu. Each object contains the following properties:
  - `icon`: The icon name for the menu item (e.g. `"vaadin:edit"`).  [Lumo](https://cdn.vaadin.com/vaadin-lumo-styles/1.0.0/demo/icons.html), [Vaadin](https://vaadin.com/components/vaadin-icons) or [Iron](https://www.webcomponents.org/element/@polymer/iron-icons) icon sets may be used. __Note:__ icon set must be imported __separately__.
  - `text`: The text for the menu item.
  - `callback`: The callback function that is executed when this menu item is selected. The only parameter for this function is a reference to the `vcf-context-item`.
  
## Events

- `context-menu-click`: Triggered when user clicks the context menu. The events `detail` property contains 2 custom properties:
  - `targetItem`: Reference to the `vcf-context-item`.
  - `sourceEvent`: Reference to the original click event.

## Running demo

1. Fork the `vcf-context-item` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-context-item` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.
    
## Vaadin Prime

This component is available in the Vaadin Prime subscription. It is still open source, but you need to have a valid CVAL license in order to use it. Read more at: https://vaadin.com/pricing

## License

Commercial Vaadin Add-on License version 3 (CVALv3). For license terms, see LICENSE.

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
