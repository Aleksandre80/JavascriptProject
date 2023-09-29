let bouton = document.querySelector("#add")
bouton.addEventListener("click", afficherForm);
let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", deleteContact);
var contactList = [];

function deleteContact() {
    localStorage.clear();
    var element = document.getElementById("retrieve");
    element.innerHTML = "";
}

function afficherForm() {
    let formulaire = document.querySelector("#form");
    formulaire.classList.remove("hide");
}

function store() {
    var genre = document.getElementById('genre').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var tel = document.getElementById('tel').value;
    const contact = {
        genre: genre,
        nom: nom,
        prenom: prenom,
        tel: tel
    }
    contactList = JSON.parse(window.localStorage.getItem("contact")) || [];
    contactList.push(contact);
    console.log(contactList);
    window.localStorage.setItem("contact", JSON.stringify(contactList));
}

let sendButton = document.querySelector("#submit");
sendButton.addEventListener("click", store);
sendButton.addEventListener("click", retrieveContactList);

function retrieveContactList() {
    var element = document.getElementById("retrieve");
    var contactList = window.localStorage.getItem("contact");
    contactList = JSON.parse(contactList);
    for (let i = 0; i < contactList.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.classList.add("formList");
        var infor = document.createTextNode(contactList[i].genre + " " + contactList[i].nom + " " + contactList[i].prenom + " " + contactList[i].tel);
        var edit = document.createElement("button");
        edit.innerHTML = "Edit";
        edit.setAttribute("id", "edit");
        edit.classList.add("btn");
        edit.classList.add("btn-warning");
        edit.addEventListener("click", function () {
            let formulaire = document.querySelector("#form");
            formulaire.classList.remove("hide");
            document.getElementById('genre').value = contactList[i].genre;
            document.getElementById('nom').value = contactList[i].nom;
            document.getElementById('prenom').value = contactList[i].prenom;
            document.getElementById('tel').value = contactList[i].tel;
            contactList.splice(i, 1);
            localStorage.setItem("contact", JSON.stringify(contactList));
        });
        paragraph.appendChild(edit);
        paragraph.appendChild(infor);
        element.appendChild(paragraph);
    }
}
retrieveContactList();





