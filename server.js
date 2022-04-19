const express = require("express");
let cors = require("cors");
let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");
let { middleware } = require("supertokens-node/framework/express");
const app = express();
const port = 3001;

let {Google, Github, Apple} = ThirdPartyEmailPassword;

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
   apiBasePath: "/auth",
   websiteBasePath: "/auth"
 },
 recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
          clientSecret: "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",
        }),
        Github({
          clientId: "467101b197249757c71f",
          clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
        }),
        Apple({
          clientId: "4398792-io.supertokens.example.service",
          clientSecret: {
            keyId: "7M48Y4RYDL",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
            teamId: "YWQCXGJRJL",
          },
        }),
      ],
    }),
    Session.init(), // initializes session features
  ],
 });
 
 app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: [
     "content-type",
     ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
 );
 
 app.use(middleware());
 
 let {errorHandler} = require("supertokens-node/framework/express");
 // ...your API routes
 
 // Add this AFTER all your routes
 app.use(errorHandler())

app.get("/", (req, res) => {
 res.send("Hello World!");
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});

