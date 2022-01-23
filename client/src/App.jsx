import React from 'react';
import './components/BasicCard';
import BasicCard from './components/BasicCard';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
  fetch("/api")
      .then((res) =>  res.json())
      .then((data) => {
        setInterval(() => {
          
          return setData(data.message);
        }, 5000);
      });
  }, []);

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" sx={{pt:25}} align="center" >
  <BasicCard message={!data ? "Loading..." : data} />
    </Container>
  </React.Fragment>
  
  
  );
}

export default App;
