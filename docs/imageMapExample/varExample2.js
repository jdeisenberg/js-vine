/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "images/sapphire.jpg",
    "images/ruby.jpg",
    "images/emerald.jpg"
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
var salesman;
var jewelPhoto;

/* my own variables (instead of using novel.userVar) */
var myColor;
var myJewel;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    salesman = new Character("Ed the Salesman",
        {
            color: "#ff0",
            position: new Position(0, .75, 0, 1)
        }
    );
    jewelPhoto = new Character("",
        { position: new Position(0.5, 0.2, 0.5, 0.5) }
    );
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        salesman, {image: "simple1.png"},
        salesman, "Welcome to the jewelry store!",
        label, "ask",
        jewelPhoto, {visibility: "hidden"},
        menu, [
            "What&rsquo;s your favorite color?",
            "Red", [ setVars, "myColor='red'; myJewel='ruby'" ],
            "Green", [ setVars,"myColor='green'; myJewel='emerald'" ],
            "Blue", [ setVars, "myColor='blue'; myJewel='sapphire'" ]
        ],
        label,"salesPitch",
        salesman, "Well, if you like {{myColor}}...",
        jewelPhoto, {image: "{{myJewel}}.jpg", visibility: "visible"},
        salesman, "Perhaps you would like to purchase this lovely {{myJewel}}!",
        jump, "ask"

    ];
}

