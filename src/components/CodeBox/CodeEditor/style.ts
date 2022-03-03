import { Tabs } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 45%;
  height: 100%;
  .cm-theme-dark {
    height: 100%;
  }
  .ͼ1 .cm-scroller {
    overflow-y: auto;
  }
`;

const StyledTabs = styled(Tabs)`
  height: 100%;
  overflow-y: auto;
  .ant-tabs-nav {
    margin: 0;
    color: #e7e7e7;
    background: #3e3e3e;
    &::before {
      border: none;
    }
  }
  .ant-tabs-tab {
    padding: 12px;
    &:hover {
      color: #fff;
    }
    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #fff;
    }
    & + .ant-tabs-tab {
      margin: 0 0 0 16px;
    }
  }
  .ant-tabs-ink-bar {
    background: #e7e7e7;
  }
  .ant-tabs-content {
    height: 100%;
  }
`;

export { Container, StyledTabs };
