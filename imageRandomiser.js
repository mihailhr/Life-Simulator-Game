const allImages=["Life-Simulator-Game/Images/background def.gif","Life-Simulator-Game/Images/background.jpg","Life-Simulator-Game/Images/beachTown.jpg","Life-Simulator-Game/Images/city.jpg","Life-Simulator-Game/Images/Office room.gif","Life-Simulator-Game/Images/owl.gif","Life-Simulator-Game/Images/peakpx (1).jpg", "Life-Simulator-Game/Images/peakpx (2).jpg", "Life-Simulator-Game/Images/peakpx (3).jpg","Life-Simulator-Game/Images/peakpx.jpg" ,"Life-Simulator-Game/Images/town pink.jpg", "Life-Simulator-Game/Images/town.gif"]
export default function setRandomBackground(root){
    const randomIndex=Math.floor(Math.random()*allImages.length)
    root.style.backgroundImage=`url(/${allImages[randomIndex]})` 
    root.style.setProperty('background-repeat', 'no-repeat', 'important');
root.style.setProperty('background-size', 'cover', 'important');
}