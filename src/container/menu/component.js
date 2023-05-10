import React from "react";
import { Link } from "react-router-dom";
import { User } from "../user";
import { WorkItem } from "../work-item"
import Logo from "../../assets/images/Logo.svg"

const Menu = ({ classes }) => {
    // function MouseOver(event) {
    //     event.target.style.background = '#181A1E';
    // }
    // function MouseOut(event) {
    //     event.target.style.background = "";
    // }



    return (
        <div className={classes.menu}>
            <div style={{textAlign:"center", padding: "35px 50px 35px 50px"}}> 
                <img className={classes.logo} src={Logo}></img>
            </div>
            <div className={classes.menuItems}>
                <nav className={classes.links}>
                    {/* <Link onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link} to="/home">Home</Link> <br />
                    <Link onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link} to="/user">User</Link> <br />
                    <Link onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link} to="/work-item">Work item</Link> <br /> */}
                
                      <Link className={classes.link} to="/work-item">Home</Link> <br />
                    <Link className={classes.link} to="/user">User</Link> <br />
                    <Link className={classes.link} to="/work-item">Work item</Link> <br /> 
               
                </nav>
            </div>
        </div>
    );
}

export default Menu;