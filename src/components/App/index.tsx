import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  createGenerateClassName,
  createMuiTheme,
  CssBaseline,
  StylesProvider,
  Typography,
} from "@material-ui/core";
import { appRoutes } from "./routes";
import AppShell from "./AppShell";
import Dashboard from "../../pages/Dashboard/Dashboard";
import OrdersPage from "../../pages/Orders";
import cb from "../../utils/cb";
import { ChatPage } from "../../pages/Chat";
import { ThemeProvider } from "styled-components";
import {
  defaultTheme,
  GlobalStyles,
  // @ts-ignore
} from "@gohypergiant/scoa-smds";
import { ScoaSmdsPage } from "../../pages/ScoaSmds";

if (process.env.NODE_ENV !== "production") {
  window.CB_PORTAL = {
    ClearBlade: cb,
  };

  window.CB_PORTAL.ClearBlade.init({
    URI: "http://127.0.0.1:9000",
    messagingURI: "127.0.0.1",
    systemKey: "f0fdddf60bbae1ebb8c6e5f3a9a901",
    systemSecret: "F0FDDDF60BBE82A0ADC988EFD359",
    useUser: {
      email: "service@cb.com",
      authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmYWZlZGRmNjBiZjZkZmI5OTA5NGMyOTI4NGQwMDEiLCJzaWQiOiI4N2M1ZWZlNC1mZjg0LTQyMzgtYmQyMi01ZTdlYmViMmY4YjIiLCJ1dCI6MiwidHQiOjEsImV4cCI6LTEsImlhdCI6MTYwMDg5Njk1N30.WDum4Eg2rbm9jYrpdviCnmHX0zuZb_88q_KdmyY7GB8",
    },
    messagingPort: 8903,
  });
}

const theme = createMuiTheme();

const generateClassName = createGenerateClassName({
  productionPrefix: "my-app",
});

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <MuiThemeProvider theme={theme}>
          <StylesProvider generateClassName={generateClassName}>
            <CssBaseline />
            <AppShell>
              <Routes>
                <Route
                  path={appRoutes.DASHBOARD}
                  element={<Dashboard />}
                ></Route>
                <Route path={appRoutes.ORDERS} element={<OrdersPage />}></Route>
                <Route path={appRoutes.CHAT} element={<ChatPage />}></Route>
                <Route
                  path={appRoutes.SCOA_SMDS}
                  element={<ScoaSmdsPage />}
                ></Route>
                <Route
                  path={appRoutes.TODO}
                  element={
                    <Typography>
                      TODO: What will you build??{" "}
                      <span role="img" aria-label="smile">
                        😁
                      </span>
                    </Typography>
                  }
                ></Route>
              </Routes>
            </AppShell>
          </StylesProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
