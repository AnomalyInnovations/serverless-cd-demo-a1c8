# ServerlessCD Demo

This is a demo Serverless Framework project to show the ServerlessCD service in action.

### ServerlessCD Features

Here are a few things ServerlessCD supports out of the box:

- New builds are triggered after a `git push` to the master branch.
- Master is linked to the **dev** stage.
- Tests are run on Travis [![Build Status](https://travis-ci.org/AnomalyInnovations/serverless-cd-demo-a1c8.svg?branch=master)](https://travis-ci.org/AnomalyInnovations/serverless-cd-demo-a1c8)
- Tested builds are created with Staging **and** Production artifacts.
- Builds are **automatically** deployed to Staging.
- Staging [**endpoint**][stEndpoint] is deployed using the staging environment variables.
- **Promote** a build to Production from the dashboard.
- Production [**endpoint**][prEndpoint] is deployed using the production environment variables.
- One click **Rollback** through the **Production** stage in the dashboard.

### Requirements

ServerlessCD needs the following to set up your project:

- Deploys to **your AWS account** with your IAM User Access Key and Secret Key.
- Links to **your GitHub repo** using your GitHub personal access token.

### About this demo project

This is a simple Serverless Framework project with a couple of things to note.

- There is one [handler function][handler] that creates a single API endpoint.
- There are a few environment variables in the [`serverless.yml`][enVariables] that are used while deploying.
- Tests are configured using [Jest][jest].

### Usage

Contact us via [email][email] and we'll give you access to this repo.

Clone this repo

```bash
$ git clone https://github.com/AnomalyInnovations/serverless-cd-demo-a1c8
```

Install the NPM packages

```bash
$ npm install
```

Make some changes to `hanlder.js` and run tests

```bash
$ npm run test
```

Commit and push to master

```bash
$ git commit
$ git push
```

Enjoy!

### Feedback

Send us your feedback via Twitter to Frank Wang ([@fanjiewang][fTwitter]) or Jay V ([@jayair][jTwitter]). Or send us an [email][email].


[stEndpoint]: https://mcr5wzx6d7.execute-api.us-east-1.amazonaws.com/dev
[prEndpoint]: https://0xpsebpf9a.execute-api.us-east-1.amazonaws.com/prod
[enVariables]: https://github.com/AnomalyInnovations/serverless-cd-demo-a1c8/blob/master/serverless.yml#L10
[jest]: https://facebook.github.io/jest/
[handler]: https://github.com/AnomalyInnovations/serverless-cd-demo-a1c8/blob/master/handler.js
[fTwitter]: https://twitter.com/fanjiewang
[jTwitter]: https://twitter.com/jayair
[email]: mailto:contact@anoma.ly

