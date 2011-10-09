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
var sampleText;
var otherText;
var narrator;
/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = ""; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here  
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        label, "choices",
        menu, [
            "Choose an option (loop is {{novel.audioLoop}})",
            "Start audio", [audio, {src: "scale", format: ["ogg", "wav"],
                action: "play"}],
            "Stop audio", [audio, {action: "stop"}],
            "Pause audio", [audio, {action: "pause"}],
            "Resume audio", [audio, {action: "play"}],
            "Rewind audio", [audio, {action: "rewind"}],
            "Set loop true", [audio, {loop: true}],
            "Set loop false", [audio, {loop: false}]
        ],
        label, "continue",
        jump, "choices"
    ];
}

