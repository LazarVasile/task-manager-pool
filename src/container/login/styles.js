import { collors } from "../../utils/color-pallets";

export default theme => ({
  mainPage: {
    overflowY:"scroll",
    paddingTop: 10,
    textAlign: "center",
    height: "100%",
    width: "100%",
    background: "linear-gradient(90deg, rgba(24,154,180,1) 0%, rgba(15,111,137,1) 20%, rgba(5,68,94,1) 40%, rgba(5,68,94,1) 60%, rgba(15,111,137,1) 80%, rgba(24,154,180,1) 100%);"
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 420, 
    height: 820,
  },
  logoContent: {
    height: "18%",
    padding: "60px 60px 60px 60px"
  },
 
  loginContent: {
    position: "relative",
    height: "75%",
    background: collors.white.light,
    borderRadius: 5,
    boxShadow: "7px 7px 7px 2px #00B6BC"
  },
  loginTitle: {
    padding: 20,
    textAlign: "center",
    fontSize: 38,
    color: collors.blue.primary
  },
  loginInfoMessage: {
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 60,
    marginTop: 30,
    fontWeight: 400,
  },
  inputsContainer: { 
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
  },
  inputs: {
    width: "72%",
    fontSize: 40,
    marginBottom: 50,
    '& label.Mui-focused': {
      color: collors.blue.primary,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: collors.blue.primary,
    },
    '& .MuiInput-underline': {
      '&:hover' : {
      borderBottomColor: "red",
    }

    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: collors.blue.light, // Change the color of the underline when hovered
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: collors.blue.light,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: collors.blue.light,
    },
  },
  copyRightContainer: {
    height: "50px",
    position: "absolute",
    bottom: 0,
    paddingLeft: 40,
    display: "flex", 
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"center",
    color: "rgb(71, 71, 71)",
  },
  copyRightText: {
    alignItems: "center",
    paddingBottom: 4,
  },
  submitButtonContainer: {
    height: 70,
    alignItems: "center",
    textAlign: "center",
  },
  submitButton: {
    marginTop: 20,
    width: "35%",
    borderRadius: 10,
    height: 45,
    fontSize: 18,
    color: "white",
    background: collors.blue.primary,
    "&:hover" : {
      cursor: "pointer",
    },
    fontWeight: 500,
  },
  labelInput: {
    color: collors.blue.light,
    fontSize: 18,
  },
  inputProps: {
    fontSize: 16,
    borderBottomColor: 'yellow',
    // borderBottom: '2px solid blue'
  
  }

});