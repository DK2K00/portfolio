
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'portfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19174, hash: 'd3a3e68097f1b1876362dce92fa29b3723d0cde9562b8cbe7fab1a7198cbd801', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19442, hash: '4afd76d3a6df59902cfac874fa4d8409d487f06e8cedec0efb417b82b3691806', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XP3E2BSF.css': {size: 120, hash: 'tQV8K5IPxxE', text: () => import('./assets-chunks/styles-XP3E2BSF_css.mjs').then(m => m.default)}
  },
};
