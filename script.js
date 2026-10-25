let step = 1;
let foundClue = false;

let storyImage = document.getElementById("story-image");
let storyTitle = document.getElementById("story-title");
let storyText = document.getElementById("story-text");
let sceneLabel = document.getElementById("scene-label");

let choices = document.getElementById("choices");
let choiceOne = document.getElementById("choice-one");
let choiceTwo = document.getElementById("choice-two");
let restartButton = document.getElementById("restart-button");

function chooseOne() {
  if (step === 1) {
    foundClue = true;
    showBridge();
  } else if (step === 2) {
    showEnding(false);
  }
}

function chooseTwo() {
  if (step === 1) {
    foundClue = false;
    showBridge();
  } else if (step === 2) {
    showEnding(true);
  }
}

function showBridge() {
  step = 2;

  sceneLabel.innerHTML = "AT THE BRIDGE";
  storyTitle.innerHTML = "You hear him laughing";

  storyImage.src = "images/gotham.jpg";
  storyImage.alt = "Gotham Bridge at night";

  if (foundClue === true) {
    storyText.innerHTML = "The trace places Joker in a maintenance room beneath the bridge. His voice above the road is only a recording. When you arrive, several drivers are trapped behind a fallen barrier. You know where to find him, but they need help.";
  } else {
    storyText.innerHTML = "You reach the bridge as another laugh echoes through the dark. It seems to come from an empty building beside the road. Nearby, several drivers are trapped behind a fallen barrier. You could follow the laughter, or stay and help them.";
  }

  choiceOne.innerHTML = "Go after Joker";
  choiceTwo.innerHTML = "Help the trapped drivers";
}

function showEnding(rescue) {
  step = 3;

  choices.hidden = true;
  restartButton.hidden = false;
  sceneLabel.innerHTML = "END OF THE NIGHT";

  if (rescue === true) {
    storyTitle.innerHTML = "People first";

    storyImage.src = "images/gotham.jpg";
    storyImage.alt = "Gotham City and its bridge at night";

    storyText.innerHTML = "You stay with the drivers and help them climb past the fallen barrier. By the time the last person reaches Gordon's officers, Joker has slipped away down the river. A driver turns back to thank you. There will be another chance to catch him. These people needed you tonight.";
  } else if (foundClue === true) {
    storyTitle.innerHTML = "The plan falls apart";

    storyImage.src = "images/batman.jpg";
    storyImage.alt = "Batman emerging from the shadows with his cape spread";

    storyText.innerHTML = "You head beneath the bridge, following the location you traced. Joker is still at the controls when you cut the power to his trap. His smile disappears as you step into the room. Gordon's officers take him away while the rescue crew reaches the stranded drivers. The radio finally falls silent.";
  } else {
    storyTitle.innerHTML = "One step behind";

    storyImage.src = "images/joker.jpg";
    storyImage.alt = "Joker grinning with his arms spread";

    storyText.innerHTML = "You follow the laughter into the empty building. The door locks behind you, and a speaker crackles overhead. Joker was never here. By the time you force your way out, his getaway boat is already crossing the river. You call Gordon and head back to the stranded drivers.";
  }
}

function startStory() {
  step = 1;
  foundClue = false;

  choices.hidden = false;
  restartButton.hidden = true;

  sceneLabel.innerHTML = "11:47 PM — GOTHAM BRIDGE";
  storyTitle.innerHTML = "The lights go out";

  storyImage.src = "images/gotham.jpg";
  storyImage.alt = "A dark bridge overlooking Gotham City";

  storyText.innerHTML = "Gotham Bridge has gone dark. Cars are stranded, and Gordon reports people trapped near the far end. Then a familiar laugh breaks through your radio. Joker wants you to come alone. His signal is still live, but every minute spent tracing it keeps you away from the bridge.";

  choiceOne.innerHTML = "Trace the signal";
  choiceTwo.innerHTML = "Go straight to the bridge";
}

choiceOne.addEventListener("click", chooseOne);
choiceTwo.addEventListener("click", chooseTwo);
restartButton.addEventListener("click", startStory);

startStory();