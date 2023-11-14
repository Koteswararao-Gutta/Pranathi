let currentState = "start";

let gameData = {
  start: {
    text: "You start your journey. Choose your first destination.",
    choices: ["Visit Museums", "Visit the Mountains", "Explore the Forest"],
    consequences: ["museums", "mountains", "forest"],
    image: "start.jpg",
  },
   museums: {
    text: "You decide to visit museums. What type of museum do you want to explore?",
    choices: ["Art Museum", "History Museum"],
    consequences: ["artMuseum", "historyMuseum"],
    image: "hall.jpg",
  },
  artMuseum: {
    text: "Exploring the art museum, you immerse yourself in creativity and beauty. A cultural experience!",
    choices: [""],
	image: "artMuseum.jpg",
  },
  historyMuseum: {
    text: "Visiting the history museum, you learn about the rich heritage of the region. An enlightening journey!",
	choices: [""],
    image: "historyMuseumDifferent.jpg",
  },
  mountains: {
    text: "You reach the breathtaking mountain range. What do you want to do?",
    choices: ["Climb to the Summit", "Camp by the River"],
    consequences: ["summit", "camp"],
    image: "mountains.jpg"
  },
  forest: {
    text: "The dense forest awaits. What's your next move?",
    choices: ["Follow the Hidden Path", "Set Up a Campsite"],
    consequences: ["hiddenPath", "campsite"],
    image: "forest.jpg",
  },
  summit: {
    text: "Climbing to the summit, you witness a stunning sunrise. An adventurous start!",
	choices: [""],
    image: "summit.jpg",
  },
  camp: {
    text: "Camping by the river, you enjoy the peaceful night. A serene beginning!",
	choices: [""],
    image: "camp.jpg",
  },
  hiddenPath: {
    text: "Following the hidden path, you discover ancient ruins. What's your next action?",
    choices: ["Explore the Ruins", "Continue on the Path"],
    consequences: ["exploreRuins", "continuePath"],
    image: "ruins.jpg",
  },
  campsite: {
    text: "Setting up a campsite, you hear mysterious sounds. What will you do?",
    choices: ["Investigate the Sounds", "Stay Quiet"],
    consequences: ["investigateSounds", "stayQuiet"],
    image: "nightCamp.jpg",
  },
  exploreRuins: {
    text: "Exploring the ruins, you uncover hidden treasures. An archaeologist's dream!",
    choices: [""],
	image: "treasures.jpg",
  },
  continuePath: {
    text: "Continuing on the path, you encounter friendly locals. A warm welcome!",
    choices: [""],
	image: "friendlyLocals.jpg",
  },
  investigateSounds: {
    text: "Investigating the sounds, you come face-to-face with a rare species. A wildlife encounter!",
    choices: [""],
	image: "wildlife.jpg",
  },
  stayQuiet: {
    text: "Staying quiet, you observe the mysterious creatures passing by. A stealthy night!",
    choices: [""],
	image: "nightWildlife.jpg",
  },
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  console.log("Updating image to:", stage.image); // Add this line for debugging
  document.getElementById("story-image").src = stage.image;
}


// Additional initialization
startGame();
