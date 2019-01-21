$( function(){
    var cAnswers=0;
    var iAnswers=0;
    var unAnswered=0;
    var fill=false;
    var a=0;
    var pick;
    //var oneTime=true;

    //arrays for answers and questions with corresponding indexes
    questionsArr =["Which video game studio created the popular online game Fortnite?",
        "What was the first console video game that allowed the game to be saved?",
        "The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?",
        "Nintendo is a consumer electronics and video game company founded in what country?",
        "The first person shooter video game Doom was first released in what year?",
        "In what year did Nintendo release its first game console in North America?",
        "In what year was the Nintendo 64 officially released?"
    ];
    answers=[['Activision', 'EPIC','Microsoft', 'SONY','1'],
        ['Pong','Pacman','Super Mario','Zelda','3'],
        ['Atari','Commodore','Coleco','SEGA','2'],
        ['US','Korea','China','Japan','3'],
        ['1984','1993','1998','2001','1'],
        ['1985','1994','1999','2002','0'],
        ['1987','1996','2001','2004','1']
    ];

    //Start button to start game and run game f()
    $("#startButton").on("click", function(){
        reveal();
        gameStart();
        
    });

     //reveals game after btn click
     function reveal() {
        $(".game, .jumbo").css("display","block"); 
        $("#startButton").css("display","none");
    };

    //game main
    function gameStart(){
        fifteenSeconds();
        fillCard();
    }

    //15 sec countdown f() and itterator of a
    function fifteenSeconds(){
        fill=true;
        var timeLeft= 0;
        var timeRemaining = setInterval(timeLeftF, 1000);
             function timeLeftF(){
                 //detectRadio();  
                 $('#timeLeft').html(5-timeLeft + ' ');
                 timeLeft++;
                 if (timeLeft>5){
                    clearInterval(timeRemaining);
                    getResults();
                    a=a+1;
                    //oneTime==true;
                    gameStart();
                    }
            }
    };
    //fill card with proper text from array
    function fillCard(){
        $("#checkbox-1").prop('checked', false);
        $("#checkbox-2").prop('checked', false);
        $("#checkbox-3").prop('checked', false);
        $("#checkbox-4").prop('checked', false);
        if(fill===true){
            if(questionsArr.indexOf(questionsArr[a])===-1){
                clearInterval(timeRemaining);
                timesUp();}
            else{
                $('#questionDiv').html(questionsArr[a]);
                $('#cb3').html(answers[a][2]); 
                $('#cb1').html(answers[a][0]); 
                $('#cb2').html(answers[a][1]); 
                $('#cb4').html(answers[a][3]); 
                fill==false; 
            }
        }   
    };
    function getResults(){
        
        if (document.getElementById('checkbox-1').checked) {
            pick = 0;
        }
        if (document.getElementById('checkbox-2').checked) {
            pick = 1;
        } 
        if (document.getElementById('checkbox-3').checked) {
            pick = 2;
        } 
        if (document.getElementById('checkbox-4').checked) {
            pick = 3;
        } 
        if (pick == answers[a][4]){
            cAnswers=cAnswers+1;
            console.log('correct pick: '+pick);
            } else if (pick == undefined){
            unAnswered=unAnswered+1;
            //alert("You did not make a selection, press to see answer.");
            } else {
            iAnswers=iAnswers+1;
            }
        pick = undefined;    
    
        console.log('incorrect answers: '+ iAnswers);
        console.log('correct answers: '+ cAnswers);
        console.log('unanswered: '+ unAnswered);
    
    };

    function timesUp(){
        $(".game").css("display","none"); 
        $(".results").css("display","block"); 
        $("#correctAnswersSpan").html(cAnswers);
        $("#incorrectAnswersSpan").html(iAnswers);
        $("#unansweredSpan").html(unAnswered);
        clearInterval(timeRemaining);
    };

    // function detectRadio(){
    //     if (oneTime==true){
    //         $('#cb').change(function(){ //needs a boolean to only execute once
    //             oneTime==false;
    //             alert("change detected");
                
    //             // timeLeft= 0;
    //             // gameStart();
    //         });
    //     }
    // }
});