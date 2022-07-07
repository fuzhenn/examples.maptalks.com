import { action, makeObservable, observable } from "mobx";

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable currentKey = "";
  @observable htmlCode = "";
  @observable isFile = false;

  @action setCurrentKey(key: string) {
    this.currentKey = key;
  }

  @action setHtmlCode(code: string) {
    this.htmlCode = code;
  }

  @action setIsFile(isFile: boolean) {
    this.isFile = isFile;
  }

  @action setInit() {
    this.currentKey = "";
    this.htmlCode = "";
    this.isFile = false;
  }
}
