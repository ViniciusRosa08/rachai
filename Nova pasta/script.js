const loginForm = document.getElementById("login");

async function handleLoginFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(loginForm || event.currentTarget);
  const nome = formData.get("nome");
  const email = formData.get("email");
  const password = formData.get("pw");
  console.log({
    nome,
    email,
    password,
  });

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "POST", //POST
    body: JSON.stringify({
      nome,
      email,
      password,
    }),
  });
  // .then((data) => data.json());
  // // console.log({
  // //   nome: res.name,
  // //   id: res.id,
  // // });
}
