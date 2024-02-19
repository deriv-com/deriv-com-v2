# Name

Deriv.com V2 - a sandbox for the Quill Design System

[![Coverage Status](https://coveralls.io/repos/github/deriv-com/deriv-com-v2/badge.svg?branch=main)](https://coveralls.io/github/deriv-com/deriv-com-v2?branch=main)

# Description

The Deriv Com V2 Project serves as a sandbox for the Quill Design System. This is where we construct our Quill blocks and components, and develop our application within the apps folder utilizing these reusable elements. Additionally, Quill Icons are incorporated here.

# Installation

Follow these steps to install, set up and run the project locally. Make sure you have the prerequisites installed before you begin.

### Prerequisites

- Node v18.x
- Git v2.3

## - Step 1: Clone the repository 

```
git clone git@github.com:deriv-com/deriv-com-v2.git
cd deriv-com-v2
```


## - Step 2: Install dependencies

```
npm ci
```

## - Step 3: Build/Run projects
Inside the apps folder there can be multiple projects. Check `package.json` file to setup custome commands for each projects. To run `HK` project

Develop HK Project:
`npm run dev:hk`

Build HK Project:
`npm run build:hk`

**Note:** the static html/css/js output will be in: `dist/apps/deriv-hk/exported`

Run Storybook:
`npm run storybook`

Build Storybook:
`npm run build-storybook`

**Note:** the build files will be in: `dist/storybook/storybook-host`

# Contributors

- Deriv Frontend Team

# References

- [Deriv.com GitHub Repository](https://github.com/binary-com/deriv-com)
