import { DownOutlined, RightOutlined } from "@ant-design/icons";
import {
  ExampleDirectory,
  ExampleFile,
  ExampleLiGroup,
  ExampleTree,
  ExampleUlGroup,
} from "./style";

import { observer } from "mobx-react-lite";
import { useMount } from "react-use";
import { useState } from "react";
import { useStore } from "@/store";

function DirectoryList() {
  useMount(() => {
    fetch(`./resources/examples.json?__time=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((json) => {
        setList(json);
      });
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
    return node.expand ? (
      <DownOutlined
        onClick={() => {
          expandNode(node);
        }}
      />
    ) : (
      <RightOutlined
        onClick={() => {
          expandNode(node);
        }}
      />
    );
  }

  function getChildrenDom(node: any) {
    if (node.expand === undefined) {
      node.expand = true;
    }
    if (!node.children || node.children.length === 0) {
      return (
        <ExampleFile
          key={node.key}
          onClick={() => {
            handleSelect({ node });
          }}
        >
          {node.title}
        </ExampleFile>
      );
    } else {
      return (
        <ExampleLiGroup key={node.key}>
          {getIcon(node)}
          <ExampleDirectory
            onClick={() => {
              expandNode(node);
            }}
          >
            {node.title}
          </ExampleDirectory>
          {node.expand ? (
            <ExampleUlGroup key={node.key}>
              {node.children.map((child: any) => {
                return getChildrenDom(child);
              })}
            </ExampleUlGroup>
          ) : (
            ""
          )}
        </ExampleLiGroup>
      );
    }
  }

  return (
    <ExampleTree>
      {list.map((node: any) => {
        return getChildrenDom(node);
      })}
    </ExampleTree>
  );
}

export default observer(DirectoryList);
