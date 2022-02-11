import { action, makeObservable, observable } from "mobx";

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable currentKey = "";
  @observable htmlCode = "";
  @observable cssCode = "";
  @observable jsCode = "";

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

  @action setInit() {
    this.currentKey = "";
    this.htmlCode = "";
    this.cssCode = "";
    this.jsCode = "";
  }
}
