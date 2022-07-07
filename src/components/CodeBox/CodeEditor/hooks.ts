import { html_beautify } from "js-beautify";
import { useAsync } from "react-use";
import { useStore } from "@/store";

export function useCodeEditor() {
  const store = useStore();

  useAsync(async () => {
    const hash = window.location.hash;
    if (hash && hash.indexOf("/codes/") > -1) {
      await getHtmlFile(hash.substring(1, Infinity));
    }
  }, []);

  useAsync(async () => {
    if (store.currentKey && store.isFile) {
      window.location.hash = `#${store.currentKey}`;
      await getHtmlFile(store.currentKey);
    }
  }, [store.currentKey]);

  async function getHtmlFile(filePath: string) {
    const url = `./resources${filePath}?__time=${new Date().getTime()}`;
    await fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const html = html_beautify(text, {
          indent_size: 2,
          end_with_newline: true,
        });
        store.setHtmlCode(html);
      });
  }

  function handleCodeChange(value: string) {
    store.setHtmlCode(value);
  }

  return {
    code: store.htmlCode,
    handleCodeChange,
  };
}
