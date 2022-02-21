import { list } from "../config";

function getFirstKey() {
  for (const item1 of list) {
    if (item1.html) {
      return item1.key;
    }
    if (item1.children) {
      for (const item2 of item1.children) {
        if (item2.html) {
          return item2.key;
        }
        if (item2.children) {
          for (const item3 of item1.children) {
            if (item3.html) {
              return item3.key;
            }
          }
        }
      }
    }
  }
  return "";
}

function getCurrentCodes(key: string) {
  for (const item1 of list) {
    if (item1.key === key) {
      return {
        html: item1.html,
        css: item1.css,
        js: item1.js,
      };
    }
    if (item1.children) {
      for (const item2 of item1.children) {
        if (item2.key === key) {
          return {
            html: item2.html,
            css: item2.css,
            js: item2.js,
          };
        }
        if (item2.children) {
          for (const item3 of item2.children) {
            if (item3.key === key) {
              return {
                html: item3.html,
                css: item3.css,
                js: item3.js,
              };
            }
          }
        }
      }
    }
  }
  return {
    html: "",
    css: "",
    js: "",
  };
}

export { getFirstKey, getCurrentCodes };
