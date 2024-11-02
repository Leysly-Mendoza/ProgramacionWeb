//Personajes populares
const popularCharacters = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbledore",
    "Severus Snape",
    "Rubeus Hagrid",
    "Draco Malfoy",
    "Sirius Black",
    "Lord Voldemort",
    "Luna Lovegood"
  ];
  
  // Aleatorio de personajes
  function getRandomCharacters(characters, count = 10) {
    const shuffled = characters.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Personajes populares
  function filterPopularCharacters(characters) {
    return characters.filter(character => popularCharacters.includes(character.name));
  }
  
  //Fetch()
  function fetchCharacters() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then(response => response.json())
      .then(data => {
        const popularOnly = filterPopularCharacters(data); 
        const randomCharacters = getRandomCharacters(popularOnly); 
        displayCharacters(randomCharacters);
      })
      .catch(error => console.error("Error:", error));
  }
  
  //Async/await 
  async function CharactersAsync() {
    try {
      const response = await fetch("https://hp-api.herokuapp.com/api/characters");
      const data = await response.json();
      const popularOnly = filterPopularCharacters(data); 
      const randomCharacters = getRandomCharacters(popularOnly); 
      displayCharacters(randomCharacters);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // XMLHttpRequest 
  function CharactersXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hp-api.herokuapp.com/api/characters", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const popularOnly = filterPopularCharacters(data); 
        const randomCharacters = getRandomCharacters(popularOnly); 
        displayCharacters(randomCharacters);
      }
    };
    xhr.onerror = function () {
      console.error("Error de conexión");
    };
    xhr.send();
  }
  
  //jQuery 
  function CharactersJQuery() {
    $.get("https://hp-api.herokuapp.com/api/characters", function (data) {
      const popularOnly = filterPopularCharacters(data);
      const randomCharacters = getRandomCharacters(popularOnly); 
      displayCharacters(randomCharacters);
    }).fail(function () {
      console.error("Error al cargar los datos");
    });
  }
  
  //Axios 
  function CharactersAxios() {
    axios
      .get("https://hp-api.herokuapp.com/api/characters")
      .then(response => {
        const popularOnly = filterPopularCharacters(response.data); 
        const randomCharacters = getRandomCharacters(popularOnly); 
        displayCharacters(randomCharacters);
      })
      .catch(error => console.error("Error:", error));
  }
  
  //Datos en el HTML
  function displayCharacters(characters) {
    const characterList = document.getElementById("character-list");
    characterList.innerHTML = ""; 
  
    characters.forEach(character => {
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("character");
  
      const characterImage = character.image ? character.image : 'https://via.placeholder.com/80';
      const characterHouse = character.house ? character.house : "N/A";
  
      characterDiv.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${characterImage}" alt="${character.name}" />
        <p><strong>House:</strong> ${characterHouse}</p>
      `;
  
      characterList.appendChild(characterDiv);
    });
  }
  