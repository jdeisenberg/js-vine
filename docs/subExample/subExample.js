/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "images/simple1.jpg",
    "images/simple2.jpg"
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
var gold;
var green;
var narrator;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    gold = new Character("Mr. Gold",
        {
            color: "#ff0",
            position: new Position(0, .75, 0, 1)
        }
    );
    green = new Character("Mr. Green",
        {
            color: "#9f9",
            position: new Position(1, .75, 1, 1)
        }
    );
    narrator = new Character("");
    
    // and put your script commands into this array
    script = [
        sub, "showGold",
        gold, { alpha: 1.0 },
        green, { alpha: 0.3 },
        endSub, "",
        
        sub, "showGreen",
        gold, { alpha: 0.3 },
        green, { alpha: 1.0 },
        endSub, "",
    
        label, "start",
        scene, "empty.png",
        gold, { image: "simple1.png" },
        green, { image: "simple2.png" },
        narrator, "This is Mr. Gold and Mr. Green.",
        
        call, "showGold",
        gold, "Hi. I am Mr. Gold.",
        call, "showGreen",
        green, "And I am Mr. Green.",
        call, "showGold",
        gold, "You dope. They can figure that out by process of elimination.",
        call, "showGreen",
        green, "Oh, yeah, I guess so. My bad."
    ];
}

