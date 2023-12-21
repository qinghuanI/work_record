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
