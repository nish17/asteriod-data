import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import ClearIcon from '@material-ui/icons/Clear';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));
export default function Searchbar({ submitSearch, clearInput }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchTerm);
  };

  const handleOnFocus = (e) => {
    console.log('focused on input');
    
  };
  const handleClearIconClick = () => {
    clearInput(false);
    setSearchTerm('') 
  }
  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Input
          value={searchTerm}
          placeholder='search by ID'
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleOnFocus}
        /> <ClearIcon onClick={handleClearIconClick}/>
      </form>
    </div>
  );
}
