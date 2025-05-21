import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  window.onload = function() {
let pronoun = ["my", "yours", "secret"]
let adj = ["awesome", "4Geeks", "stupid"]
let noun = ["web", "Page", "portal"]
let dom = [".com", ".es", ".org"]

  let domain = 
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    dom[Math.floor(Math.random() * dom.length)];

     document.body.innerHTML = domain;

     console.log("the generate domain:", domain);
  };