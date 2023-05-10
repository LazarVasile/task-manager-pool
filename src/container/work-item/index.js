import styles from "./styles";
import component from "./component";

import { withStyles } from "@material-ui/styles";

export { default as reducer } from "./slice";
export { sagaWatcher } from "./saga";
export const WorkItem = withStyles(styles)(component);