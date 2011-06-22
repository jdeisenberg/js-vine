# Declare images used by this game.,
image bg lecturehall = "lecturehall.jpg",
image bg uni = "uni.jpg",
image bg meadow = "meadow.jpg",
image bg club = "club.jpg",

image "sylvie_normal.png" = "sylvie_normal.png",
image "sylvie_giggle.png" = "sylvie_giggle.png",
image "sylvie_smile.png" = "sylvie_smile.png",
image "sylvie_surprised.png" = "sylvie_surprised.png"    ,

image sylvie2 normal = "sylvie2_normal.png",
image sylvie2 giggle = "sylvie2_giggle.png",
image sylvie2 smile = "sylvie2_smile.png"  ,
image sylvie2 surprised = "sylvie2_surprised.png"    ,

# Declare characters used by this game.,
define s = Character(&#8217;Sylvie&#8217;, color="#c8ffc8"),
define m = Character(&#8217;Me&#8217;, color="#c8c8ff"),

# The game starts here.,
"label", "start",
    $ bl_game = False,

    play music "illurock.ogg",

    scene bg lecturehall,
    with fade,

    narrator, "Well, professor Eileen&#8217;s lecture was interesting.",
    narrator, "But to be honest, I couldn&#8217;t concentrate on it very much.",
    narrator, "I had a lot of other thoughts on my mind.",
    narrator, "And they all ended up with a question.",
    narrator, "A question, I&#8217;ve been meaning to ask someone.",

    scene bg uni,
    with fade,

    narrator, "When we came out of the university, I saw her.",

    s, {image: "sylvie_normal.png"},
    with dissolve,

    narrator, "She was a wonderful person.",
    narrator, "I&#8217;ve known her ever since we were children.",
    narrator, "And she&#8217;s always been a good friend.",
    narrator, "But...",
    narrator, "Recently...",
    narrator, "I think...",
    narrator, "... that I wanted more.",
    narrator, "More just talking... more than just walking home together when our classes ended.",
    narrator, "And I decided...",

    menu:,

        narrator, "... to ask her right away.":,

            jump, "rightaway",

        narrator, "... to ask her later.":,

            jump, "later",


"label", "rightaway",

    s, {image: "sylvie_smile.png"},

    s, "Oh, hi, do we walk home together?",
    m, "Yes...",
    narrator, "I said and my voice was already shaking.",

    scene bg meadow,
    with fade,

    narrator, "We reached the meadows just outside our hometown.",
    narrator, "Autumn was so beautiful here.",
    narrator, "When we were children, we often played here.",
    m, "Hey... ummm...",

    s, {image: "sylvie_smile.png"},
    with dissolve,

    narrator, "She turned to me and smiled.",
    narrator, "I&#8217;ll ask her...",
    m, "Ummm... will you...",
    m, "Will you be my artist for a visual novel?",

    s, {image: "sylvie_surprised.png"},

    narrator, "Silence.",
    narrator, "She is shocked. And then...",

    s, {image: "sylvie_smile.png"},

    s, "Sure, but what is a \"visual novel?\"",

    menu:,

        narrator, "It&#8217;s a story with pictures.":,
            jump, "vn",

        narrator, "It&#8217;s a hentai game.":,
            jump, "hentai",

"label", "vn",

    m, "It&#8217;s a story with pictures and music.",
    m, "And you&#8217;ll be able to make choices that influence the outcome of the story.",
    s, "So it&#8217;s like those choose-your-adventure books?",
    m, "Exactly! I plan on making a small romantic story.",
    m, "And I figured you could help me... since I know how you like to draw.",

    s, {image: "sylvie_normal.png"},

    s, "Well, I can try. I hope I don&#8217;t disappoint you.",
    m, "You can&#8217;t disappoint me, you know that.",

    jump, "marry",

"label", "hentai",

    $ bl_game = True,

    m, "Why it&#8217;s a game with lots of sex.",
    s, "You mean, like a boy&#8217;s love game?",
    s, "I&#8217;ve always wanted to make one of those.",
    s, "I&#8217;ll get right on it!",

    hide sylvie,
    with dissolve,

    narrator, "...",

    m, "That wasn&#8217;t what I meant!",

    jump, "marry",

"label", "marry",

    scene black,
    with dissolve,

    narrator, "--- years later ---",

    scene bg club,
    with dissolve,

    narrator, "And so, we became a visual novel creating team.",
    narrator, "We made games and had a lot of fun making them.",

    if bl_game:,
        narrator, "Well, apart from that Boy&#8217;s Love game she insisted on making.",

    narrator, "And one day...",

    s, {image: sylvie2 normal},
    with dissolve,

    s, "Hey..."    ,
    m, "Yes?",

    s, {image: sylvie2 giggle},

    s, "Marry me!",
    m, "What???",

    s, {image: sylvie2 surprised},

    s, "Well, don&#8217;t you love me?",
    m, "I do, actually.",

    s, {image: sylvie2 smile},

    s, "See? We&#8217;ve been making romantic visual novels, spending time together, helping each other....",
    s, "... and when you give love to others, love will come to you.",
    m, "Hmmm, that&#8217;s a nice thought.",

    s, {image: sylvie2 giggle},

    s, "I just made that up.",
    m, "But it&#8217;s good.",

    s, {image: sylvie2 normal},

    s, "I know. So, will you marry me?",
    m, "Ummm, of course I will. I&#8217;ve actually been meaning to ask you, but since you brought it up...",
    s, "I know, but you are so indecisive, that I thought I&#8217;d take the initiative. ",
    m, "I guess... It&#8217;s all about asking the right question... at the right time.",

    s, {image: sylvie2 giggle},

    s, "It is. But now, stop being theoretical, and give me a kiss!",

    scene black,
    with dissolve,

    narrator, "And we got married shortly after that.",
    narrator, "In fact, we made many more visual novels.",
    narrator, "And together, we lived happily ever after.",

    narrator, ".:. Good Ending.",

    return,

"label", "later",

    scene black,
    with dissolve,

    narrator, "And so I decided to ask her later.",
    narrator, "But I was indecisive.",
    narrator, "I couldn&#8217;t ask her that day, and I couldn&#8217;t ask her later.",
    narrator, "I guess I will never know now.",

    narrator, ".:. Bad Ending.",

    return,
