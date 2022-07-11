import { useAsync, useLocation } from "react-use";

import { html_beautify } from "js-beautify";
import { useStore } from "@/store";

export function useCodeEditor() {
  const store = useStore();
  const location = useLocation();

  useAsync(async () => {
    const path = location.pathname!;
    await getHtmlFile(path);
  }, [location.pathname]);

  async function getHtmlFile(path: string) {
    const url = `/resources/codes${path}.html?__time=${new Date().getTime()}`;
    await fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const html = html_beautify(text, {
          indent_size: 2,
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
