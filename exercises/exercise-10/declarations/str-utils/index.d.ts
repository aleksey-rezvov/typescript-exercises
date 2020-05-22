declare module "str-utils" {
  // export const ...
  // export function ...
  interface StrUtilsFunc {
    (value: string): string;
  }
  export const strReverse: StrUtilsFunc;
  export const strToLower: StrUtilsFunc;
  export const strToUpper: StrUtilsFunc;
  export const strRandomize: StrUtilsFunc;
  export const strInvertCase: StrUtilsFunc;
}
