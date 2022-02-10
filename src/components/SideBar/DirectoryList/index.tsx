import { DownOutlined } from "@ant-design/icons";
import { StyledTree } from "./style";
import { list } from "./config";

function DirectoryList() {
  return <StyledTree switcherIcon={<DownOutlined />} treeData={list} />;
}

export default DirectoryList;
