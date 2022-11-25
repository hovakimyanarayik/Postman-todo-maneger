import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Routes from "./Routes";


import "./App.css";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";




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
