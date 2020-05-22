declare module "stats" {
  type Comparator<T> = (a: T, b: T) => number;
  type StatIndexFunc = <T>(
    input: Array<T>,
    comparator: Comparator<T>
  ) => number;
  type StatValueFunc = <T>(
    input: Array<T>,
    comparator: Comparator<T>
  ) => T | null;

  //   export interface StatFunc<T> {
  //     (input: Array<T>, comparator: Comparator<T>): number;
  //     // (input: Array<T>, comparator: Comparator<T>): T | null;
  //   }

  export const getMaxIndex: StatIndexFunc;
  export const getMaxElement: StatValueFunc;
  export const getMinIndex: StatIndexFunc;
  export const getMinElement: StatValueFunc;
  export const getMedianIndex: StatIndexFunc;
  export const getMedianElement: StatValueFunc;
  export const getAverageValue: StatValueFunc;
}

/* 
    getMaxIndex,
    getMaxElement,
    getMinIndex,
    getMinElement,
    getMedianIndex,
    getMedianElement,
    getAverageValue
     */
