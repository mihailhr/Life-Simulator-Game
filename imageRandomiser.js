let allImages = [
  "Life-Simulator-Game/Images/rain.gif",
  "Life-Simulator-Game/Images/lake.gif",
  "Life-Simulator-Game/Images/street.gif",
  "Life-Simulator-Game/Images/train.gif",
  "Life-Simulator-Game/Images/background def.gif",
  "Life-Simulator-Game/Images/beachTown.jpg",
  "Life-Simulator-Game/Images/city.jpg",
  "Life-Simulator-Game/Images/Office room.gif",
  "Life-Simulator-Game/Images/owl.gif",
  "Life-Simulator-Game/Images/store.jpg",
  "Life-Simulator-Game/Images/peakpx (3).jpg",
  "Life-Simulator-Game/Images/peakpx.jpg",
  "Life-Simulator-Game/Images/town pink.jpg",
  "Life-Simulator-Game/Images/town.gif",
  "Life-Simulator-Game/Images/townNamePage.gif"
];


export default function setRandomBackground(root) {
  allImages = allImages.reverse();
  
  const randomIndex = Math.floor(Math.random() * allImages.length);
  root.style.backgroundImage = `url(/${allImages[randomIndex]})`;

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
