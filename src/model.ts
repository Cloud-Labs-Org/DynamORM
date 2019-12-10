import { IModel } from './interfaces';
import { Builder } from './builder';

export class Model implements IModel {
  hashKey;
  rangeKey;
  localIndexes;
  globalIndexes;
  builder = new Builder();

  query() {
    this.builder.query();
    return this;
  }

  scan() {
    this.builder.scan();
    return this;
  }

  clear() {
    this.builder.clear();
    return this;
  }
}
