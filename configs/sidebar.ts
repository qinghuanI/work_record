import { workRoutes } from "./routes/work";
import { solutions } from "./routes/solutions";
import { designPatterns } from "./routes/design-patterns";

export const sidebar = {
  "/": workRoutes,
  "/solutions/": solutions,
  "/design-patterns/": designPatterns,
};
