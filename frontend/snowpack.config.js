module.exports = {
  extends: "@snowpack/app-scripts-react",

  routes: [{
    port: 3000,
    src: "src",
    bundle: false,
    fallback: "index.html",
  }],

  "packageOptions": {
    polyfillNode: true,
  },
};
