//my-demo-app/src/App.js
import React from 'react';
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Apple,
 } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
 import Session from "supertokens-auth-react/recipe/session";
 
 // import react-router-dom components
 
 import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
 
 // import SuperTokens Auth routes
 
 import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
 } from "supertokens-auth-react";
 
 import Home from "./Home/index.js";
 
 
 SuperTokens.init({
  appInfo: {
    appName: "My Demo App",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
 });
 
 
 function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
 
          <Route path="/" element={<Home />} />
 
        </Routes>
      </Router>
    </div>
  );
 }

 export default App;