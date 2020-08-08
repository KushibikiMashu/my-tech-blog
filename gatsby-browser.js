'use strict';

// 数式のCSS
require('katex/dist/katex.min.css');

// SVGが一瞬大きくなる（huge）のを防ぐ
require('@fortawesome/fontawesome-svg-core/styles.css');

require('./src/assets/scss/init.scss');

// prism.js
require('prismjs/themes/prism-tomorrow.css');
require('prismjs/plugins/line-highlight/prism-line-highlight.css');
require('./src/assets/prism/custom.scss');
require('./src/assets/markdown/main.scss');
