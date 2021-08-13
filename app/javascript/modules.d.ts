declare module "@rails/ujs";
declare module "turbolinks";
declare module "@rails/activestorage";

declare module "*.png" {
  const png: string;
  export default png;
}

declare module "*.svg" {
  const svg: string;
  export default svg;
}

declare module "babel-plugin-relay/macro" {
  export { graphql } from "react-relay";
}
