import { action, makeObservable, observable } from "mobx";

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable currentKey = "";
  @observable htmlCode = "";
  @observable cssCode = "";
  @observable jsCode = "";
  @observable isFile = false;
  // 是否查看完整代码
  @observable isReading = false;

  @action setCurrentKey(key: string) {
    this.currentKey = key;
  }

  @action setHtmlCode(code: string) {
    this.htmlCode = code;
  }

  @action setCssCode(code: string) {
    this.cssCode = code;
  }

  @action setJsCode(code: string) {
    this.jsCode = code;
  }

  @action setIsReading(isReading: boolean) {
    this.isReading = isReading;
  }
  @action setIsFile(isFile: boolean) {
    this.isFile = isFile;
  }

  @action setInit() {
    this.currentKey = "";
    this.htmlCode = "";
    this.cssCode = "";
    this.jsCode = "";
    this.isReading = false;
    this.isFile = false;
  }
}
