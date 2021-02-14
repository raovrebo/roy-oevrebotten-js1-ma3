const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
// //const corsEnabledUrl = "https://noroffcors.herokuapp.com/"

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const reponse = await fetch(url);

        const data = await reponse.json();

        const games = data.results;

        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
        
            let gamesName = games[i].name;

            let gamesRating = games[i].rating;

            let gamesTag = games[i].tags;

            let numberOfGameTags = gamesTag.length;

            if (i === 8) {
            break;
            }
            resultsContainer.innerHTML += `<div class="result"><strong>Name: </strong>${gamesName} <br>
                                        <strong>Rating: </strong>${gamesRating} <br>
                                        <strong>Number of tags: </strong>${numberOfGameTags}</div>`;                                  
        }
    } catch (error) {
        console.log("An error occurred");
    }
}

getGames();
