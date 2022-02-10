import { Tree } from "antd";
import styled from "styled-components";

const StyledTree = styled(Tree)`
  margin-top: 8px;
  color: #e7e7e7;
  background: transparent;
  .ant-tree-node-content-wrapper:hover {
    color: #ffffff;
    background: transparent;
  }
  .ant-tree-node-content-wrapper.ant-tree-node-selected {
    color: #69c0ff;
    background: transparent;
  }
`;

export { StyledTree };
