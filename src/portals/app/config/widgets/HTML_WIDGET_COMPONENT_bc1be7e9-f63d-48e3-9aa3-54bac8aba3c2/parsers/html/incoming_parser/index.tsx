import React from "react";
import ReactDOM from "react-dom";
import App from "../../../../../../../../components/App";
// @ts-ignore
import { defaultTheme, insertCustomProperties } from "@gohypergiant/scoa-smds";

export function disableStyleSheets() {
  Object.keys(document.styleSheets).forEach((k) => {
    document.styleSheets[(k as unknown) as number].disabled = true;
  });
}

const EntryPoint: () => React.FC<{}> = () => {
  disableStyleSheets();
  if (!document.querySelector("[data-css-variables]")) {
    insertCustomProperties(defaultTheme);
  }
  return () => <App />;
};

function PortalApp() {
  const TheApp = EntryPoint();
  return <TheApp />;
}

ReactDOM.render(<PortalApp />, document.getElementById("page-wrap"));
export default PortalApp;
