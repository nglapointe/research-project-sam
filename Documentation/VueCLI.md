# Vue CLI

## Overview

The Vue CLI aims to be the standard tooling baseline for the Vue ecosystem. It benefits from various build tools
that work smoothly togheter with sensible defaults. This removes the struggle of wrangling with configurations. You can also find more information on the VueJS cli [guide](https://cli.vuejs.org/guide/).

## How to install the Vue CLI?

The CLI is globally install via npm packagea and provides the vue commands in your terminal. It allows users to quickly scaffold a new projects.

Run this command to install the vue cli

```bash
npm install -g @vue/cli
```

After installation, you will have access to the vue binary inside your command line. You are able to verfy that it was properly installed by simply running ``` vue ```, which should display a help message listing available commands.

### Upgrading CLI Version

If you are comming accross CLI version errors, make sure the correct version is installed. You are able to check the CLI version by running this command below.

```
vue --version
```

If needed, you are able to upgrade the global Vue CLI package by running this command below. This will check for updates to the global installation of the Vue CLI package and install the latest version available that satisfies the version range specified in your project's package.json file.

```
npm update -g @vue/cli
```

## How do you create a new project?

To create a new Vue project, run:

```
vue create [name-of-project]
```

You will be prompted to pick a preset for your project. You can either choose the default preset which comes with a basic Babel + ESLint setup, or select "Manually select features" to pick the features you need.
