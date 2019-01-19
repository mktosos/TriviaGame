$( function(){
    var cAnswers=0;
    var iAnswers=0;
    var unAnswered=0;
    var fill=false;
    var a=0;

    //arrays for answers and questions with corresponding indexes
    questionsArr =["Which video game studio created the popular online game Fortnite?",
        "What was the first console video game that allowed the game to be saved?",
        "The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?",
        "Nintendo is a consumer electronics and video game company founded in what country?",
        "The first person shooter video game Doom was first released in what year?",
        "In what year did Nintendo release its first game console in North America?",
        "In what year was the Nintendo 64 officially released?"
    ];
    answers=[['Activision', 'EPIC','Microsoft', 'SONY'],
        ['Pong','Pacman','Super Mario','Zelda'],
        ['Atari','Commodore','Coleco','SEGA'],
        ['US','Korea','China','Japan'],
        ['1984','1993','1998','2001'],
        ['1985','1994','1999','2002'],
        ['1987','1996','2001','2004']
    ];

    //Start button to start game and run game f()
    $("#startButton").on("click", function(){
        reveal();
        gameStart();
    });

     //reveals game after btn click
     function reveal() {
        $(".game").css("display","block"); 
        $("#startButton").css("display","none");
    };
        console.log(questionsArr[0]);
        console.log(answers[0][0]);

    //game main for loop through array
    function gameStart(){
        for (let a = 0; a < answers.length; a++) {
            // if (boo === true){
                fifteenSeconds();
                fillCard();
                console.log(a);
            // }   
        }   
    }
    //15 sec countdown f() 
    function fifteenSeconds(){
        fill=true;
        var timeLeft= 0;
        var timeRemaining = setInterval(timeLeftF, 1000);
             function timeLeftF(){
                 $('#timeLeft').html(15-timeLeft + ' ');
                 timeLeft++;
                 if (timeLeft>15){
                 clearInterval(timeRemaining);
                    }
            }
    };
    //fill card with proper text from array
    function fillCard(){
        if(fill===true){
            if(questionsArr.indexOf(questionsArr[a])===-1){
                clearInterval(timeRemaining);
                timesUp();}
            else{
                $('#questionDiv').html(questionsArr[a]);
                $('#answerDiv').html(answers[a]); 
                fill==false; 
            }
        }   
    }
    function timesUp(){
        $(".game").css("display","none"); 
        $(".results").css("display","block"); 
        }
    });