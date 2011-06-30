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
var narrator;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = ""; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    narrator = new Character("");
    
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        narrator, "Click the mouse to add 2 and 5.",
        jsCall,  { fcn: addNumbers, params: [2, 5] },
        narrator, "The result is {{novel.userVar.sum}}."
    ];
}


function addNumbers(x, y)
{
    novel.userVar.sum = x + y;
}
