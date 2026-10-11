let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();

    console.log(this.users);
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    let userCards = document.querySelector("#userCards");

    userCards.innerHTML = "";
    this.users.forEach(function (user) {
      let card = document.createElement("div");
      card.classList.add("card");

      let img = document.createElement("img");
      img.src = user.photo;
      img.alt = "user.username";

      let name = document.createElement("h3");
      name.textContent = user.username;

      let role = document.createElement("h4");
      role.textContent = user.role;

      let bio = document.createElement("p");
      bio.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);

      userCards.appendChild(card);
    });
  },
  removeUser: function () {},
};
userManager.init();
