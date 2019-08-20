const theme = document.createElement('dom-module');
theme.id = 'vcf-context-item-lumo';
theme.setAttribute('theme-for', 'vcf-context-item');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
