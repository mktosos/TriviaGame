$( function(){

//Start button to start game and run game f()
$("#startButton").on("click", function(){
    reveal();
    resetGame();
});
//reveals game after btn click
function reveal() {
    $(".game").css("display","block"); //changes display from none to block( as in vs inline/span so as to be visible)
    $("#startButton").css("display","none");
    }
//reset of scores **may not need a reset function
function resetGame() {
    console.log(questions[0]);
    console.log(answers[0]);
}
//arrays for answers and questions with corresponding indexes
var questions =["Which video game studio created the popular online game Fortnite?",
    "What was the first console video game that allowed the game to be saved?",
    "The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?",
    "Nintendo is a consumer electronics and video game company founded in what country?",
    "The first person shooter video game Doom was first released in what year?",
    "In what year did Nintendo release its first game console in North America?",
    "In what year was the Nintendo 64 officially released?"
];
var answers=[['Activision', 'EPIC','Microsoft', 'SONY'],
    ['Pong','Pacman','Super Mario','Zelda'],
    ['Atari','Commodore','Coleco','SEGA'],
    ['US','Korea','China','Japan'],
    ['1984','1993','1998','2001'],
    ['1985','1994','1999','2002'],
    ['1987','1996','2001','2004']
];


});