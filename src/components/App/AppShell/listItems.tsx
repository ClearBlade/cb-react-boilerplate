import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { appRoutes } from "../routes";
import DrawerNavItem from "./DrawerNavItem";

export const mainListItems = (
  <div>
    <DrawerNavItem
      path={appRoutes.DASHBOARD}
      label="Home"
      icon={<DashboardIcon />}
    />
    <DrawerNavItem
      path={appRoutes.ORDERS}
      label="Orders"
      icon={<ShoppingCartIcon />}
    />
    <DrawerNavItem path={appRoutes.CHAT} label="Chat" icon={<MessageIcon />} />
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Customers"
      icon={<PeopleIcon />}
    />
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Reports"
      icon={<BarChartIcon />}
    />
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Integrations"
      icon={<LayersIcon />}
    />
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Current month"
      icon={<AssignmentIcon />}
    />
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Last quarter"
      icon={<AssignmentIcon />}
    />
    <DrawerNavItem
      path={appRoutes.TODO}
      label="Year-end sale"
      icon={<AssignmentIcon />}
    />
  </div>
);
