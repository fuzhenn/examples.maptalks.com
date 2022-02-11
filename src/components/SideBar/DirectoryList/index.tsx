import { DownOutlined } from "@ant-design/icons";
import { Key } from "rc-tree/lib/interface";
import { StyledTree } from "./style";
import { list } from "@/config";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

function DirectoryList() {
  const store = useStore();

  function handleSelect(keys: Key[]) {
    store.setCurrentKey(keys[0] as string);
  }

  return (
    <StyledTree
      switcherIcon={<DownOutlined />}
      treeData={list}
      onSelect={handleSelect}
    />
  );
}

export default observer(DirectoryList);
