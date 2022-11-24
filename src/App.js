import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Routes from "./Routes";
import { useDispatch } from 'react-redux'
import { getUser } from "./slices/userSlice";

import "./App.css";



function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
