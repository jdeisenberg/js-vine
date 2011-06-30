/*
    Fill this array with a list of names of images
    to be pre-loaded.
*/
var preload = [
    "images/dog.jpg",
    "images/cat.jpg"
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
var david;
var animalPhoto;

/*
    This function must exist, and must have this name
*/
function prepareNovel()
{
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio direcoty
    
    // initialize your characters, positions, and text blocks here
    david = new Character("David",
        {
            color: "#ff0",
            position: new Position(0, .75, 0, 1)
        }
    );
    animalPhoto = new Character("",
        { position: new Position(0.5, 0.4, 0.5, 0.5) }
    );
    // and put your script commands into this array
    script = [
        label, "start",
        scene, "empty.png",
        david, {image: "simple1.png"},
        label, "ask",
        menu, [
            "Which do you prefer?",
            "Cats", [ setVars, { animal: "cat" },
                jump, "catPart"],
            "Dogs", [ setVars, { animal: "Dog" },
                jump, "dogPart"]
        ],
        
        label, "catPart",
        scene, null,
        david, {image: "simple1.png"},
        david, "I am a cat person also.",
        animalPhoto, {image: "cat.jpg"},
        david, "This is my cat, Marco.",
        jump, "part2",
        
        label, "dogPart",
        scene, null,
        david, {image: "simple1.png"},
        david, "Even though I prefer cats myself...",
        animalPhoto, {image: "dog.jpg" },
        david, "I have to admit this is one cute little dog.",
        jump, "part2",
        
        label, "part2",
        scene, null,
        david, {image: "simple1.png"},
        david, "If you have a pet, that&rsquo;s great.",
        david, "If you don&rsquo;t have a pet but want one, go to the local shelter and adopt an animal.",
        ifStatement, "novel.userVar.animal == 'cat'",
            david, {image: "smiling1.png"},
            david, "Especially one that purrs!",
            david, {image: "simple1.png"},
        endIf, "",
        david, "And remember: please spay or neuter your pet."
    ];
}

