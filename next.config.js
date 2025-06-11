// next.config.js
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const repo = 'JeanCHDJdev.github.io';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};