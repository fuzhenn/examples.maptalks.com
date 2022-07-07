import { useStore } from "@/store";

export function useCodePreview() {
  const store = useStore();

  return {
    code: store.htmlCode,
  };
}
