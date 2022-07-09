import { DataNode } from "rc-tree/lib/interface";
import { DownOutlined } from "@ant-design/icons";
import { StyledTree } from "./style";
import { list } from "@/config";
import { observer } from "mobx-react-lite";
import { useDirectoryList } from "./hooks";

function DirectoryList() {
  const { currentKey, handleSelect } = useDirectoryList();

  return (
    <StyledTree
      defaultExpandAll={true}
      showIcon={false}
      selectedKeys={[currentKey]}
      switcherIcon={<DownOutlined />}
      treeData={list as DataNode[]}
      onSelect={handleSelect}
    />
  );
}

export default observer(DirectoryList);
