getUser("Aakash6008");

async function getUser(username) {
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const main = document.getElementById("main");
  const cardHTML = `
        <div class="card bg-dark text-light">
          <div class="d-flex flex-wrap justify-content-center align-item-center">
            <div>
                <img class="img" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info text-center">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info d-flex flex-wrap">
                    <li><strong>Followers: </strong>${user.followers}</li>
                    <li><strong>Following: </strong>${user.following}</li>
                    <li><strong>Repos: </strong>${user.public_repos}</li>
                    <li><strong>Twitter: </strong>${user.twitter_username}</li>
                    <li><strong>Location: </strong>${user.location}</li>
                </ul>
            </div>
      
        </div>
    `;

  main.innerHTML = cardHTML;
}
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = document.getElementById("search");
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
