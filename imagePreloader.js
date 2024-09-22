const allImages = [
    "Life-Simulator-Game/Images/rain.gif",
    "Life-Simulator-Game/Images/lake.gif",
    "Life-Simulator-Game/Images/street.gif",
    "Life-Simulator-Game/Images/train.gif",
    "Life-Simulator-Game/Images/background def.gif",
    "Life-Simulator-Game/Images/beachTown.jpg",
    "Life-Simulator-Game/Images/city.jpg",
    "Life-Simulator-Game/Images/owl.gif",
    "Life-Simulator-Game/Images/store.jpg",
    "Life-Simulator-Game/Images/peakpx (3).jpg",
    "Life-Simulator-Game/Images/peakpx.jpg",
    "Life-Simulator-Game/Images/town pink.jpg",
    "Life-Simulator-Game/Images/town.gif",
    "Life-Simulator-Game/Images/townNamePage.gif"
  ];
  const additionalImages=[
    "Life-Simulator-Game/Images/girls room.gif",
    "Life-Simulator-Game/Images/kid room.jpg",
    "Life-Simulator-Game/Images/boysRoom.gif",
    "Life-Simulator-Game/Images/boys room.gif",
    "Life-Simulator-Game/Images/marriageChoice.jpg",
    "Life-Simulator-Game/Images/35836.jpg",
    "Life-Simulator-Game/Images/35837.jpg"
    
  ]
  export default function preloadImages(){
    allImages.forEach(imageUrl => {
        const img = new Image();
        img.src = `/${imageUrl}`;
      });
      additionalImages.forEach(imageUrl => {
        const img = new Image();
        img.src = `/${imageUrl}`;
      });
  }