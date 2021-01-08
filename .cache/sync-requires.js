const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Leo\\Desktop\\hotelgatsby\\.cache\\dev-404-page.js"))),
  "component---src-components-habitaciones-js": hot(preferDefault(require("C:\\Users\\Leo\\Desktop\\hotelgatsby\\src\\components\\habitaciones.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Leo\\Desktop\\hotelgatsby\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Leo\\Desktop\\hotelgatsby\\src\\pages\\index.js"))),
  "component---src-pages-nosotros-js": hot(preferDefault(require("C:\\Users\\Leo\\Desktop\\hotelgatsby\\src\\pages\\nosotros.js")))
}

