declare module 'sanity' {
  // This allows TypeScript to accept the Sanity import
  // The actual types are in @types/sanity
  export * from '@sanity/types'
}

declare module 'sanity/desk' {
  // For the desk tool structure builder
  export interface StructureBuilder {
    list(): any
    documentTypeListItems(): any[]
  }
}