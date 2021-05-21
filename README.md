<div style="text-align: center">
  <p><img src="https://user-images.githubusercontent.com/35788699/116828155-ed3ccd00-ab6a-11eb-9327-4d99bd169bdc.png" alt="Logo Cropped"></p>
  <p><a href="https://github.com/AgoraCloud/common/issues"><img src="https://img.shields.io/github/issues/AgoraCloud/common" alt="GitHub issues"></a> <a href="https://github.com/AgoraCloud/common/blob/main/LICENSE"><img src="https://img.shields.io/github/license/AgoraCloud/common" alt="GitHub license"></a> <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/AgoraCloud/common"> <img src="https://img.shields.io/github/release-date/AgoraCloud/common" alt="GitHub Release Date"> <img src="https://img.shields.io/github/workflow/status/AgoraCloud/common/on_release_created" alt="GitHub Workflow Status"> <img src="https://img.shields.io/github/contributors/AgoraCloud/common" alt="GitHub contributors"> <img src="https://img.shields.io/github/commit-activity/m/AgoraCloud/common" alt="GitHub commit activity"></p>
</div>

AgoraCloud is an open source and self hosted cloud development platform that runs in Kubernetes.

This repository contains an NPM package that houses shared assets between AgoraCloud's server and UI, such as DTO's, validators and transformers.

## Download and Setup

1. Create a `.npmrc` file in the root of your project with the following content:

> Make sure you replace `TOKEN` with a generated personal access token that has the `read:packages` scope

```bash
//npm.pkg.github.com/:_authToken=TOKEN
@agoracloud:registry=https://npm.pkg.github.com
```

2. Install the package

```bash
npm i @agoracloud/common@1.0.0
```

3. Import any asset as needed

```typescript
import { userDto } from '@agoracloud/common';
```

## Development

### Set Up

1. Clone this repository

```bash
git clone https://github.com/AgoraCloud/common.git
```

2. Change directory

```bash
cd common
```

3. Install required packages

```bash
npm i
```

### Building the app

```bash
npm run build
```

### Formatting

```bash
npm run format
```

### Linting

```bash
npm run lint
```
