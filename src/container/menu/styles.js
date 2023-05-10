import { hover } from "@testing-library/user-event/dist/hover";
import { collors } from "../../utils/color-pallets";
export default theme => ({
  logo: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  menu: {
    zIndex: 9,
    width: "100%",
    backgroundColor: collors.blue.dark,
    height: "100%"
  },

  links: {
    display: "flex",
    flexDirection: "column"
  },
  linkContainer: {
   
  },

  link: {
    marginTop: "10px",
    color:"black",
    fontWeight:"600",
    paddingLeft: "50px",
    textDecoration: "none",
    color: collors.blue.light,
    display: "flex",
    flexDirection: "column"
  },
  menuItems: {
    marginTop: "30px"
  },
});