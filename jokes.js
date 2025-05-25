// add joke to the list
const addJoke = async () => {
  const jokeText = await getJokes();
  const jokeElement = document.createElement("li");
  jokeElement.append(jokeText);
  jokeList.append(jokeElement);
};

// get joke from the API with axios
const getJokes = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = response.data.joke;
    return joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

// handling the button click event
const jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", addJoke);
