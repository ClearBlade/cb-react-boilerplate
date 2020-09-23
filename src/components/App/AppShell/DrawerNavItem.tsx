import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useMatch, Link } from "react-router-dom";
import { appRoutes } from "../routes";

const useStyles = makeStyles<Theme, { selected: boolean }>((theme) => ({
  // get rid of the styles created by the <a/> tag that's rendered by react-router Link component
  root: {
    textDecoration: "none",
    color: "currentColor",
  },
  selected: {
    backgroundColor: "transparent !important",
    color: theme.palette.secondary.main,
  },
  listItemIcon: {
    color: ({ selected }) =>
      selected ? theme.palette.secondary.main : "inherit",
  },
}));

const DrawerNavItem: React.FC<{
  path: appRoutes;
  label: string;
  icon?: JSX.Element;
}> = ({ path, label, icon }) => {
  const match = useMatch(path);
  const selected = Boolean(match);
  const classes = useStyles({ selected });

  return (
    <Link to={path} className={classes.root}>
      <ListItem
        classes={{ selected: classes.selected }}
        dense
        selected={selected}
        button
        key={path}
      >
        {icon && (
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            {icon}
          </ListItemIcon>
        )}
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};

export default DrawerNavItem;
