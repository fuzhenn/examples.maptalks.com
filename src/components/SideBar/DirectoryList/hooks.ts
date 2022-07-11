import { Key } from "rc-tree/lib/interface";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";

export function useDirectoryList() {
  const store = useStore();
  const navigate = useNavigate();

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
