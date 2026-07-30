function displayPoem(response) {
  console.log("poem generated");
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
  let prompt = `User instructions: Generate a Norwegian poem about ${instructionsInput.value}: `;
  let context =
    "You are a romantic poem expert and write beautiful Norwegian poems. Your mission is to create a poem in basic HTML and separate lines with <br>. " +
    "Make sure to follow the user instructions. Do not include any other text or explanations, only the poem itself. " +
    "The poem should be written in a romantic style without lines, symbols or special characters. " +
    "The poem should be at least 4 lines long. " +
    "The poem should be written in Norwegian language.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
