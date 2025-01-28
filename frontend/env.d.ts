/// <reference types="vite/client" />

// Add YAML module declarations

 
/* eslint-disable  @typescript-eslint/no-explicit-any */

declare module '*.yaml' {
  const content: any
  export default content
}

declare module '*.yml' {
  const content: any
  export default content
}
