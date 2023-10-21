declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}
declare module '*.svg' {
  const content: string;
  export default content;
}
