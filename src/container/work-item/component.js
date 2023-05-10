import React from 'react'
import { getWorkItemDetails } from './slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sagaWatcher } from './saga';
import { Grid, TextField, Typography } from '@material-ui/core';
import { FiPlusCircle } from "react-icons/fi";

const WorkItem = ({ classes }) => {

  const dispatch = useDispatch();

  var workItemColumns = ["NEW", "OPEN", "ACTIVE", "CLOSED", "DELETED"]
  const useTestClick = () => {
    console.log("test");
    dispatch(getWorkItemDetails());
  };


  return (
    <Grid container className={classes.container}>
      {workItemColumns.map(column => {
        return <Grid item style={{ overflowX: "scroll", width: "20%" }}>
          <div style={{ paddingRight: "15px", paddingLeft: "15px" }}>
            <div className={classes.columnHeader}>
              <Typography >{column}</Typography>
            </div>
            <div className={classes.columnContent}>
              <div className={classes.workItem}>
                <div className={classes.workItemTitle}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className={classes.workItemContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur quam sit amet nibh porttitor, id euismod elit efficitur. Maecenas ullamcorper velit ac lacus scelerisque blandit. Praesent pulvinar malesuada libero, non congue nibh facilisis quis.
                </div>
              </div>

              <div className={classes.workItem}>
                <div className={classes.workItemTitle}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className={classes.workItemContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur quam sit amet nibh porttitor, id euismod elit efficitur. Maecenas ullamcorper velit ac lacus scelerisque blandit. Praesent pulvinar malesuada libero, non congue nibh facilisis quis.
                </div>
              </div>

              {column === "NEW" &&
                <div className={classes.plusIconContainer}>
                  <FiPlusCircle className={classes.plusIcon} />
                </div>
              }
            </div>

          </div>
        </Grid>
      })}
    </Grid>
  );
}

export default WorkItem;