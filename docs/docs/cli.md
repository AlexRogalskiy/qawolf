---
id: cli
title: CLI
---

QA Wolf provides CLI commands to [create browser tests ✅](quick_start#-create-a-browser-test), [create browser scripts 🤖](quick_start#-create-a-browser-script), and [set up CI ☁️](set_up_ci).

## Commands

You can use [environment variables](api#environment-variables) when running the commands below. For example:

```bash
QAW_ATTRIBUTE=my-attribute npx qawolf create www.myawesomesite.com
```

This will use the `my-attribute` [attribute](api#qaw_attribute) as a selector when possible.

### npx qawolf --help

See all commands and options.

### npx qawolf create <url\> \[name]

- `--device <device>` (optional): Emulate a [device](https://github.com/microsoft/playwright/blob/5e63254e62fb9aedfd4503c632228c3334c70293/lib/DeviceDescriptors.js).
- `--path <path>` (optional): Specify the path to create the test. Defaults to `.qawolf`.
- `--script` (optional): Create a node script instead of a [Jest](https://jestjs.io) test.
- `url` (required): visit this URL to begin your test.
- `name` (optional): Your file will be saved to `.qawolf/tests/name.test.js` or `.qawolf/scripts/name.js`. The name defaults to the URL hostname if not provided. `name` will be converted to camel case.

Create a browser [test ✅](quick_start#-create-a-browser-test) or [script 🤖](quick_start#-create-a-browser-script).

```bash
npx qawolf create --device="iPhone 7" google.com

npx qawolf create --script google.com
```

### npx qawolf test \[...options]

- `--all-browsers` (optional): Run the tests on `chromium`, `firefox`, and `webkit`.
- `--chromium` (optional): Run the tests on `chromium`. Defaults to this browser.
- `--firefox` (optional): Run the tests on `firefox`.
- `--path <path>` (optional): Specify the [root directory](https://jestjs.io/docs/en/configuration#rootdir-string) that Jest should scan for tests. Defaults to `.qawolf`.
- `--webkit` (optional): Run the tests on `webkit`.
- `...options` (optional) Options for the [Jest CLI](https://jestjs.io/docs/en/cli).

Run tests with Jest.

```bash
// run all tests on all browsers
npx qawolf test --all-browsers

// run one test on firefox
npx qawolf test --firefox myTest

// use runInBand from the Jest CLI to run tests serially
npx qawolf test --runInBand
```

### npx qawolf azure

Generate a pipeline file for [Azure DevOps](https://azure.microsoft.com/en-us/services/devops). See [Set Up <img align="center" height="20px" src="https://cdn.iconscout.com/icon/free/png-256/azure-190760.png" /> Azure](set_up_ci#azure) for more details.

### npx qawolf circleci

Generate a workflow file for [CircleCI](https://circleci.com). See [Set Up <img align="center" height="20px" src="https://cdn.iconscout.com/icon/free/png-256/circleci-283066.png" /> CircleCI](set_up_ci#circleci) for more details.

### npx qawolf github

Generate a workflow file for [GitHub Actions](https://github.com/features/actions). See [Set Up <img align="center" height="20px" src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" /> GitHub](set_up_ci#github) for more details.

### npx qawolf gitlab

Generate a workflow file for [GitLab CI/CD](https://docs.gitlab.com/ee/ci/README.html). See [Set Up 🦊 GitLab](set_up_ci#gitlab) for more details.

### npx qawolf howl

🐺😉

### npx qawolf jenkins

Generate a Jenkinsfile for [Jenkins](https://jenkins.io/doc/book/pipeline/jenkinsfile). See [Set Up 🤵 Jenkins](set_up_ci#jenkins) for more details.
