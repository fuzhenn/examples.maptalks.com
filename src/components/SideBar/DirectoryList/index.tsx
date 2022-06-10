
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useMount, useUpdateEffect } from "react-use";
import { useState } from "react";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import './style.css';

function DirectoryList() {
  useMount(() => {
    fetch(`./resources/examples.json?__time=${new Date().getTime()}`).then(res => res.json()).then(json => {
      setList(json);
    })
  });
  const store = useStore();

  const [list, setList] = useState([]);

  function handleSelect({ node }: any) {
    store.setIsFile(node.isFile as boolean);
    store.setCurrentKey(node.path as string);
    if (node.href) {
      window.open(node.href);
    }
  }

  function cloneObject(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  function expandNode(node: any) {
    node.expand = !node.expand;
    setList(cloneObject(list));
  }

  function getIcon(node: any) {
    return node.expand ? <DownOutlined onClick={() => {
      expandNode(node);
    }} /> : <RightOutlined onClick={() => {
      expandNode(node);
    }} />
  }

  function getChildrenDom(node: any) {
    if (node.expand === undefined) {
      node.expand = true;
    }
    if (!node.children || node.children.length === 0) {
      return <li key={node.key} className="example-file" onClick={() => {
        handleSelect({ node });
      }}>{node.title}</li>
    } else {
      return <li key={node.key} className="example-group">{
        getIcon(node)
      }<span className="example-directory" onClick={() => {
        expandNode(node);
      }}>{node.title}</span>
        {
          node.expand ? <ul key={node.key} className="example-group"> {
            node.children.map((child: any) => {
              return getChildrenDom(child);
            })

          }</ul > : ''
        }</li>
    }
  }


  return (
    <ul className="example-tree">
      {
        list.map((node: any) => {
          return getChildrenDom(node);
        })
      }
    </ul>
  );
}

export default observer(DirectoryList);
