import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const PageContainer: React.FC = ({ children }) => {
  const { container } = useStyles();
  return (
    <Container maxWidth="lg" className={container}>
      {/* // @ts-ignore */}
      {children}
    </Container>
  );
};

export default PageContainer;
