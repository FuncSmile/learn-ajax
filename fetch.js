// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
let data;
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.json();
    return console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://pokeapi.co/api/v2/pokemon/squirtle");
