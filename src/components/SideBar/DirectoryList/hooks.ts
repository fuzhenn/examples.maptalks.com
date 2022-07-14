import { useLocation, useMount } from "react-use";

import { Key } from "rc-tree/lib/interface";
import { getCurrentKey } from "./utils";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";

export function useDirectoryList() {
  const store = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useMount(() => {
    const pathname = location.pathname ?? "";
    const key = getCurrentKey(pathname.substr(1));
    store.setCurrentKey(key ?? "");
  });

  function handleSelect(keys: Key[], { node }: Record<string, any>) {
    if (node.path) {
      store.setCurrentKey(keys[0] as string);
      const path = node.path.replace(".html", "");
      navigate(path);
    }
    if (node.href) {
      window.open(node.href);
    }
  }

  return {
    currentKey: store.currentKey,
    handleSelect,
  };
}
