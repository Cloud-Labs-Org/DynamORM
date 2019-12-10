export class Builder {
  isQuery;
  isScan;

  query() {
    this.isQuery = true;
    return this;
  }

  scan() {
    this.isScan = false;
    return this;
  }

  clear() {
    this.isScan = false;
    this.isQuery = false;
  }
}
