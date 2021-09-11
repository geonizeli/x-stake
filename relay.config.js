/**
 * @type import('relay-compiler/lib/bin/RelayCompilerMain').Config
 */
module.exports = {
  src: "app/javascript/src",
  schema: "app/javascript/__generated__/schema.graphql",
  language: "typescript",
  exclude: ["**/__generated__/**"],
  noFutureProofEnums: true,
};
