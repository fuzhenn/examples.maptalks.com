import { IFrame } from "./style";
import { observer } from "mobx-react-lite";
import { useCodePreview } from "./hooks";

function CodePreview() {
  const { code } = useCodePreview();

  return <IFrame sandbox="allow-scripts allow-same-origin" srcDoc={code} />;
}

export default observer(CodePreview);
