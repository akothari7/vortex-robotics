import { Router } from "express";
import axios from "axios";

export const auth = Router();
const clientID = "Iv1.4c7c614fb4d6ce13";
const clientSecret = "6d2b46bc26740cb9884e88ff934e31b6afe2f254";
const clientURL = "http://localhost:3000";
let accessToken: string;

//authenticate a user using github
auth.get("/auth/github", (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:4000/api/auth/github/callback`;
  res.redirect(url);
});

//Callback URL after auth is completed
auth.get("/auth/github/callback", (req, res) => {
  //code from the query param
  const code = req.query.code;

  //send a request to retrieve the user access token
  axios({
    method: "POST",
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    accessToken = response.data.access_token;

    res.redirect("/api/auth/github/success");
  });
});

//fetch the user sending the token
auth.get("/auth/github/success", (req, res) => {
  axios({
    method: "GET",
    url: `https://api.github.com/user`,
    headers: {
      Authorization: `token ${accessToken}`,
    },
  }).then((response) => {
    const data = response.data;

    //set session variables
    if (data) {
      req.session!.githubID = data.id;
      req.session!.token = accessToken;

      //redirect to client UI
      res.redirect(`/admin`);
    } else {
      console.log(`An error happened with setting the cookie`);
    }
  });
});

//log out user by destroying session
auth.get("/auth/logout", (req, res) => {
  req.session = null;
  res.redirect(`${clientURL}`);
});
