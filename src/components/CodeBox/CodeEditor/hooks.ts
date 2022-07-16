import { useStore } from "@/store";

export function useCodeEditor() {
  const store = useStore();

  function handleCodeChange(value: string) {
    store.setHtmlCode(value);
  }

  return {
    code: store.htmlCode,
    handleCodeChange,
  };
}
