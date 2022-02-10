import { StyledInput } from "./style";
import searchImg from "./search.png";

function SearchInput() {
  return <StyledInput placeholder="搜索" prefix={<img src={searchImg} />} />;
}

export default SearchInput;
