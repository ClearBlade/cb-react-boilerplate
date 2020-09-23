import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { appRoutes } from "./routes";
import AppShell from "./AppShell";
import Dashboard from "../../pages/Dashboard/Dashboard";
import OrdersPage from "../../pages/Orders";
import cb from "../../utils/cb";

window.CB_PORTAL = {
  ClearBlade: cb,
};

window.CB_PORTAL.ClearBlade.init({
  URI: "http://127.0.0.1:9000",
  messagingURI: "127.0.0.1",
  systemKey: "f0fdddf60bbae1ebb8c6e5f3a9a901",
  systemSecret: "F0FDDDF60BBE82A0ADC988EFD359",
  useUser: {
    email: "demoSimulator@clearblade.com",
    authToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmYWZlZGRmNjBiZjZkZmI5OTA5NGMyOTI4NGQwMDEiLCJzaWQiOiI4N2M1ZWZlNC1mZjg0LTQyMzgtYmQyMi01ZTdlYmViMmY4YjIiLCJ1dCI6MiwidHQiOjEsImV4cCI6LTEsImlhdCI6MTYwMDg5Njk1N30.WDum4Eg2rbm9jYrpdviCnmHX0zuZb_88q_KdmyY7GB8",
  },
  messagingPort: 8903,
});

const theme = createMuiTheme();

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppShell>
          <Routes>
            <Route path={appRoutes.DASHBOARD} element={<Dashboard />}></Route>
            <Route path={appRoutes.ORDERS} element={<OrdersPage />}></Route>
          </Routes>
        </AppShell>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
