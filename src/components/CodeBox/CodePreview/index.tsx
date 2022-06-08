import { IFrame } from "./style";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

function CodePreview() {
  const store = useStore();

  const doc = store.htmlCode;

  return <IFrame sandbox="allow-scripts allow-same-origin" srcDoc={doc} />;
}

export default observer(CodePreview);
