import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  /** scroll style **/
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #4a4a4a;
  }
  ::-webkit-scrollbar-thumb {
    background: #757575;
  }
  ::-webkit-scrollbar-corner {
    background: #5e5d5d;
  }
`;

const Content = styled.div`
  display: flex;
  height: 100%;
`;

export { Container, Content };
