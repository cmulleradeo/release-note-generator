module.export = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'conventionalchangelog',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
      }
    }],

    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalchangelog',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
      },
      writerOpts: {
        commitsSort: ['subject', 'scope']
      }
    }]
  ]
}