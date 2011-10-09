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
var joe;
var geometry;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    joe = new Character("José",
        {
            color: "#ff0",
            position: new Position(0, .75, 0, 1)
        }
    );
    geometry = new Character("",
        { position: new Position(0.5, 0.2, 0.5, 0.5) }
    );
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        label, "ask",
        joe, {image: "smiling1.png"},
        joe, {say: "Which one is your favourite shape?", noPause: true},
        geometry, {image: "geometry.png"},
        imagemap, { mapId: "geometryMap",
            character: geometry, screenActive: true},
        
        scene, "empty.png",
        joe, {image: "sad1.png",
        say: "I can see that none of the shapes appeals to you. Click to try again."},
        jump, "ask",
        
        label, "red",
        joe, {image: "smiling1.png", say: "You chose the red square.<br />Click to start over."},
        jump, "ask",
        
        label, "green",
        joe, {say: "You chose the green circle.<br />Click to start over."},
        jump, "ask",
        
        label, "blue",
        joe, "You chose the blue trapezoid.<br />Click to start over.",
        jump, "ask"

    ];
}

