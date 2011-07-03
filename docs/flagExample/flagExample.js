/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "images/frank.png",
    "images/roberta.png",
    "images/roberta_laugh.png",
    "images/roberta_sad.png",
    "images/roberta_ick.png"
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
var narrator;

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
            color: "#0ff",
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
        setVars, { flagA: 0, flagB: 0, flagC: 0 },

        label, "choice1",
        show, frank,
        roberta, {image: "roberta.png"},
        frank, "Roberta, your lips...",
        menu, [
            "Your lips are as red as...",
            "...a precious ruby", [jump, "a1"],
            "...that little red wagon I had when I was a kid", [jump, "b1"],
            "...a drunkard&rsquo;s nose", [jump, "c1"]
        ],
        
        label, "a1",
        roberta, "Oh, how wonderful. I just love jewelry.",
        setVars, "novel.userVar.flagA = novel.userVar.flagA + 1",
        jump, "choice2",
        
        label, "b1",
        frank, "May I give you a ride to romance?",
        roberta, {image: "roberta_laugh.png"},
        roberta, "That sounds like fun.",
        setVars, "novel.userVar.flagB = novel.userVar.flagB + 1",
        jump, "choice2",

        label, "c1",
        roberta, {image: "roberta_sad.png"},
        roberta, "Um, is that supposed to be a compliment?",
        setVars, "novel.userVar.flagC = novel.userVar.flagC + 1",
        jump, "choice2",
       
        label, "choice2",
        roberta, {image: "roberta.png"},
        frank, "Roberta, your eyes....",
        menu, [
            "Your eyes are as brown as...",
            "...the finest milk chocolate", [jump, "a2"],
            "...a UPS truck", [jump, "b2"],
            "...sewer sludge", [jump, "c2"]
        ],
        
        label, "a2",
        roberta, "Oooh, that sounds delicious!",
        setVars, "novel.userVar.flagA = novel.userVar.flagA + 1",
        jump, "choice3",
        
        label, "b2",
        frank, "And I want that truck to deliver all my love to you!",
        roberta, "Oh, that&rsquo;s cute.",
        setVars, "novel.userVar.flagB = novel.userVar.flagB + 1",
        jump, "choice3",
        
        label, "c2",
        roberta, {image: "roberta_ick.png"},
        roberta, "Urgh.",
        setVars, "novel.userVar.flagC = novel.userVar.flagC + 1",
        jump, "choice3",

        label, "choice3",
        roberta, {image: "roberta.png"},
        frank, "Roberta, your hair...",
        menu, [
            "Your hair is as yellow is...",
            "...the golden sunshine", [jump, "a3"],
            "...a banana peel", [jump, "b3"],
            "...the ring in my toilet bowl", [jump, "c3"]
        ],
        
        label, "a3",
        roberta, "Gold. I like it!",
        setVars, "novel.userVar.flagA = novel.userVar.flagA + 1",
        jump, "summary",
        
        label, "b3",
        frank, "And I think I&rsquo;m going to slip and fall in love!",
        setVars, "novel.userVar.flagB = novel.userVar.flagB + 1",
        jump, "summary",
        
        label, "c3",
        roberta, {image: "roberta_ick.png"},
        roberta, "Eeeeewwww. That&rsquo;s gross!",
        setVars, "novel.userVar.flagC = novel.userVar.flagC + 1",
        jump, "summary",

        label, "summary",
        roberta, {image: "roberta.png"},
        ifStatement, "novel.userVar.flagA >= 2",
            roberta, "You are so romantic. Let us make mad, passionate love!",
        elsePart, "",
            ifStatement, "novel.userVar.flagB >= 2",
                roberta, {image: "roberta_laugh.png"},
                roberta, "You&rsquo;re weird, but funny. I like you!",
            elsePart, "",
                ifStatement, "novel.userVar.flagC >= 2",
                    roberta, {image: "roberta_sad.png"},
                    roberta, "You are disgusting! I never want to talk to you again!",
                elsePart, "",
                    roberta, {image: "roberta_sad.png"},
                    roberta, "You are very confusing. I&rsquo;d rather not go out with you.",
                endIf, "",
            endIf, "",
        endIf, "",
        
        narrator, "Click to restart this demo",
        jump, "start"
    ];
}

