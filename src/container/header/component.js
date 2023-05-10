import { Typography } from "@material-ui/core";
import React from "react";

const Header = ({ classes, currentUser }) => {
    return (
            <div className={classes.header}>
                <div>
                    <Typography className={classes.headerTitle}>Hello {currentUser}</Typography>
                </div>
            </div>
    );
}

export default Header;