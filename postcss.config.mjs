const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

export default {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}
