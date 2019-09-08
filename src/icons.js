/* eslint-disable max-len */
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`
  <iron-iconset-svg name="vcf" size="24">
    <svg>
      <defs>
        <g id="context-menu">
          <path
            d="m12 14c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm0-7c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm0 14c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2z"
          />
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
