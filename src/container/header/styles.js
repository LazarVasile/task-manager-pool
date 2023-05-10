import { collors } from "../../utils/color-pallets";

export default theme => ({
  header: {
    top: 0,
    height: "80px",
    width: "100%",
    background: collors.white.light,
    color: "#A5D7E8",
    textAlign: "right",
  },
  headerTitle: {
    paddingRight: "60px",
    paddingTop: 30,
    fontWeight: "500",
    fontSize: 26,
    color: collors.blue.primary
  },
 
});