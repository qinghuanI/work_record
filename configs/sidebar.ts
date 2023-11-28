import { workRoutes } from "./routes/work";
import { solutions } from "./routes/solutions";
import { designPatterns } from "./routes/design-patterns";
import { codeBlock } from "./routes/code-block";

export const sidebar = {
  "/": workRoutes,
  "/solutions/": solutions,
  "/design-patterns/": designPatterns,
  "/code-block/": codeBlock,
};
