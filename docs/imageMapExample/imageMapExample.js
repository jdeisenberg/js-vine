/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
];

/*
    This section pre-loads your images.
    Don't change it unless you know what you're doing.
*/
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

/* Declare variables for characters, positions, and text blocks here */
var script;                 // this variable will hold your script
var agent;
var europe;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    agent = new Character("Morty",
        {
            color: "#ff0",
            position: new Position(0, .75, 0, 1)
        }
    );
    europe = new Character("",
        { position: new Position(0.5, 0.2, 0.5, 0.5) }
    );
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        agent, {image: "smiling1.png"},
        agent, "Hi. I'm Morty, the travel agent.",
        label, "ask",
        europe, {image: "empty_map2.png"},
        agent, { say: "Click one of the highlighted countries to see my travel recommendations.", noPause: true },
        imagemap, { mapId: "euroMap", character: europe },
        
        label, "france",
        europe, {image: "france_map.png"},
        agent, "Ah, la belle France! You must see Paris, of course.",
        jump, "ask",
        
        label, "germany",
        europe, {image: "germany_map.png"},
        agent, "Germany&#8217;s major cities, Berlin, Frankfurt, Hamburg, and Munich, are all excellent places to visit. Don&#8217;t drink too much beer!",
        jump, "ask",
        
        label, "spain",
        europe, {image: "spain_map.png"},
        agent, "When you go to Spain, you simply <i>must</i> visit El Prado, the art museum in Madrid.",
        jump, "ask",
        
        label, "sweden",
        europe, {image: "sweden_map.png"},
        agent, "In Sweden, Stockholm&#8217;s Gamla Stan (old town) and Skansen park are must-sees.",
        jump, "ask"

    ];
}

