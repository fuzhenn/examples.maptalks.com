import { Container } from "./style";
import DirectoryList from "./DirectoryList";
import SearchInput from "./SearchInput";

function SideBar() {
  return (
    <Container>
      <SearchInput />
      <DirectoryList />
    </Container>
  );
}

export default SideBar;
