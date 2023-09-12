[![Coverage Status](https://coveralls.io/repos/github/deriv-com/deriv-com-v2/badge.svg?branch=main)](https://coveralls.io/github/deriv-com/deriv-com-v2?branch=main)

# Deriv Com V2

Deriv Com V2 Project

### Requirements

- Node v18.x
- Git v2.3x

### Project Setup

Before Installing the packages please check `@deriv-com/quill-design` setup [here](https://github.com/deriv-com/quill-design)

#### Steps:

1. setup `@deriv-com/quill-design`
2. clone the project: `git clone git@github.com:deriv-com/deriv-com-v2.git`
3. cd into the folder: `cd deriv-com-v2`
4. install the packages: `npm ci`

### Commands

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
