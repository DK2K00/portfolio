
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19195, hash: '0bd5a15cef69074d321d064c731b9b9c01641d69a9e43e56dd73bd6b12d161ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19463, hash: 'e317b60e90e44b3cf3760c9564e17b8c67661996b5d7521913ba5d049b2d1965', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XP3E2BSF.css': {size: 120, hash: 'tQV8K5IPxxE', text: () => import('./assets-chunks/styles-XP3E2BSF_css.mjs').then(m => m.default)}
  },
};
