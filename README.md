# TypeScript Image Zoomer
## [Demo](https://htmlpreview.github.io/?https://github.com/pgalias/image.viewer/blob/master/index.html)
## Description
Vanilla JavaScript image zooming plugin. Requires no dependencies
## Installing
- Via npm
`npm install -S image.viewer`
- Via cloning
`git clone https://github.com/pgalias/image.viewer`
## Usage
1. In your html file put `<script src='path/to/the/dist/image.viewer.min.js'></script>` before closing your body tag
2. In your js file put `iv.init(query, [options])`
## Options
| Attribute             | Type      | Default       | Description                               |
| ---                   | ---       | ---           | ---                                       |
| **`overlayColor`**    | String    | *`#444`*      | background-color of image overlay         |
| **`easing`**          | String    | *`linear`*    | Image zooming css-valid easing function   |
## Caption
Zoomed image can has also a custom caption which will be visible on zoom. You only need to put into img tag data-iv-caption attribute with string value
### Changelog
See changelog
### LICENSE
MIT LICENSE - © Paweł Galias