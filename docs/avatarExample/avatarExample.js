/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "images/simple1.png",
    "images/simple2.png",
    "images/simple1_small.png",
    "images/simple2_small.png",
    "images/lacma.jpg"
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
    
        label, "start",
        scene, "empty.png",
        gold, { image: "simple1.png" },
        green, { image: "simple2.png" },
        gold, "Hi. I am Mr. Gold.",
        green, "And I am Mr. Green.",
        gold, "Sometimes it&rsquo;s hard to figure out who is talking when both characters are on-screen.",
        green, {image: "simple2.png", avatar: "simple2_small.png"},
        green, "By adding a dialog avatar...",
        gold, {avatar: "simple1_small.png"},
        gold, "You make things much easier for the reader.",
        
        scene, "lacma.jpg",
        green, {image: "", avatar: "simple2_small.png"},
        green, "Avatars are also useful when you want dialog but don&rsquo;t want the character to obscure the background details.",
        gold, "As in this photo of Claes Oldenburg&rsquo;s &ldquo;Giant Pool Balls.&rdquo;",
        green, "The photo was taken at the Los Angeles County Museum of Art, by the way.",
        gold, "The museum is definitely worth a visit if you are ever in Los Angeles.",
        green, {image: "simple2.png", avatar: ""},
        green, "And here I am, back without my avatar."
        
    ];
}

