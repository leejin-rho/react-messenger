// fonts.d.ts
declare module '*.ttf'
declare module '*.otf'
declare module '*.svg' {
  const content: any
  export default content
}
