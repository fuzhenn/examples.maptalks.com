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

const ExampleTree = styled.ul`
  padding-left: 0;
  color: #cfcfcf;
`;

const ExampleUlGroup = styled.ul`
  padding-left: 10px;
  list-style-type: none;
`;

const ExampleLiGroup = styled.ul`
  padding-left: 10px;
  list-style-type: none;
`;

const ExampleDirectory = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

const ExampleFile = styled.li`
  padding-left: 20px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #fff;
  }
`;

export {
  StyledTree,
  ExampleTree,
  ExampleUlGroup,
  ExampleLiGroup,
  ExampleDirectory,
  ExampleFile,
};
