function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f10038571b3e14038ft5b2o6ea2a4fab";
  let prompt = `User instructions: Generate a Norwegian poem about ${instructionsInput.value} `;
  let context =
    "You are a romantic poem expert and write beautiful Norwegian poems. Your mission is to create a poem in simple and separate lines with <br>. Start each sentence with capital letter. The poem should be written in a romantic style. Sign the poem with 'Generator kodet av Marita Hamran via SheCodes AI Api' inside a <strong> element at the end of the poem ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Lager et norsk dikt om ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
