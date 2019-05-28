## What is this
`react-app` is just a non typescript create-react-app, app. There are a few things I've done
- Installed typescript package and added a tsconfig.json
- Added the framer-design.framerfx folder as a package
- Added name and version to the package.json in framer-design, and changed the `main` to `build` instead of `dist`

## Run it

```
cd react-app
yarn install
yarn start
```

## See the error

Edit `/react-app/src/App.js` and uncomment line 13 or 15.

## What I'm looking to do

I want to attach framer designed design components or code components to existing react apps. I have a framework app that I'd like to load various prototype tests from a framerx file. Basically, tapping the design features from FramerX to iterate on layouts and structure but connect it to a real application.