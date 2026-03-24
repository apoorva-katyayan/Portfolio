/* Allow importing images and svgs in TypeScript without extra type packages */
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "*.module.css";
declare module "*.module.scss";

export {};

// Allow path-alias imports (e.g. @/assets/...) to be treated as any module in type checking
declare module "@/*";
