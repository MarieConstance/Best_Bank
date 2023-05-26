let input = document.querySelector("#message");
let bouton = document.querySelector(".send-button");
let positionText = document.querySelector(".chat-window");

let sms = {
  imessage: "",
};

let reponses = [
  { reMessage: "hi", reponse: "hello" },
  { reMessage: "comment vous allez", reponse: "je vais bien" },
  { reMessage: "quel est votre nom", reponse: "je suis un chatbox" },
];

bouton.addEventListener("click", (e) => {
  e.preventDefault();
  let message = input.value;
  if (message == "") {
    alert("entrer un text");
  } else {
    message = message.trim();
    sms.imessage = message;
    console.log(message);
    input.value = "";
    demandeUtilisateur(message);
    reponseServeur(message);
  }
});

function demandeUtilisateur(demande) {
    let date = new Date();
  date=date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds()
  console.log(date);
  let contener = document.createElement("div");
  contener.style.textAlign = "right";

  contener.classList.add("envoye")

  contener.innerHTML = `<p> you: ${demande}</p> <span>${date}</span>`;

  positionText.appendChild(contener);
}

function reponseServeur(usermessage) {
  let chatbox = "";
  let date = new Date();
  date=date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds()
  console.log(date);
  if (usermessage == "hi") {
    chatbox = "hello";
  } else {
    chatbox = "votre requete a bien ete prise en compte";
  }

  let resp = document.createElement("div");
  resp .classList.add("server")
  resp.innerHTML = `<p>chatBox: ${chatbox}</p> 
   <span>${date}</span>`
  ;
  setTimeout(() => {
    positionText.appendChild(resp);
    positionText.scrollTop = positionText.scrollHeight;
  }, 1000);
}
