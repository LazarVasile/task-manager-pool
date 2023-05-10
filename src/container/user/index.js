import styles from "./styles";
import component from "./component";

import { withStyles } from "@material-ui/styles";

export { sagaWatcher } from "./saga";
export const User = withStyles(styles)(component);