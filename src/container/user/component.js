import React from 'react'
import { getUserDetails } from './slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const User = ({ classes }) => {

  const dispatch = useDispatch();
 
  const useTestClick = () => {
    console.log("test");
    dispatch(getUserDetails());
  };
  
  return (
    <div>
      <h1>User page</h1>
      <button onClick={useTestClick}
        
        className={classes.color}
      >
        A link to somewhere
      </button>

      {' '}
      and
      {' '}

      <a
        href="/somewhere-else"
        
      >
        a link to somewhere else
      </a>
    </div>
  );
}

export default User;