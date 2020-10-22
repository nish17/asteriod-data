import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));
export default function Searchbar({ submitSearch }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchTerm);
  };

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
          placeholder="search by ID"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
