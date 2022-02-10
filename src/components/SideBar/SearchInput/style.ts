import { Input } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  background: #484848;
  border: none;
  box-shadow: none;

  &.ant-input-affix-wrapper > input.ant-input {
    color: #e7e7e7;
    background: transparent;
    &::placeholder {
      color: #e8542b;
    }
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: none;
  }
  &.ant-input-affix-wrapper:focus {
    border: none;
    box-shadow: none;
  }
  .ant-input-prefix {
    margin-right: 8px;
  }
`;

export { StyledInput };
