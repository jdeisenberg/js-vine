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
var frank;
var message;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = ""; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here  
    // and put your script commands into this array
    
    frank = new Character('Frank', {
            image: "frank.png",
            color: "#fff",
            position: new Position(0.5, 0.5, 0.5, 0.5)
    });
    
    message = new TextBlock('', {
            font: '14px Lucida Console, Courier New, Courier, monospace',
            text: '<code>show, frank,<br />show, message</code>',
            border: "1px solid red",
            padding: "0.25em",
            backgroundColor: "#ffc",
            width: 0.5,
            align: "left",
            position: new Position(0.25, 0.5)
    });
    
    script = [
        label, "start",
        scene, "empty.png",
        
        show, frank,
        frank, "I am on screen first.",
        
        show, message,
        frank, "Because the message came into the tableau after me, it appears above me.",
        
        message, {text: '<code>show, message<br />hide, frank</code>'},
        hide, frank,
        
        frank, "I am hidden now, but I can still speak. I am still one of the actors in the tableau, I am just not visible.",
        message, {text: '<code>show, message<br />hide, frank,<br />show,frank</code>'},
        
        show, frank,
        frank, "<code>show</code> brings me back - still behind the message.",
        
        remove, frank,
        message, {text: '<code>show,frank,<br />remove, frank</code>'},
        
        frank, "I have just been removed. I am no longer in the tableau at all.",
        
        frank, "But I can still speak. Is this a feature or a bug?",
        
        show, frank,
        message, {text: '<code>show,frank,<br />remove, frank,<br />show, frank</code>'},
        
        frank, "The last <code>show</code> put me back into the tableau, and I am now the last actor to appear, so I appear in front of the message area.",
        
        frank, "Click to restart this demo",
        jump, "start"
    ];
}

