# IBM Data Virtualization on Cloud Node.js SDK

A Node.js client library to interact with
the [IBM Data Virtualization on Cloud APIs](https://cloud.ibm.com/apidocs/data-virtualization-on-cloud).

<details>
<summary>Table of Contents</summary>

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Authentication](#authentication)
* [Error handling](#error-handling)
* [License](#license)

</details>

## Overview

The IBM Data Virtualization on Cloud Node.js SDK allows developers to programmatically interact with the following IBM Cloud services:

Service name | Import path
--- | ---
[Data Virtualization on Cloud](https://cloud.ibm.com/apidocs/data-virtualization-on-cloud-node-sdk) | data-virtualization

## Prerequisites

- An [IBM Cloud account](https://cloud.ibm.com/registration).
- A [Data Virtualization on Cloud instance](https://cloud.ibm.com/catalog/services).
- An [IBM Cloud API key](https://cloud.ibm.com/iam/apikeys) that allows the SDK to access your account.
- Node.js version 12 or above.

  This SDK is tested with Node versions 12 and up. The SDK may work on previous versions, but this is not supported
  officially.

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

## Error-handling

If you encounter an issue with the SDK, you are welcome to submit a [bug report](https://github.com/IBM/data-virtualization-on-cloud-node-sdk/issues). Before that, please search for similar issues. It's possible someone has already encountered this issue.

## License

This SDK project is released under the Apache 2.0 license. The license's full text can be found in [LICENSE](LICENSE).
