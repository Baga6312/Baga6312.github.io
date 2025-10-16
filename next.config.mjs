const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

export default {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
};