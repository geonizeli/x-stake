module.exports = function (api) {
  const validEnv = ["development", "test", "production"];
  const currentEnv = api.env();

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      `${
        "Please specify a valid `NODE_ENV` or " +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: '
      }${JSON.stringify(currentEnv)}.`
    );
  }

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    env: {
      test: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: "12",
              },
              modules: "commonjs",
              useBuiltIns: false,
              debug: false,
            },
          ],
          "@babel/preset-react",
          "jest",
        ],
      },
    },
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "macros",
      "relay",
    ],
  };
};
