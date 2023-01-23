import React from "react";
import { AuthProvider } from "react-oidc-context";
import AppProvider from "./AppProvider";
import AppRoutes from "./config/routes";
import './App.css';
import { oidcConfig } from './config';



function App(){
  return (
    <AuthProvider {...oidcConfig}>
    <AppProvider>
      <AppRoutes />
    </AppProvider>      
  </AuthProvider>
)

}

export default App;



