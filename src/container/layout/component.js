import React from "react";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./slice";
import { selectUser, selectIsLoading } from "./selectors";
import { useState } from "react";
import { Header } from "./../header";
import { Menu } from "../menu";
import { User } from "./../user";
import { WorkItem } from "../work-item";
import { Route, Routes, useNavigate } from "react-router-dom";
import { history } from "../../store/store";
const Layout = ({ classes, Component }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let currentUser = useSelector(selectUser);
    let currentUser = null;
    let isLoading = useSelector(selectIsLoading);
    console.log(Component)
    useEffect(() => {
        dispatch(getUser());

    }, [isLoading])

    if (currentUser == null) {
        history.push("/login");
    }

    return (
        <Grid container style={{ display: "flex", flexDirection: "row" }}>
            <Grid item xs={2} >
                <Menu />
            </Grid>
            <Grid item xs={10} >
                <Grid container style={{ height: "auto", overflowY: "hidden", display: "flex", flexDirection: "column", width: "100%" }}>
                    <Grid item ys={2}>
                        <Header
                            currentUser={currentUser}
                        />
                    </Grid>
                    <Grid item ys={10}>
                        <div className={classes.content}>
                            <Component />
                        </div>
                    </Grid>
                </Grid>

                {/* <footer className={classes.footer}></footer> */}
            </Grid>

        </Grid>
    );
}

export default Layout;