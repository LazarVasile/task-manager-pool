import { collors } from "../../utils/color-pallets";
export default theme => ({
  columnHeader: {
    padding: "10px 15px 10px 15px", 
    // marginLeft: 20, 
    background: collors.blue.primary, 
    borderRadius: 5, 
    textAlign: "center",
    color: collors.white.primary,
  },
  columnContent: {
    marginTop: 20,
    borderRadius: 5,
    height: "calc(100vh - 200px)",
    padding: "10px 15px 10px 15px", 
    background: collors.gray.light,
  },
  container: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start", 
    paddingTop: 20, 
    paddingRight: 20, 
    height: "fit-template", 
    width: "100%",
    paddingLeft: "20px",
  },
  workItem: {
    background: collors.white.light,
    borderRadius: 5,
    padding: "10px 20px 10px 20px",
    marginBottom: 15,
  },
  workItemTitle: {
    color: collors.blue.primary,
    fontSize: 17
  },
  workItemContent: {
    marginTop: 10,
    color: "gray",
    fontSize: 14
  },
  plusIconContainer : {
    textAlign: "center",
    marginTop: 40
  },
  plusIcon: {
    fontSize: 60,
    marginLeft: "auto",
    marginRight: "auto",
    float: "center",
    color: collors.blue.dark
  }

});