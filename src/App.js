import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { NotificationContainer, NotificationManager } from "react-notifications";


import "./App.css";

function App() {
  const { error } = useSelector(state => state.user)

  useEffect(() => {
    if(!error) return
    NotificationManager.error(error)
  }, [error])
  
  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <NotificationContainer />
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
