# CI/CD Integration

## GitHub Actions

Add this to .github/workflows/release.yml

    name: Kronos Release
    on:
      release:
        types: [published]
    jobs:
      ship:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: '18'
          - run: npm install -g kronos-agent
          - run: kronos ship --release VERSION
            env:
              OPENAI_API_KEY: YOUR_KEY

## GitLab CI

    kronos:
      stage: deploy
      script:
        - npm install -g kronos-agent
        - kronos ship --release VERSION
      only:
        - tags
