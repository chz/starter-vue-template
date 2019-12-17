module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    "lodash",
    "@babel/plugin-proposal-optional-chaining",
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": true
      },
      "ant-design-vue"
    ]
  ]
}
