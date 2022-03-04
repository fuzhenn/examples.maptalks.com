import { DataNode, EventDataNode, Key } from "rc-tree/lib/interface";

import { DownOutlined } from "@ant-design/icons";
import { StyledTree } from "./style";
import { list } from "@/config";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

function DirectoryList() {
  const store = useStore();

  function handleSelect(keys: Key[], { node }: any) {
    store.setCurrentKey(keys[0] as string);
    if (node.href) {
      window.open(node.href);
    }
  }

  return (
    <StyledTree
      showIcon={false}
      switcherIcon={<DownOutlined />}
      treeData={list as DataNode[]}
      onSelect={handleSelect}
    />
  );
}

export default observer(DirectoryList);
