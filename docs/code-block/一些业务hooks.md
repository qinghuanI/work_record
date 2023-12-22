# 一些重要的业务 hooks

## useScrollToBottom

滚动条滚动到底部

```ts
import { useEffect } from "react";

const useScrollToBottom = ({
  listRef,
  containerRef,
}: {
  listRef: Element | null;
  containerRef: Element | null;
}) => {
  useEffect(() => {
    if (!listRef || !containerRef) return;

    containerRef.scrollTo({
      top: listRef?.clientHeight,
      behavior: "smooth",
    });
  }, [listRef, containerRef]);
};
```

## useDynamicStyles

将对象形式的样式变成 css 变量并添加到项目中

```tsx
import { useEffect } from "react";

const useDynamicStyles = (): void => {
  const { userConfig } = useUserConfig();

  useEffect(() => {
    const head = document.head || document.getElementsByTagName("head")[0];

    const style = document.createElement("style");

    const code = convertCssVariable(userConfig?.styles);

    style.appendChild(document.createTextNode(code));

    head.appendChild(style);

    return (): void => {
      head.removeChild(style);
    };
  }, [userConfig?.styles]);
};
```

## useHeight

用于获取某个 DOM 对象的高度

```tsx
import { useEffect, useState } from "react";

const useHeight = ({ containerRef }: { containerRef: Element | null }) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef) return;

    const observer = new ResizeObserver((entries) => {
      const ele = entries[0];

      if (ele) {
        const elRect = ele.target?.getBoundingClientRect();

        setHeight(elRect?.height);
      }
    });

    observer.observe(containerRef);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return {
    height,
  };
};

export default useHeight;
```
