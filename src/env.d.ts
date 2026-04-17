/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace JSX {
  type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
}

declare module '*.webp' {
  const value: import('astro').ImageMetadata;
  export default value;
}
