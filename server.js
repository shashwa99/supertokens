const express = require("express");

let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");

const app = express();
const port = 3001;

supertokens.init({
 framework: "express",
 supertokens: {
    connectionURI: "https://86f91271bfc711ec8f153db42cfa41f5-ap-southeast-1.aws.supertokens.io:3571",
    apiKey: "h-Ld3dWBb8mrT1np5rZboSCvCJ-=Sw"
 },
 appInfo: {

   // learn more about this on
   //https://supertokens.com/docs/thirdpartyemailpassword/appinfo

   appName: "My Demo App",
   apiDomain: "http://localhost:3001",
   websiteDomain: "http://localhost:3000",
 },
 recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId: "",
          clientSecret: "",
        }),
        Github({
          clientId: "",
          clientSecret: "",
        }),
        Apple({
          clientId: "",
          clientSecret: {
            keyId: "",
            privateKey: "",
            teamId: "",
          },
        }),
      ],
    }),
    Session.init(), // initializes session features
  ],
 });

app.get("/", (req, res) => {
 res.send("Hello World!");
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});