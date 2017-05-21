# Step-by-Step Webpack Installation Guide

Here is all you need to integrate Views in an existing Webpack app.
You can swap parts of your interface one by one as you go. Views compiles, or as we say, morphs to React, and React Native at the moment. Check out our roadmap for updates.
You can get a ready to go base Webpack project here. Here are other integration guides: rollup, Next.js, and create-react-app.

## Installation
1. To get Views shared blocks for React DOM, use:
```
yarn add views-blocks-react-dom
```
2. To get Views loader for Webpack, use:
```
yarn add --dev views-loader
```
views-loader will morph Views code in .view files and give you Javascript files as an output.

3. To configure Views loader for your project add this rule to your Webpack config file rules section:

```
{
  test: /\.view$/,
  exclude: /(node_modules)/,
  loader: 'views-loader',
}
```

Here’s where the new rule should be placed:

```
module.exports = {
  // ...
  module: {
    // ...
    rules: [
      // ...
      {
        test: /\.view$/,
        exclude: /(node_modules)/,
        loader: 'views-loader'
      },
    ]
  }
}
```

## Usage
Let’s make our first view! In your app’s src directory, add a new file and call it Hello.view with the following content:
```
Text
text Hello Views!
```
Then, import it from any React component you may have:
```
import Hello from './Hello.view'
```
That’s it! You can now use it as a React component in your app like:
```
<Hello />
```
If you would like Views syntax highlighter Darío Javier Cravero prepared a sweet set of packages for [VIM](https://github.com/viewsdx/syntax-vim), [Atom](https://github.com/viewsdx/syntax-atom), and [Sublime](https://github.com/viewsdx/syntax-sublime). 
Try it in a test app

## Try it in sample app
If you want to follow the installation steps in a sample project download [before-views](https://github.com/viewsdx/step-by-step-webpack/releases) repository,  but if you just want to jump to sample app with Views already installed download [with-views](https://github.com/viewsdx/step-by-step-webpack/releases) release.
