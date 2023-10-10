// eslint-disable-next-line no-undef
module.exports = {
  typescript: true,
  jsxRuntime: "automatic",
  dimensions: false,
  replaceAttrValues: {
    "#15284C": "currentColor",
  },
  // svgProps: {
  //   strokeWidth: "{props.width && Number(props.width) > 63 ? 1 : 1.5}",
  // },
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeTitle: false,
          },
        },
      },
      // {
      //   name: "removeAttrs",
      //   params: {
      //     attrs: "(stroke-width)",
      //   },
      // },
    ],
  },
};
