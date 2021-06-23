[![Build Status](https://travis.ibm.com/CloudEngineering/node-sdk-template.svg?token=eW5FVD71iyte6tTby8gr&branch=main)](https://travis.ibm.com/CloudEngineering/node-sdk-template)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
<!--
[![npm-version](https://img.shields.io/npm/v/CloudEngineering/node-sdk-template.svg)](https://www.npmjs.com/package/node-sdk-template)
[![codecov](https://codecov.io/gh/CloudEngineering/node-sdk-template/branch/main/graph/badge.svg)](https://codecov.io/gh/CloudEngineering/node-sdk-template)
-->
# IBM Data Virtualization on Cloud Node.js SDK V0.0.1
A Node.js client library to interact with
the [IBM Data Virtualization on Cloud APIs](https://cloud.ibm.com/apidocs/data-virtualization-on-cloud).

Disclaimer: this SDK is being released initially as a **pre-release** version.
Changes might occur which impact applications that use this SDK.

## Table of Contents

<!--
  The TOC below is generated using the `markdown-toc` node package.

      https://github.com/jonschlinkert/markdown-toc

  You should regenerate the TOC after making changes to this file.

      npx markdown-toc -i README.md
  -->

<!-- toc -->

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Authentication](#authentication)
- [Using the SDK](#using-the-sdk)
- [Questions](#questions)
- [Issues](#issues)
- [Open source @ IBM](#open-source--ibm)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

<!-- --------------------------------------------------------------- -->
## Overview

The IBM Data Virtualization on Cloud Node.js SDK allows developers to programmatically interact with the following
IBM Cloud services:

Service Name | Import Path
--- | ---
[Data Virtualization on Cloud](https://cloud.ibm.com/apidocs/data-virtualization-on-cloud-node-sdk) | data-virtualization

## Prerequisites
* You need an [IBM Cloud](https://cloud.ibm.com/registration) account.
- A [Data Virtualization on Cloud instance](https://cloud.ibm.com/catalog/services).
- An [IBM Cloud API key](https://cloud.ibm.com/iam/apikeys) that allows the SDK to access your account.
- Node.js version 12 or above.

[ibm-cloud-onboarding]: http://cloud.ibm.com/registration

## Installation

```sh
git clone git@github.com:IBM/data-virtualization-on-cloud-node-sdk.git
```

## Authentication

Data Virtualization on Cloud uses token-based Identity and Access Management (IAM) authentication.

With IAM authentication, you supply an API key that is used to generate an access token. Then, the access token is
included in each API request to Data Virtualization on Cloud. Access tokens are valid for a limited amount of time and must be
regenerated.

Authentication for this SDK is accomplished by
using [IAM authenticators](https://github.com/IBM/ibm-cloud-sdk-common/blob/master/README.md#authentication).

## Using the SDK
For general SDK usage information, please see
[this link](https://github.com/IBM/ibm-cloud-sdk-common/blob/main/README.md)

## Questions

If you are having difficulties using this SDK or have a question about the IBM Cloud services,
please ask a question at
[Stack Overflow](http://stackoverflow.com/questions/ask?tags=ibm-cloud).

## Issues
If you encounter an issue with the SDK, you are welcome to submit
a [bug report](https://github.com/IBM/data-virtualization-on-cloud-node-sdk/issues).
Before that, please search for similar issues. It's possible someone has
already encountered this issue.

## Open source @ IBM
Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md).

## License

This project is released under the Apache 2.0 license.
The license's full text can be found in
[LICENSE](LICENSE).
