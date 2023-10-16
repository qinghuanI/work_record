import { workRoutes } from "./routes/work";
import { solutions } from "./routes/solutions";

export const sidebar = {
  "/": workRoutes,
  "/solutions/": solutions,
};
