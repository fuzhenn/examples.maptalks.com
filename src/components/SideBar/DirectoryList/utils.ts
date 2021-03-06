import { list } from "@/config";

function getCurrentItem(path: string) {
  for (const item1 of list) {
    if (item1.path) {
      if (item1.path.includes(path)) {
        return item1;
      }
    }
    if (item1.children) {
      for (const item2 of item1.children) {
        if (item2.path) {
          if (item2.path.includes(path)) {
            return item2;
          }
        }
        if (item2.children) {
          for (const item3 of item2.children) {
            if (item3.path) {
              if (item3.path.includes(path)) {
                return item3;
              }
            }
          }
        }
      }
    }
  }
}

export { getCurrentItem };
