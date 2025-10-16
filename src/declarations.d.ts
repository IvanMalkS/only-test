// --- Для CSS / SCSS Modules ---
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

// --- Для SVG ---
declare module '*.svg' {
  const content: string;
  export default content;
}
