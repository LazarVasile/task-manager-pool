import { collors } from "../../utils/color-pallets";
export default theme =>  ({
   
    page: {
        display: "flex", 
        flexDirection: "row", 
        position: "fixed",
        minHeight: "100%",
        minWidth: "100%",
    },  
    footer: {
        backgroundColor: "green",
        height:"80px", 
        bottom:"0px", 
        width:"100%", 
        left:"0px", 
        right:"0px"
    },
   
    content: {
        minHeight: "calc(100vh - 80px)", 
        
        background: collors.white.light
    },
   
  });