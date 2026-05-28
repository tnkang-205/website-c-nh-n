const { GithubOAuthProvider, OAuthProvider } = require('@decap-cms/netlify-cms-oauth-provider-node');

const provider = new GithubOAuthProvider({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

exports.handler = OAuthProvider.handler(provider);
