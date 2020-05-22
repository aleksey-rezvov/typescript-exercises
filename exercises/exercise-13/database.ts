export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: unknown[];

  constructor(filename: string, fullTextSearchFieldNames: string[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(query: string): Promise<T[]> {
    return [];
  }
}
