import { Tree } from "antd";
import styled from "styled-components";

const { DirectoryTree } = Tree;

const StyledTree = styled(DirectoryTree)`
  margin-top: 8px;
  &.ant-tree-directory {
    color: #e7e7e7;
    background: transparent;
    .ant-tree-treenode-selected::before {
      color: #ffffff;
      background: transparent;
    }
    .ant-tree-treenode:hover::before {
      color: #ffffff;
      background: transparent;
    }
    .ant-tree-treenode .ant-tree-node-content-wrapper.ant-tree-node-selected {
      color: #40a9ff;
    }
  }
`;

export { StyledTree };
