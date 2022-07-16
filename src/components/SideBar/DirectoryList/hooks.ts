import { useAsync, useLocation } from "react-use";

import { Key } from "rc-tree/lib/interface";
import { getCurrentItem } from "./utils";
import { html_beautify } from "js-beautify";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";

export function useDirectoryList() {
  const store = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useAsync(async () => {
    const pathname = location.pathname ?? "";
    const item = getCurrentItem(pathname.substr(1))!;
    store.setCurrentKey(item.key!);
    await getHtmlFile(item.path!);
  }, []);

  async function handleSelect(keys: Key[], { node }: Record<string, any>) {
    if (node.path) {
      store.setCurrentKey(keys[0] as string);
      await getHtmlFile(node.path);
      const path = node.path.replace(".html", "");
      navigate(path);
    }
    if (node.href) {
      window.open(node.href);
    }
  }

  async function getHtmlFile(path: string) {
    const url = `/resources/codes/${path}?__time=${new Date().getTime()}`;
    await fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const html = html_beautify(text, {
          indent_size: 2,
        });
        store.setHtmlCode(html);
      });
  }

  return {
    currentKey: store.currentKey,
    handleSelect,
  };
}
