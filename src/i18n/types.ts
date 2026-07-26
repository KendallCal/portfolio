export type DeepTranslated<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [Key in keyof T]: DeepTranslated<T[Key]> }
    : T extends object
      ? { readonly [Key in keyof T]: DeepTranslated<T[Key]> }
      : T;
