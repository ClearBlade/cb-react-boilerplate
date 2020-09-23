import React from "react";
import ReactDOM from "react-dom";
import App from "../../../../../../../../components/App";

export function disableStyleSheets() {
  Object.keys(document.styleSheets).forEach((k) => {
    document.styleSheets[(k as unknown) as number].disabled = true;
  });
}

const EntryPoint: () => React.FC<{}> = () => {
  disableStyleSheets();
  return () => <App />;
};

function PortalApp() {
  const TheApp = EntryPoint();
  return <TheApp />;
}

ReactDOM.render(<PortalApp />, document.getElementById("page-wrap"));
export default PortalApp;
