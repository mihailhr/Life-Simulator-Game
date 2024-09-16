const childhoodChoices = [
  `<div id="choice">
        <h1>You find a shiny and cool shaped rock in the park. Do you keep it as a treasure or give it to a friend?</h1>
        <button onclick="handleChoice('+5 happiness,+5 sociability')">Give it to a friend</button>
        <button onclick="handleChoice('+10 happiness')">Keep it as a treasure</button>
    </div>`,
  `<div id="choice">
    <h1>You are playing outside with your friends but feel a slight headache. Do you</h1>
    <button onclick="handleChoice('+5 happiness,-5 health')">Keep having fun</button>
    <button onclick="handleChoice('+5 health,-5 happiness')">Go home to sleep it off</button>
</div>`,
  `<div id="choice">
    <h1>For the last few months, you've been lagging behind in school.</h1>
    <button onclick="handleChoice('+5 happiness,+5 stress,+10 intelligence')">Become a more serious student</button>
    <button onclick="handleChoice('-10 happiness,-10 intelligence')">Don't worry about it</button>
</div>`,
  `<div id="choice">
    <h1>An older kid wants your lunch money and threatens to beat you up.</h1>
    <button onclick="handleChoice('+15 happiness,+5 athleticism,-10 intelligence')">Try to defend yourself</button>
    <button onclick="handleChoice('-15 happiness,+10 intelligence,-30 wealth')">Say bye to your money</button>
</div>`,
  `<div id="choice">
    <h1>You feel like you don't belong to any of the friend groups in your class - that makes you sad. </h1>
    <button onclick="handleChoice('+10 happiness,+6 stress')">Try to be more social and find some friends</button>
    <button onclick="handleChoice('-15 happiness,-4 stress')">Don't blame yourself</button>
</div>`,

  `<div id="choice">
        <h1>Your teacher gives you extra homework. Do you finish it or play with friends first?</h1>
        <button onclick="handleChoice('+5 intelligence,-5 happiness')">Finish it</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Play with friends first</button>
    </div>`,

  `<div id="choice">
        <h1>You have some extra allowance money. Do you save it or buy a toy you really want?</h1>
        <button onclick="handleChoice('+30 wealth,-5 happiness')">Save it</button>
        <button onclick="handleChoice('-30 wealth,+10 happiness')">Buy the toy</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is holding a sports day. Do you </h1>
        <button onclick="handleChoice('+15 athleticism,+5 happiness')">Join the competition</button>
        <button onclick="handleChoice('+5 happiness')">Cheer for your friends</button>
        <button onclick="handleChoice('-5 sociability,-10 happiness')">Stay home</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a birthday party at your friend's house, but you have a big project due. Do you </h1>
        <button onclick="handleChoice('-10 intelligence,-10 happiness')">Go to the party</button>
        <button onclick="handleChoice('+20 intelligence,-5 happiness')">Finish your project</button>
    </div>`,

  `<div id="choice">
        <h1>You find a new puzzle game. Do you </h1>
        <button onclick="handleChoice('+15 intelligence,-5 happiness')">Solve the puzzle</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Play outside with friends</button>
        <button onclick="handleChoice('+10 happiness,+5 sociability')">Solve it together with your friends</button>
    </div>`,

  `<div id="choice">
        <h1>You have a chance to help with a school play. Do you join in or stay focused on your own hobbies?</h1>
        <button onclick="handleChoice('+10 sociability,-5 stress')">Join the school play</button>
        <button onclick="handleChoice('+10 happiness,-5 sociability')">Focus on your own hobbies</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling tired after a busy day at school. Do you go to bed early or stay up to finish a game?</h1>
        <button onclick="handleChoice('-5 health,+10 happiness')">Go to bed early</button>
        <button onclick="handleChoice('+5 health,-10 happiness')">Stay up to finish the game</button>
    </div>`,

  `<div id="choice">
        <h1>Your friend invites you to a weekend camp. Do you go or stay home to play your favorite game?</h1>
        <button onclick="handleChoice('+15 sociability,+5 happiness')">Go to the camp</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Stay home to play</button>
    </div>`,

  `<div id="choice">
        <h1>You see a friend in need of help with homework. Do you </h1>
        <button onclick="handleChoice('+10 sociability,-5 intelligence')">Assist them</button>
        <button onclick="handleChoice('+10 intelligence,-5 sociability')">Finish your own homework</button>
        <button onclick="handleChoice('+5 sociability')">Let them copy it</button>
        
    </div>`,
    `<div id="choice">
    <h1>You show some interest in chess and want to attend some classes to practice, but your friends are making fun of you.</h1>
    <button onclick="handleChoice('+10 happiness,+7 intelligence')">Pursue your interests</button>
    <button onclick="handleChoice('-15 happiness')">Don't be the butt of the joke </button>
</div>`,

  `<div id="choice">
    <h1>You walk across a cute but drooling dog. Do you stop to pet it or continue walking?</h1>
    <button onclick="handleChoice('-50 health')">Stop to pet it</button>
    <button onclick="handleChoice('-2 stress')">Continue walking</button>
</div>`,

  `<div id="choice">
        <h1>You’re invited to a fun art class. Do you join the class or continue with your regular activities?</h1>
        <button onclick="handleChoice('+10 intelligence,-5 athleticism')">Join the art class</button>
        <button onclick="handleChoice('+10 athleticism,-5 intelligence')">Continue with regular activities</button>
    </div>`,



  `<div id="choice">
        <h1>You have the option to help clean the park or stay home and play a video game. What do you choose?</h1>
        <button onclick="handleChoice('+10 happiness,+5 sociability')">Help clean the park</button>
        <button onclick="handleChoice('+5 happiness,-5 athleticism,-5 sociability')">Play a video game</button>
    </div>`,

  `<div id="choice">
        <h1>You find a new friend at school. Do you invite them to your house or keep it casual at school?</h1>
        <button onclick="handleChoice('+10 sociability,+5 stress')">Invite them to your house</button>
        <button onclick="handleChoice('+5 happiness,-5 sociability')">Keep it casual</button>
    </div>`,

  `<div id="choice">
        <h1>You can join a new club at school. Do you join it or stick with your current activities?</h1>
        <button onclick="handleChoice('+10 sociability,+2 stress')">Join the new club</button>
        <button onclick="handleChoice('+10 happiness,-5 sociability')">Stick with current activities</button>
    </div>`,

  `<div id="choice">
        <h1>Your class is having a talent show. Do you </h1>
        <button onclick="handleChoice('+6 happiness,+4 stress')">Perform</button>
        <button onclick="handleChoice('+5 sociability')">Watch your friends</button>
        <button onclick="handleChoice('-5 sociability,-8 athleticism')">Miss the show and play video games</button>
    </div>`,

  `<div id="choice">
        <h1>You have a chance to learn a new craft. Do you take the opportunity or stick to what you know?</h1>
        <button onclick="handleChoice('+10 intelligence,-5 happiness')">Learn the new craft</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Stick to what you know</button>
    </div>`,

  `<div id="choice">
        <h1>You decide to run in a school race with no training. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-10 health,+10 athleticism')">Participate</button>
        <button onclick="handleChoice('+10 happiness,-5 athleticism')">Skip it</button>
    </div>`,
  `<div id="choice">
    <h1>Your school is hosting martial arts classes. Do you join them?</h1>
    <button onclick="handleChoice('-10 health,-5 athleticism')">No</button>
    <button onclick="handleChoice('+10 health,+5 athleticism')">Yes</button>
</div>`,

  `<div id="choice">
        <h1>You feel like eating a huge amount of candy before dinner. Do you </h1>
        <button onclick="handleChoice('+10 health,-5 happiness')">Choose a healthy meal</button>
        <button onclick="handleChoice('-10 health,+10 happiness,-5 athleticism')">Indulge in candy</button>
        <button onclick="handleChoice('+5 health,+5 happiness')">Get a balanced meal</button>
    </div>`,

  `<div id="choice">
        <h1>You get into an argument with a friend. Do you resolve it immediately  or avoid the situation?</h1>
        <button onclick="handleChoice('-10 health,+10 sociability')">Resolve it immediately</button>
        <button onclick="handleChoice('+5 happiness,-5 sociability')">Avoid the situation</button>
    </div>`,

  `<div id="choice">
        <h1>You stay up until the middle of the night playing games. Do you keep playing or go to sleep?</h1>
        <button onclick="handleChoice('-20 health,+10 happiness,+5 stress')">Keep playing</button>
        <button onclick="handleChoice('+10 health,-5 happiness')">Go to sleep</button>
    </div>`,

  `<div id="choice">
        <h1>You are thinking of skipping a few meals to save time. Do you skip meals or stick to your regular eating schedule?</h1>
        <button onclick="handleChoice('-20 health')">Skip meals</button>
        <button onclick="handleChoice('+10 health')">Stick to your regular eating schedule</button>
    </div>`,
  `<div id="choice">
        <h1>You think of skateboarding down a really steep hill without a helmet. Do you keep going or turn around?</h1>
        <button onclick="handleChoice('-70 health')">Keep going down the hill</button>
        <button onclick="handleChoice('-10 happiness')">Turn around and head back</button>
    </div>`,

  `<div id="choice">
        <h1>You find a box of matches and start playing with them. Do you keep using the matches or put them away?</h1>
        <button onclick="handleChoice('-100 health')">Keep using the matches</button>
        <button onclick="handleChoice('+10 happiness')">Put them away</button>
    </div>`,

  `<div id="choice">
        <h1>You’re playing with fireworks without any adult supervision. Do you keep playing or ask for help?</h1>
        <button onclick="handleChoice('-80 health')">Keep playing with fireworks</button>
        <button onclick="handleChoice('+10 intelligence')">Ask for help</button>
    </div>`,
];

const teenGirlChoices = [
  `<div id="choice">
        <h1>Your friends are planning a sleepover this weekend. Do you join the fun or stay home to work on a big project?</h1>
        <button onclick="handleChoice('+10 sociability,+5 happiness')">Join the sleepover</button>
        <button onclick="handleChoice('+10 intelligence,-10 happiness')">Stay home and work on the project</button>
    </div>`,

  `<div id="choice">
        <h1>There’s a new makeup line you’ve been wanting to try, but it’s quite expensive. Do you buy it or save your money for something else?</h1>
        <button onclick="handleChoice('-260 wealth,+10 happiness')">Buy the makeup</button>
        <button onclick="handleChoice('-10 happiness')">Save your money</button>
    </div>`,
  `<div id="choice">
    <h1>The new Iphone is out and you want it, but it's really expensive. You found a second-hand offer, but it still is pricey.</h1>
    <button onclick="handleChoice('+10 happiness,-800 wealth')">Buy it</button>
    <button onclick="handleChoice('-10 happiness, +5 intelligence')">Save your money</button>
</div>`,

  `<div id="choice">
        <h1>Your school is organizing a dance competition. Do you enter the competition or watch from the audience?</h1>
        <button onclick="handleChoice('+15 happiness,+10 sociability,+5 stress')">Enter the competition</button>
        <button onclick="handleChoice('+10 sociability,-10 happiness')">Watch from the audience</button>
    </div>`,

  `<div id="choice">
        <h1>You can either go on a weekend shopping spree with friends or spend the day volunteering at a local animal shelter. What’s your choice?</h1>
        <button onclick="handleChoice('-100 wealth,+8 happiness,+5 sociability')">Shopping spree with friends</button>
        <button onclick="handleChoice('+10 sociability,+10 happiness')">Volunteer at the shelter</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a weekend party, but you also have a big exam coming up. Do you go to the party or stay in and study?</h1>
        <button onclick="handleChoice('+10 sociability,-10 stress,-5 intelligence')">Go to the party</button>
        <button onclick="handleChoice('+20 intelligence,-15 sociability')">Stay in and study</button>
    </div>`,

  `<div id="choice">
        <h1>Your favorite author is coming to town for a book signing. Do you attend the event or use the time to work on your personal blog?</h1>
        <button onclick="handleChoice('+15 happiness,+5 sociability')">Attend the book signing</button>
        <button onclick="handleChoice('+10 intelligence')">Work on your personal blog</button>
    </div>`,
    `<div id="choice">
    <h1>Your classmates invite you to the local pool, but you've got some chores to do.</h1>
    <button onclick="handleChoice('+15 happiness,+3 athleticism,+5 stress')">Go to the pool</button>
    <button onclick="handleChoice('-15 happiness,-10 stress,-5 athleticism')">Finish your chores</button>
</div>`,

  `<div id="choice">
        <h1>You find a new fashion trend online that you want to try. Do you buy the clothes or stick with your current style?</h1>
        <button onclick="handleChoice('-150 wealth,+10 happiness')">Buy the new clothes</button>
        <button onclick="handleChoice('-5 happiness')">Stick with your current style</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are planning a group trip to a theme park. Do you go with them or stay home to focus on your hobbies?</h1>
        <button onclick="handleChoice('+20 sociability,-50 wealth')">Go to the theme park</button>
        <button onclick="handleChoice('+15 happiness')">Stay home and focus on hobbies</button>
    </div>`,

  `<div id="choice">
        <h1>There's a new workout class you’ve been wanting to try. Do you join the class or spend the time with friends?</h1>
        <button onclick="handleChoice('+10 athleticism')">Join the new workout class</button>
        <button onclick="handleChoice('-10 athleticism,+5 sociability')">Spend the time with friends</button>
    </div>`,

  `<div id="choice">
        <h1>You’ve been invited to participate in a local art exhibition. Do you showcase your artwork or take some time off for relaxation?</h1>
        <button onclick="handleChoice('+10 happiness,+10 sociability')">Showcase your artwork</button>
        <button onclick="handleChoice('-10 stress,-5 happiness')">Take time off for relaxation</button>
    </div>`,
  `<div id="choice">
        <h1>You see a dangerous-looking shortcut through a construction site while rushing to meet your friends. Do you take the shortcut or stick to the main road?</h1>
        <button onclick="handleChoice('-70 health')">Take the shortcut</button>
        <button onclick="handleChoice('+10 sociability')">Stick to the main road</button>
    </div>`,

  `<div id="choice">
        <h1>You find a bottle of unknown pills at a party. Do you try one out of curiosity or leave them alone?</h1>
        <button onclick="handleChoice('-100 health')">Try the pills</button>
        <button onclick="handleChoice('+10 intelligence')">Leave them alone</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are daring you to swim in a river with a strong current. Do you accept the dare or play it safe on the riverbank?</h1>
        <button onclick="handleChoice('-60 health,+15 sociability')">Swim in the river</button>
        <button onclick="handleChoice('-10 sociability,+5 intelligence')">Play it safe on the riverbank</button>
    </div>`,

    `<div id="choice">
    <h1>You feel passionate about dancing and want to attend some classes, but because of puberty you've gained a few kilograms and are afraid of being humiliated.</h1>
    <button onclick="handleChoice('+15 happiness,+7 athleticism,+5 stress,+6 sociability')">Join the dancing classes</button>
    <button onclick="handleChoice('-15 happiness,-8 athleticism')">Don't risk it</button>
</div>`,

  `<div id="choice">
        <h1>You come across a bike left unattended on the edge of a cliff. Do you ride it for fun or avoid it entirely?</h1>
        <button onclick="handleChoice('-40 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,
`<div id="choice">
    <h1>You were gifted a cooking book which looks interesting, but your last attempt at making a meal almost led to a fire.</h1>
    <button onclick="handleChoice('-8 happiness')">Play it safe</button>
    <button onclick="handleChoice('+8 happiness,+3 stress')">Make another attempt</button>
</div>`,
  `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health,+10 sociability')">Participate in the challenge</button>
        <button onclick="handleChoice('+10 happiness')">Skip the challenge</button>
    </div>`,
  `<div id="choice">
        <h1>An old lady needs help to cross the street, but you are in a hurry.</h1>
        <button onclick="handleChoice('+10 sociability,+5 stress,+5 happiness')">Help her</button>
        <button onclick="handleChoice('-5 happiness,-10 sociability')">Focus on your own problems</button>
    </div>`,
];
const teenBoyChoices = [
  `<div id="choice">
        <h1>Your friends are organizing a weekend sports tournament. Do you join the team or spend the time playing video games?</h1>
        <button onclick="handleChoice('+15 fitness,+10 sociability')">Join the sports tournament</button>
        <button onclick="handleChoice('+10 happiness')">Play video games</button>
    </div>`,

  `<div id="choice">
        <h1>A new gaming console has been released, but it’s quite pricey. Do you buy it or save your money for future needs?</h1>
        <button onclick="handleChoice('-300 wealth,+10 happiness')">Buy the console</button>
        <button onclick="handleChoice('-10 happiness')">Save your money</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is holding a coding competition. Do you enter the competition or hang out with friends?</h1>
        <button onclick="handleChoice('+15 intelligence,+10 stress')">Enter the coding competition</button>
        <button onclick="handleChoice('+10 sociability')">Hang out with friends</button>
    </div>`,

  `<div id="choice">
        <h1>You’ve been invited to a weekend camping trip with friends. Do you go on the trip or stay home to work on a personal project?</h1>
        <button onclick="handleChoice('+20 sociability,-100 wealth,-10 stress')">Go camping</button>
        <button onclick="handleChoice('+15 intelligence,+5 stress')">Work on the personal project</button>
    </div>`,

    `<div id="choice">
    <h1>You want to go camping with friends, but you find bugs really scary.</h1>
    <button onclick="handleChoice('+7 happiness,+3 athleticism,+5 stress,+4 sociability')">Face your fear</button>
    <button onclick="handleChoice('-12 happiness,-7 sociability,-3 stress,-9 sociability')">Maybe another time</button>
</div>`,
`<div id="choice">
    <h1>A local amateur boxing competition for teens is announced and you want to give it a try, but you aren't particularly skilled.</h1>
    <button onclick="handleChoice('-8 happiness,-7 athleticism,-5 stress')">Avoid it</button>
    <button onclick="handleChoice('+9 happiness,+8 stress,+11 athleticism')">Join it and do your best</button>
</div>`,
`<div id="choice">
    <h1>A girl you really like might either be giving you some hints or trying to make a fool of you.</h1>
    <button onclick="handleChoice('+12 happiness,+8 sociability,+7 stress')">Invite her on a date</button>
    <button onclick="handleChoice('-14 happiness,-10 stress,-8 sociability')">Don't be stupid, you've got no chance</button>
</div>`,

  `<div id="choice">
        <h1>There’s a new superhero movie out, but you also have a big test coming up. Do you watch the movie or study for the test?</h1>
        <button onclick="handleChoice('+10 happiness,-15 stress')">Watch the movie</button>
        <button onclick="handleChoice('+20 intelligence,-10 sociability,+5 stress')">Study for the test</button>
    </div>`,

  `<div id="choice">
        <h1>Your favorite sports team is playing a big match. Do you go to the game or stay home to complete an important assignment?</h1>
        <button onclick="handleChoice('+5 sociability,+10 happiness,-5 stress')">Go to the game</button>
        <button onclick="handleChoice('+20 intelligence,+5 stress')">Complete the assignment</button>
    </div>`,

  `<div id="choice">
        <h1>You find a cool tech gadget online that you really want. Do you buy it now or save up for other things?</h1>
        <button onclick="handleChoice('-50 wealth,+10 happiness')">Buy the tech gadget</button>
        <button onclick="handleChoice('-5 happiness')">Save up for other things</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a local sports camp. Do you join the camp or spend the time working on your gaming skills?</h1>
        <button onclick="handleChoice('+20 athleticism,+10 sociability,+10 health')">Join the sports camp</button>
        <button onclick="handleChoice('-10 sociability,-5 health')">Work on your gaming skills</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is hosting a talent show. Do you perform in the show or cheer for your friends from the audience?</h1>
        <button onclick="handleChoice('+10 happiness,+10 sociability,+5 stress')">Perform in the show</button>
        <button onclick="handleChoice('+10 sociability,-5 happiness')">Cheer for your friends</button>
    </div>`,

  `<div id="choice">
        <h1>There’s a new video game tournament coming up. Do you enter the tournament or relax at home?</h1>
        <button onclick="handleChoice('+15 happiness,+5 sociability,+5 stress')">Enter the tournament</button>
        <button onclick="handleChoice('-10 stress')">Relax at home</button>
    </div>`,
  `<div id="choice">
        <h1>You see a dangerous-looking shortcut through a construction site while rushing to meet your friends. Do you take the shortcut or stick to the main road?</h1>
        <button onclick="handleChoice('-40 health')">Take the shortcut</button>
        <button onclick="handleChoice('+10 intelligence')">Stick to the main road</button>
    </div>`,

  `<div id="choice">
        <h1>You find a bottle of unknown pills at a party. Do you try one out of curiosity or leave them alone?</h1>
        <button onclick="handleChoice('-100 health')">Try the pills</button>
        <button onclick="handleChoice('+10 intelligence')">Leave them alone</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are daring you to swim in a river with a strong current. Do you accept the dare or play it safe on the riverbank?</h1>
        <button onclick="handleChoice('-100 health')">Swim in the river</button>
        <button onclick="handleChoice('+10 intelligence')">Play it safe on the riverbank</button>
    </div>`,
    `<div id="choice">
    <h1>Your classmates invite you to the local pool, but you've got some chores to do.</h1>
    <button onclick="handleChoice('+15 happiness,+3 athleticism,+5 stress')">Go to the pool</button>
    <button onclick="handleChoice('-15 happiness,-10 stress,-5 athleticism')">Finish your chores</button>
</div>`,
  `<div id="choice">
    <h1>Your peers invited you to go fishing, but you have to study for an important test.</h1>
    <button onclick="handleChoice('-15 happiness,+10 intelligence')">Study</button>
    <button onclick="handleChoice('+10 happiness,-10 intelligence')">Go fishing</button>
</div>`,

  `<div id="choice">
        <h1>You come across a bike left unattended on the edge of a cliff. Do you ride it for fun or avoid it entirely?</h1>
        <button onclick="handleChoice('-60 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

  `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health')">Participate in the challenge</button>
        <button onclick="handleChoice('+5 intelligence')">Skip the challenge</button>
    </div>`,
  `<div id="choice">
        <h1>An old lady needs help to cross the street, but you are in a hurry.</h1>
        <button onclick="handleChoice('+10 sociability,+5 stress,+5 happiness')">Help her</button>
        <button onclick="handleChoice('-5 happiness,-10 sociability')">Focus on your own problems</button>
    </div>`,
];
let youngAdultChoices = [
  `<div id="choice">
        <h1>Your boss offers you an overtime project with tight deadlines but a significant bonus. Do you accept the project or decline to maintain your work-life balance?</h1>
        <button onclick="handleChoice('-20 health,+2000 wealth,+5 stress')">Accept the project</button>
        <button onclick="handleChoice('+10 happiness')">Decline to maintain balance</button>
    </div>`,

  `<div id="choice">
    <h1>You want to go hiking but you've promised to help your old neighbor with his PC.</h1>
    <button onclick="handleChoice('+10 happiness,-10 sociability')">Go hiking</button>
    <button onclick="handleChoice('-10 happiness,+10 sociability')">Fix the PC</button>
</div>`,
  `<div id="choice">
        <h1>You have the opportunity to invest in a high-risk stock that could yield great returns or cost you dearly. Do you invest or play it safe?</h1>
        <button onclick="handleChoice('-20 wealth,+12000 wealth')">Invest in the stock</button>
        <button onclick="handleChoice('+10 happiness,+5 wealth')">Play it safe</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a promotion that requires relocating to another city. Do you accept the promotion or stay in your current role?</h1>
        <button onclick="handleChoice('+5000 wealth,-20 happiness,+12 stress')">Accept the promotion</button>
        <button onclick="handleChoice('+10 happiness,')">Stay in current role</button>
    </div>`,

  `<div id="choice">
        <h1>You discover that a close friend has been spreading rumors about you. Do you confront them or let it go?</h1>
        <button onclick="handleChoice('+10 sociability,+3 stress')">Confront them</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Let it go</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling burned out at work. Do you take a mental health day or push through?</h1>
        <button onclick="handleChoice('+10 health,-300 wealth,+10 happiness')">Take a mental health day</button>
        <button onclick="handleChoice('-10 health,+100 wealth')">Push through</button>
    </div>`,

  `<div id="choice">
    <h1>You find an abandoned kitten that looks cold and hungry,but taking care of it might be stressful.</h1>
    <button onclick="handleChoice('+8 happiness,+7 stress')">Adopt it</button>
    <button onclick="handleChoice('-10 happiness')">Ignore it</button>
</div>`,

  `<div id="choice">
        <h1>You find a wallet full of cash on the street. Do you keep it or turn it into the authorities?</h1>
        <button onclick="handleChoice('-10 sociability,+1237 wealth')">Keep the wallet</button>
        <button onclick="handleChoice('+10 sociability,+5 happiness')">Turn it in</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a networking event that could advance your career but you’re feeling socially drained. Do you attend or skip it?</h1>
        <button onclick="handleChoice('+20 sociability,+10 wealth,-10 happiness,+3 stress')">Attend the event</button>
        <button onclick="handleChoice('+10 happiness,-10 stress')">Skip it</button>
    </div>`,
    

  `<div id="choice">
        <h1>Your car breaks down, and you can either pay for expensive repairs or buy a new one on credit. What do you do?</h1>
        <button onclick="handleChoice('-6000 wealth,+10 happiness')">Pay for repairs</button>
        <button onclick="handleChoice('-15000 wealth,+20 happiness')">Buy a new car on credit</button>
    </div>`,

  `<div id="choice">
        <h1>You’re considering taking a special management course that could advance your career. Do you enroll or stick with your current job?</h1>
        <button onclick="handleChoice('+10 intelligence,+10000 wealth, +8 stress ')">Take the course</button>
        <button onclick="handleChoice('+10 happiness,-6 intelligence')">Stick with your current job</button>
    </div>`,

  `<div id="choice">
        <h1>You’re at a family gathering and a heated political discussion arises. Do you engage in the debate or stay silent?</h1>
        <button onclick="handleChoice('+10 intelligence,+10 stress,-10 sociability')">Engage in the debate</button>
        <button onclick="handleChoice('+10 happiness,+10 sociability')">Stay silent</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a lucrative and well paid quick task in a morally questionable industry. Do you take the job or stay true to your principles?</h1>
        <button onclick="handleChoice('+1480 wealth,-30 happiness,+12 stress')">Take the job</button>
        <button onclick="handleChoice('+10 happiness,+10 sociability')">Stay true to your principles</button>
    </div>`,

  `<div id="choice">
        <h1>You have the opportunity to volunteer for a cause you care about, but it requires sacrificing your free time. Do you volunteer or focus on your personal life?</h1>
        <button onclick="handleChoice('+20 sociability,+10 happiness,+3 stress')">Volunteer</button>
        <button onclick="handleChoice('+10 happiness,-10 stress')">Focus on personal life</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a free vacation but during your busiest time at work. Do you take the vacation or stay to handle your work responsibilities?</h1>
        <button onclick="handleChoice('+30 happiness,-1000 wealth,+5 stress')">Take the vacation</button>
        <button onclick="handleChoice('+1000 wealth,-10 happiness,-5 stress')">Stay and work</button>
    </div>`,
    `<div id="choice">
    <h1>Your neighbor invited you on a date, but you are not really interested.</h1>
    <button onclick="handleChoice('+8 happiness,-7 sociability')">Reject them and don't raise false expectations</button>
    <button onclick="handleChoice('-9 happiness,+7 sociability')">Give them a chance</button>
</div>`,

  `<div id="choice">
        <h1>Your friend asks you to co-sign a loan they might struggle to repay. Do you co-sign or politely decline?</h1>
        <button onclick="handleChoice('-14000 wealth,+10 sociability,+10 stress')">Co-sign the loan</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Politely decline</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling unwell but have an important presentation. Do you power through or call in sick?</h1>
        <button onclick="handleChoice('-20 health,+800 wealth,+4 stress')">Power through</button>
        <button onclick="handleChoice('+20 health,-10 sociability')">Call in sick</button>
    </div>`,

  `<div id="choice">
        <h1>You’re driving late at night and start to feel extremely tired. Do you keep driving to get home faster or pull over and rest?</h1>
        <button onclick="handleChoice('-80 health')">Keep driving</button>
        <button onclick="handleChoice('-5 stress')">Pull over and rest</button>
    </div>`,

  `<div id="choice">
        <h1>You’re exploring a remote area and notice storm clouds approaching. Do you continue exploring or seek shelter immediately?</h1>
        <button onclick="handleChoice('-30 health,+10 happiness ')">Continue exploring</button>
        <button onclick="handleChoice('+10 health')">Seek shelter immediately</button>
    </div>`,
];

const marriageChoice = `
<div id="choice">
   <h1>You and your partner are contemplating marriage. Do you choose to move forward with the wedding, or continue your relationship without the formalities?</h1>
<button onclick="handleChoice('+10 happiness,+5 stress,-10000 wealth,+10 sociability,+1 married')">Proceed with the wedding</button>
<button onclick="handleChoice('+10 happiness')">Remain unmarried</button>
</div>

  `;

const childrenChoice = `
<div id="choice">
<h1>You and your partner are considering starting a family. Do you decide to have children now, or wait and focus on other aspects of your lives?</h1>
<button onclick="handleChoice('+30 happiness,-2000 wealth,+10 stress,+1 child')">Have children now</button>
<button onclick="handleChoice('-10 happiness,-10 stress,-1 child')">Wait and focus on your lives</button>
</div>
`;
const adoptChoice = `
<div id="choice">
<h1>You are considering adopting a child. Do you do that?</h1>
<button onclick="handleChoice('+30 happiness,-2000 wealth,+10 stress,+1 child')">Yes</button>
<button onclick="handleChoice('-10 happiness,-10 stress,-1 child')">No</button>
</div>
`;

const grownAdultChoices = [
  `<div id="choice">
      <h1>Your best friend asks you to help them move on a very busy weekend. Do you agree to help or politely decline to focus on your own plans?</h1>
      <button onclick="handleChoice('+10 sociability,-10 health')">Agree to help</button>
      <button onclick="handleChoice('+10 happiness,-10 sociability,-5 stress')">Politely decline</button>
  </div>`,

  `<div id="choice">
      <h1>Your doctor recommends taking up yoga to reduce stress. Do you start practicing or continue with your usual routine?</h1>
      <button onclick="handleChoice('+10 health,-500 wealth')">Start practicing yoga</button>
      <button onclick="handleChoice('+10 happiness')">Stick to your routine</button>
  </div>`,

  `<div id="choice">
      <h1>A friend offers to lend you money to start your own business. Do you accept the loan and pursue your dream or keep your current job?</h1>
      <button onclick="handleChoice('+20000 wealth,+12 stress,+10 happiness')">Accept the loan and start the business</button>
      <button onclick="handleChoice('-10 happiness,-10 stress')">Keep your current job</button>
  </div>`,
  `<div id="choice">
    <h1>Your co-worker offered you to go to the casino and try your luck. The problem is that you feel like you might get carried away.</h1>
    <button onclick="handleChoice('-17 happiness,-22000 wealth')">Go to the casino</button>
    <button onclick="handleChoice(' -10 stress,-4 sociability')">Say no</button>
</div>`,

  `<div id="choice">
      <h1>You have the opportunity to relocate to a new city for a better job. Do you move or stay close to the people you love?</h1>
      <button onclick="handleChoice('+30 wealth,+10 stress')">Move for the new job</button>
      <button onclick="handleChoice('+10 happiness,+20 sociability,-10 stress')">Stay home</button>
  </div>`,

  `<div id="choice">
      <h1>Your car breaks down and you can either buy a new one or use public transportation for a while. Do you buy a car or take the bus?</h1>
      <button onclick="handleChoice('-20000 wealth,+10 happiness')">Buy a new car</button>
      <button onclick="handleChoice('-10 stress,+300 wealth,-10 happiness')">Take public transportation</button>
  </div>`,

  `<div id="choice">
      <h1>You’re feeling stressed, and your partner suggests taking a vacation. Do you take time off or focus on work instead?</h1>
      <button onclick="handleChoice('+20 happiness,-10 wealth,-20 stress')">Take the vacation</button>
      <button onclick="handleChoice('+1000 wealth,+10 stress')">Focus on work</button>
  </div>`,

  `<div id="choice">
    <h1>You receive a gift card for a free rafting tour, but you can't really swim and the guide looks like a newbie.</h1>
    <button onclick="handleChoice('+5 happiness,+10 stress,-10 intelligence,-70 health')">Go rafting</button>
    <button onclick="handleChoice('-10 happiness,-10 intelligence,+5 sociability')">Gift the card to someone else</button>
</div>`,

  `<div id="choice">
      <h1>You’ve been working out for months and are offered the chance to run a marathon. Do you accept the challenge or focus on maintaining your current fitness level?</h1>
      <button onclick="handleChoice('+10 athleticism,-10 stress,+10 happiness')">Run the marathon</button>
      <button onclick="handleChoice('+10 happiness,-10 stress,-5 athleticism')">Maintain current fitness</button>
  </div>`,

  `<div id="choice">
      <h1>You’re invited to a reunion with old friends, but it’s on the same weekend as a work deadline. Do you go to the reunion or stay home to finish your work?</h1>
      <button onclick="handleChoice('+20 sociability,+10 happiness,-300 wealth,-10 stress')">Go to the reunion</button>
      <button onclick="handleChoice('+100 wealth,-10 sociability')">Stay home to finish work</button>
  </div>`,

  `<div id="choice">
      <h1>A co-worker offers you an easy way to make money, but it’s slightly unethical. Do you take the opportunity or turn it down?</h1>
      <button onclick="handleChoice('+30 wealth,-20 happiness,+10 stress')">Take the opportunity</button>
      <button onclick="handleChoice('+20 happiness')">Turn it down</button>
  </div>`,

  `<div id="choice">
      <h1>Your think of adopting a pet, but it will require time and money. You decide to</h1>
      <button onclick="handleChoice('+20 happiness,-700 wealth,+10 sociability,-5 stress')">Adopt a pet</button>
      <button onclick="handleChoice('-10 happiness,-5 stress')">Pass for now</button>
  </div>`,

  `<div id="choice">
      <h1>You’re offered a leadership position at work, but it will increase your stress levels. Do you accept the promotion or stay in your current role?</h1>
      <button onclick="handleChoice('+20000 wealth,+10 stress,+10 sociability')">Accept the promotion</button>
      <button onclick="handleChoice('-5 happiness,-10 stress')">Stay in your current role</button>
  </div>`,

  `<div id="choice">
      <h1>A close friend asks for financial help. Do you lend them money or explain that you can’t afford to right now?</h1>
      <button onclick="handleChoice('-200 wealth,+10 sociability')">Lend them money</button>
      <button onclick="handleChoice('-10 sociability')">Explain you can’t afford it</button>
  </div>`,

  `<div id="choice">
      <h1>Your neighborhood is hosting a charity run, and you’re invited to participate. Do you join in or donate instead?</h1>
      <button onclick="handleChoice('+20 athleticism,+10 sociability,-20 wealth,-5 stress')">Join the charity run</button>
      <button onclick="handleChoice('+20 wealth,+10 happiness')">Just donate instead</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been offered a chance to speak at a major conference, but public speaking makes you nervous. Do you accept the invitation or pass?</h1>
      <button onclick="handleChoice('+20 intelligence,+20 sociability,+3 stress,+200 wealth')">Accept the invitation</button>
      <button onclick="handleChoice('+10 happiness,-3 stress')">Pass on the opportunity</button>
  </div>`,

  `<div id="choice">
      <h1>You have the option to take a night class to learn a new skill, but it will take time away from your personal life. Do you enroll or focus on your personal time?</h1>
      <button onclick="handleChoice('+20 intelligence,+10 happiness,+8 stress,-500 wealth')">Enroll in the class</button>
      <button onclick="handleChoice('+10 happiness')">Focus on personal time</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been working on a big project for months, and now it’s crunch time. Do you push through long hours to finish on time or ask for an extension?</h1>
      <button onclick="handleChoice('+2000 wealth,+7 stress,-10 health')">Push through the long hours</button>
      <button onclick="handleChoice('+5 health,+500 wealth')">Ask for an extension</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been saving up for a big vacation, but your home needs some expensive repairs. Do you go on the vacation or use the money to fix your home?</h1>
      <button onclick="handleChoice('+30 happiness,-3000 wealth')">Go on the vacation</button>
      <button onclick="handleChoice('-10 happiness')">Use the money for home repairs</button>
  </div>`,

  `<div id="choice">
      <h1>Your company offers to pay for a wellness retreat to reduce your stress levels, but it conflicts with some plans with a friend . Do you go on the retreat or attend the family event?</h1>
      <button onclick="handleChoice('+20 health,-10 sociability,-10 stress')">Go on the wellness retreat</button>
      <button onclick="handleChoice('+10 sociability,+10 happiness')">Attend the family event</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been offered a side gig that pays well, but it will take up most of your free time. Do you take the gig or keep your free time for relaxation?</h1>
      <button onclick="handleChoice('+30 wealth,+12 stress,-10 happiness,+3000 wealth')">Take the side gig</button>
      <button onclick="handleChoice('+20 happiness')">Keep your free time</button>
  </div>`,
];

const matureAdultChoices = [
  `<div id="choice">
      <h1>A new language course opens up, but it requires evening classes twice a week. Do you enroll to learn something new or focus on other priorities?</h1>
      <button onclick="handleChoice('+20 intelligence,-500 wealth,+6 stress')">Enroll in the course</button>
      <button onclick="handleChoice('+10 happiness,-5 stress')">Focus on other priorities</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been offered free tickets to a music festival, but it’s the same weekend as an important family event. Do you attend the festival or stick with your family plans?</h1>
      <button onclick="handleChoice('+15 happiness,-10 sociability')">Attend the festival</button>
      <button onclick="handleChoice('+10 sociability,-5 happiness')">Stick with family plans</button>
  </div>`,

  `<div id="choice">
      <h1>A charity asks you to volunteer for a weekend event, but you’ve been feeling drained lately. Do you volunteer or take time to recharge?</h1>
      <button onclick="handleChoice('+10 sociability,+5 happiness,-5 health')">Volunteer for the charity</button>
      <button onclick="handleChoice('+10 health,+5 happiness')">Take time to recharge</button>
  </div>`,

  `<div id="choice">
      <h1>Your mentor suggests attending a professional development conference out of town, but it’s expensive. Do you go to improve your skills or save the money?</h1>
      <button onclick="handleChoice('+20 intelligence,-1000 wealth,+2 stress')">Attend the conference</button>
      <button onclick="handleChoice('+10 happiness,+500 wealth')">Save the money</button>
  </div>`,

  `<div id="choice">
      <h1>A friend offers to sell you their gaming console at a discount, but you’ve been trying to cut back on screen time. Do you buy it or stick to your self-improvement goals?</h1>
      <button onclick="handleChoice('+10 happiness,-200 wealth')">Buy the console</button>
      <button onclick="handleChoice('+10 intelligence,+5 health')">Stick to your goals</button>
  </div>`,

  `<div id="choice">
      <h1>Your neighborhood is organizing a cleanup day, but you’ve already made plans to relax at home. Do you cancel your plans to participate or enjoy your day off?</h1>
      <button onclick="handleChoice('+10 sociability,+5 happiness,-5 health')">Participate in the cleanup</button>
      <button onclick="handleChoice('+10 happiness,-5 sociability')">Enjoy your day off</button>
  </div>`,

  `<div id="choice">
      <h1>A friend offers to introduce you to a potential business partner, but you’re hesitant to commit to any new ventures. Do you meet the potential partner or decline?</h1>
      <button onclick="handleChoice('+10000 wealth,+7 stress')">Meet the potential partner</button>
      <button onclick="handleChoice('+5 happiness,-5 stress')">Decline the offer</button>
  </div>`,

  `<div id="choice">
      <h1>Your local gym is offering a limited-time membership deal, but you already have a home workout routine. Do you sign up or stick to working out at home?</h1>
      <button onclick="handleChoice('+10 health,-200 wealth,+5 happiness')">Sign up for the gym</button>
      <button onclick="handleChoice('+10 happiness,+5 wealth')">Stick to your home routine</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been invited to a dinner party where you don’t know many people, but it’s a good networking opportunity. Do you attend or stay in for a quiet night?</h1>
      <button onclick="handleChoice('+10 sociability,+5 wealth,+5 stress')">Attend the dinner party</button>
      <button onclick="handleChoice('+10 happiness,-10 stress')">Stay in for a quiet night</button>
  </div>`,
  `<div id="choice">
      <h1>A new senior executive position opens up at work, but it will require longer hours and higher stress. Do you apply for the promotion or stay in your current role?</h1>
      <button onclick="handleChoice('+30000 wealth,+20 stress,+10 sociability')">Apply for the promotion</button>
      <button onclick="handleChoice('+10 happiness,-10 stress')">Stay in your current role</button>
  </div>`,

  `<div id="choice">
      <h1>Your financial advisor suggests making a high-risk investment for a chance at higher returns. Do you take the risk or keep your conservative strategy?</h1>
      <button onclick="handleChoice('+50000 wealth,+10 stress')">Take the investment risk</button>
      <button onclick="handleChoice('+10 happiness,+10 wealth')">Stick to conservative strategy</button>
  </div>`,

  `<div id="choice">
      <h1>Your back pain has worsened, and a doctor recommends surgery, but it's expensive and involves a long recovery. Do you opt for the surgery or explore alternative treatments?</h1>
      <button onclick="handleChoice('+20 health,-20000 wealth,+10 stress')">Opt for surgery</button>
      <button onclick="handleChoice('-10 stress,-10 health,+1000 wealth')">Explore alternative treatments</button>
  </div>`,

  `<div id="choice">
      <h1>A new wellness retreat aimed at reducing stress offers a week-long escape, but it conflicts with your work schedule. Do you take the time off for the retreat or focus on work?</h1>
      <button onclick="handleChoice('+20 health,-5000 wealth,-20 stress')">Attend the wellness retreat</button>
      <button onclick="handleChoice('+2000 wealth,+10 stress')">Focus on work</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been thinking about downsizing your home to cut on expenses, but it’s a big decision. Do you sell your current house or stay where you are?</h1>
      <button onclick="handleChoice('+100000 wealth,+10 happiness,+5 stress')">Downsize and sell the house</button>
      <button onclick="handleChoice('+10 happiness')">Stay in your current home</button>
  </div>`,

  `<div id="choice">
      <h1>Your friend invites you on a two-week international trip, but you’ve been saving for retirement. Do you go on the trip or keep saving for the future?</h1>
      <button onclick="handleChoice('+30 happiness,-10000 wealth')">Go on the trip</button>
      <button onclick="handleChoice('+5000 wealth,-10 happiness')">Keep saving for retirement</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been offered the chance to mentor a younger colleague at work, but it will require extra time. Do you take on the mentorship or focus on your own tasks?</h1>
      <button onclick="handleChoice('+10 happiness,+10 sociability,+5 stress')">Become a mentor</button>
      <button onclick="handleChoice('+5 happiness,-5 stress')">Focus on your own work</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been dealing with stress and a close friend suggests starting therapy. Do you </h1>
      <button onclick="handleChoice('+20 health,-500 wealth,+10 happiness')">Start therapy</button>
      <button onclick="handleChoice('+5 happiness')">Manage on your own</button>
  </div>`,

  `<div id="choice">
      <h1>A close friend is starting a small business and asks you to invest. Do you help out with financial backing or politely decline?</h1>
      <button onclick="handleChoice('-20000 wealth,+10 sociability,+5 stress')">Invest in the business</button>
      <button onclick="handleChoice('+5 wealth,-5 sociability')">Politely decline</button>
  </div>`,

  `<div id="choice">
      <h1>Your company offers a voluntary buyout package, but you’re unsure of future job prospects. Do you accept the buyout or stay at your current job?</h1>
      <button onclick="handleChoice('+100000 wealth,+10 stress')">Accept the buyout</button>
      <button onclick="handleChoice('+10 happiness,+10 sociability,-5 stress')">Stay at your current job</button>
  </div>`,

  `<div id="choice">
      <h1>Your doctor suggests you start a plant-based diet to improve your health, but you enjoy your current diet. Do you make the switch or continue with moderation?</h1>
      <button onclick="handleChoice('+20 health,+10 happiness,-5 wealth')">Switch to a plant-based diet</button>
      <button onclick="handleChoice('+5 happiness')">Continue with moderation</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been working on a side project for a few years, and now it has the potential to become a full-time business. Do you take the leap or keep it as a side project?</h1>
      <button onclick="handleChoice('+30000 wealth,+20 stress')">Turn it into a full-time business</button>
      <button onclick="handleChoice('+10 happiness,-10 stress')">Keep it as a side project</button>
  </div>`,

  `<div id="choice">
    <h1>The prince of Eswatani contacts you on Instagram - he is stranded in Ghana and needs 1000$ to escape and promises to send you 100000$ if you help him and give him your debit card info.</h1>
    <button onclick="handleChoice('-170000 wealth, -30 intelligence')">Help him</button>
    <button onclick="handleChoice('-15 happiness,-10 stress,-5 athleticism')">Avoid this fishy situation</button>
</div>`,

  `<div id="choice">
      <h1>Your car is getting old, and you’re considering buying a more eco-friendly model, but it’s more expensive. Do you make the purchase or hold onto your current car?</h1>
      <button onclick="handleChoice('-80000 wealth,+10 happiness')">Buy the eco-friendly car</button>
      <button onclick="handleChoice('+5000 wealth,-5 happiness')">Keep your current car</button>
  </div>`,

  `<div id="choice">
      <h1>You’re thinking of adopting a senior pet, but you’re concerned about the extra care it might need. Do you adopt the pet or wait for a better time?</h1>
      <button onclick="handleChoice('+20 happiness,-500 wealth,-5 stress')">Adopt the senior pet</button>
      <button onclick="handleChoice('+5 happiness,-8 stress')">Wait for a better time</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been invited to a destination wedding, but it’s expensive and you’ve already made travel plans for the year. Do you go to the wedding or stick with your original plans?</h1>
      <button onclick="handleChoice('-8000 wealth,+10 happiness,+10 sociability')">Go to the wedding</button>
      <button onclick="handleChoice('+5000 wealth,+5 happiness')">Stick with your original plans</button>
  </div>`,
];
const goldenAgeChoices = [
  `<div id="choice">
      <h1>Your doctor recommends you join a health program for those over 50, but it requires commitment and cost. Do you join the program or stick with your own routine?</h1>
      <button onclick="handleChoice('+20 health,-500 wealth,+10 happiness')">Join the program</button>
      <button onclick="handleChoice('+5 health,+5 wealth')">Stick with your routine</button>
  </div>`,

  `<div id="choice">
      <h1>You've been invited to your high school reunion, but you’re unsure about reconnecting with old classmates. Do you attend or skip the event?</h1>
      <button onclick="handleChoice('+10 happiness,+10 sociability')">Attend the reunion</button>
      <button onclick="handleChoice('+5 happiness')">Skip the event</button>
  </div>`,
  `<div id="choice">
      <h1>You've always wanted a luxury house by the beach, but the prices are borderline absurd.</h1>
      <button onclick="handleChoice('+20 happiness,-300000 wealth')">Buy one, even though it may be outside of your budget</button>
      <button onclick="handleChoice('+5 happiness')">Save money</button>
  </div>`,

  `<div id="choice">
      <h1>You've always dreamed of climbing Everest, but you feel like you are too old for that.</h1>
      <button onclick="handleChoice('+30 happiness,+40 athleticism,-60000 wealth,-60 health')">Take the risk</button>
      <button onclick="handleChoice('-17 happiness')">Stay safe</button>
  </div>`,
  `<div id="choice">
    <h1>Banging on your house's door wakes you up in the middle of a rainy night. You are scared.</h1>
    <button onclick="handleChoice('-50 health,-20 intelligence,- 10000 wealth')">Open the door, someone might need help.</button>
    <button onclick="handleChoice('+10 intelligence')">Call the police immediately</button>
</div>`,

  `<div id="choice">
      <h1>A part-time consulting gig offers flexible hours, but you’ve been enjoying your free time. Do you</h1>
      <button onclick="handleChoice('+20000 wealth,+5 stress')">Take the consulting role</button>
      <button onclick="handleChoice('+10 happiness,-5 stress')">Continue enjoying your free time</button>
  </div>`,

  `<div id="choice">
      <h1>You’re considering starting a new fitness routine, but it requires early mornings. Do you commit to the new schedule or ease into something less intense?</h1>
      <button onclick="handleChoice('+15 health,+5 happiness,-10 wealth')">Commit to the new routine</button>
      <button onclick="handleChoice('+10 happiness')">Ease into a gentler routine</button>
  </div>`,

  `<div id="choice">
      <h1>You’re thinking about taking up golf, but the membership fees are steep. Do you sign up or find a more affordable hobby?</h1>
      <button onclick="handleChoice('+10 happiness,-10000 wealth')">Sign up for golf</button>
      <button onclick="handleChoice('+5 happiness,+5 wealth')">Find another hobby</button>
  </div>`,

  `<div id="choice">
      <h1>A cruise company offers you a discounted vacation package, but you’ve already set aside funds for home improvements. Do you go on the cruise or complete the renovations?</h1>
      <button onclick="handleChoice('+20 happiness,-5000 wealth')">Go on the cruise</button>
      <button onclick="handleChoice('+10 happiness')">Complete the renovations</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been considering learning a musical instrument, but lessons and equipment will cost a lot. Do you pursue this passion or stick to your current interests?</h1>
      <button onclick="handleChoice('+20 happiness,-2000 wealth')">Pursue the passion</button>
      <button onclick="handleChoice('+5 happiness,+5 wealth')">Stick to current hobbies</button>
  </div>`,

  `<div id="choice">
      <h1>Your long-time friend suggests starting a new business together, but it will require significant financial risk. Do you partner up or decline?</h1>
      <button onclick="handleChoice('-5000 wealth,+15 sociability,+10 stress')">Start the business</button>
      <button onclick="handleChoice('+5 happiness,-5 stress')">Politely decline</button>
  </div>`,

  `<div id="choice">
      <h1>Your family suggests hosting Thanksgiving this year, but it will be a lot of work. Do you agree to host or suggest someone else take over?</h1>
      <button onclick="handleChoice('+10 happiness,+10 sociability,-10 health')">Host Thanksgiving</button>
      <button onclick="handleChoice('+5 health')">Suggest someone else host</button>
  </div>`,

  `<div id="choice">
      <h1>A friend invites you to a weekend getaway, but you’ve been saving for a larger vacation. Do you go on the weekend trip or stick with your original plans?</h1>
      <button onclick="handleChoice('+15 happiness,-2000 wealth')">Go on the weekend trip</button>
      <button onclick="handleChoice('+5 happiness')">Stick to your larger vacation plans</button>
  </div>`,

  `<div id="choice">
      <h1>A young colleague asks you to get involved in their new startup, but you’ve been enjoying your free time. Do you get involved or stay hands-off?</h1>
      <button onclick="handleChoice('+10 sociability,+5 stress')">Help with the startup</button>
      <button onclick="handleChoice('+5 happiness')">Stay hands-off</button>
  </div>`,

  `<div id="choice">
      <h1>You've been invited to join a local book club, but you’ve already got a full schedule. Do you make time to join or focus on your current activities?</h1>
      <button onclick="handleChoice('+10 sociability,+5 intelligence')">Join the book club</button>
      <button onclick="handleChoice('+5 happiness')">Stick to current activities</button>
  </div>`,

  `<div id="choice">
      <h1>Your local community center is offering language classes for seniors, but it requires a weekly time commitment. Do you take the class or pass on the opportunity?</h1>
      <button onclick="handleChoice('+15 intelligence,+10 sociability,-500 wealth')">Take the language class</button>
      <button onclick="handleChoice('+5 wealth')">Pass on the opportunity</button>
  </div>`,

  `<div id="choice">
      <h1>Your old hobby of photography is calling to you, but updating your equipment is expensive. Do you invest in new gear or stick to your current interests?</h1>
      <button onclick="handleChoice('-3000 wealth,+20 happiness')">Invest in new gear</button>
      <button onclick="handleChoice('+5 wealth,+5 happiness')">Stick to your current hobbies</button>
  </div>`,

  `<div id="choice">
      <h1>You’ve been asked to speak at a conference, but it means spending more time on preparation. Do you accept the invitation or focus on other priorities?</h1>
      <button onclick="handleChoice('+10 wealth,+10 sociability,+5 stress')">Accept the invitation</button>
      <button onclick="handleChoice('+5 happiness')">Decline and focus on your priorities</button>
  </div>`,
  `<div id="choice">
  <h1>You are thinking of visiting a new hotel near the local lake for a week but it's quite expensive</h1>
  <button onclick="handleChoice('+10 happiness,-5 stress,-8000 wealth')">Book a reservation</button>
  <button onclick="handleChoice('-10 happiness')">Maybe another time</button>
</div>`,
];

function getRandomChildhoodChoice() {
  const randomIndex = Math.floor(Math.random() * childhoodChoices.length);

  const choice = childhoodChoices[randomIndex];

  childhoodChoices.splice(randomIndex, 1);
  return choice;
}

function getRandomTeenChoice(gender) {
  if (gender === "woman") {
    const randomIndex = Math.floor(Math.random() * teenGirlChoices.length);
    const choice = teenGirlChoices[randomIndex];

    teenGirlChoices.splice(randomIndex, 1);
    return choice;
  } else {
    const randomIndex = Math.floor(Math.random() * teenBoyChoices.length);
    const choice = teenBoyChoices[randomIndex];

    teenBoyChoices.splice(randomIndex, 1);
    return choice;
  }
}

function getRandomYoungAdultChoice() {
  const randomIndex = Math.floor(Math.random() * youngAdultChoices.length);
  const choice = youngAdultChoices[randomIndex];
  youngAdultChoices.splice(randomIndex, 1);
  return choice;
}

function getGrownAdultChoice() {
  const randomIndex = Math.floor(Math.random() * grownAdultChoices.length);
  const choice = grownAdultChoices[randomIndex];
  grownAdultChoices.splice(randomIndex, 1);
  return choice;
}
function getRandomMatureAdultChoice() {
  const randomIndex = Math.floor(Math.random() * matureAdultChoices.length);
  const choice = matureAdultChoices[randomIndex];
  matureAdultChoices.splice(randomIndex, 1);
  return choice;
}
function getRandomGoldenAgeChoice() {
  const randomIndex = Math.floor(Math.random() * goldenAgeChoices.length);
  const choice = goldenAgeChoices[randomIndex];
  goldenAgeChoices.splice(randomIndex, 1);
  return choice;
}

export {
  childhoodChoices,
  getRandomChildhoodChoice,
  getRandomGoldenAgeChoice,
  getRandomTeenChoice,
  getRandomYoungAdultChoice,
  getGrownAdultChoice,
  getRandomMatureAdultChoice,
  marriageChoice,
  childrenChoice,
  adoptChoice,
};
