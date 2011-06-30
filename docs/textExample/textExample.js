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
    sampleText = new TextBlock("sample",
      {
      color: "red", backgroundColor: "#ff0",
      font: "24pt Helvetica", align: "center",
      width: 0.6,
      position: new Position(50, 70)
      }
    );
    otherText = new TextBlock("other",
      {
        text: "Yet more text.",
        position: new Position(0.25, 0.5),
        width: 0.5
      }
    );
    narrator = new Character("");
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        sampleText, "Here I am!",
        narrator, "Click to change colors.",
        sampleText, {color: "white", backgroundColor: "#800"},
        narrator, "Click to change the text and border",
        sampleText, {text: "New text", border: "5px double white"},
        narrator, "Click to see some other text",
        otherText, null,
        narrator, "Scene switches...",
        scene, null, // clear tableau
        narrator, "And now, the colorful text again",
        sampleText, null,
        narrator, "The end"

    ];
}

