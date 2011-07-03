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
var roberta;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here  
    // and put your script commands into this array
    
    frank = new Character('Frank', {
            image: "frank.png",
            color: "#fff",
            position: new Position(0.0, 0.75, 0, 1)
    });
    
    roberta = new Character('Roberta', {
            image: "roberta.png",
            color: "#ff0",
            position: new Position(1, 0.75, 1, 1)
    });
    
    narrator = new Character('');
        
    script = [
        label, "start",
        scene, "empty.png",
        narrator, "Click to see a mini-novel using <code>scene</code>",
        scene, "office.jpg",
        
        show, frank,
        show, roberta,
        roberta, "Frank and I had finished a long day at the office.",
        
        scene, {image: "highway.jpg"},        
        show, frank,
        frank, "I said goodbye to Roberta and got on the highway.",
        
        scene, {image: "house.jpg", effect: "fade"},
        show, roberta,
        roberta, "Meanwhile, I headed home.",
        
        scene, {image: "food.jpg", effect: "dissolve"},
        show, roberta,
        roberta, "And I had some delicious chocolate cake!",
        
        scene, "empty.png",
        narrator, "Click to see background in action.",
        
        background, "office.jpg",
        
        show, frank,
        show, roberta,
        roberta, "Frank and I had finished a long day at the office.",
        
        background, {image: "highway.jpg"},        
        frank, "We got in our car and got on the highway.",
        
        background, {image: "house.jpg", effect: "fade"},
        roberta, "When we got home...",
        
        background, {image: "food.jpg", effect: "dissolve"},
        frank, "We had some delicious chocolate cake!",
        
        scene, "empty.png",
       
        narrator, "Click to restart this demo",
        jump, "start"
    ];
}

