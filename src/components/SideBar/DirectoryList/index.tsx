import { DataNode, EventDataNode, Key } from "rc-tree/lib/interface";

import { DownOutlined } from "@ant-design/icons";
import { StyledTree } from "./style";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useMount, useUpdateEffect } from "react-use";
import { useState } from "react";

function DirectoryList() {
  useMount(() => {
    fetch(`./resources/examples.json?__time=${new Date().getTime()}`).then(res => res.json()).then(json => {
      setList(json);
      setExpandAll(true);
    })
  });
  const store = useStore();

  let [list, setList] = useState([]);
  let [expandAll, setExpandAll] = useState(false);

  function handleSelect(keys: Key[], { node }: any) {
    // store.setCurrentKey(node as string);
    store.setIsFile(node.isFile as boolean);
    store.setCurrentKey(node.path as string);
    if (node.href) {
      window.open(node.href);
    }
  }


  return (
    <StyledTree
      defaultExpandAll={expandAll}
      autoExpandParent={expandAll}
      showIcon={false}
      defaultSelectedKeys={['0-0-0']}
      switcherIcon={<DownOutlined />}
      treeData={list as any[]}
      onSelect={handleSelect}
    />
  );
}

export default observer(DirectoryList);
