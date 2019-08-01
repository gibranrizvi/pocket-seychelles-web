import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const CategoryPage = props => {
  const { category } = props.match.params;
  const classes = useStyles();

  return <div>{category.toUpperCase()}</div>;
};
export default CategoryPage;

const useStyles = makeStyles(theme => ({}));
