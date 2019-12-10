export interface IModel {
  hashKey: string;
  rangeKey: string;
  localIndexes?: { [indexName: string]: { rangeKey: string} };
  globalIndexes?: { [indexName: string]: { hashKey: string, rangeKey: string} };
}
