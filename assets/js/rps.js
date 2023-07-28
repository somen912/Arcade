$(function(){


    $("#rock").click(function(){
        
        const hand = ["Scissor","Rock","Paper"];
        var user_hand = Math.floor((Math.random()*3)+1);

        $("#computer h3").text(hand[user_hand-1]);
        $("#computer img").attr("src","assets/img/left-hand/"+user_hand+".png");

        $("#user h3").text("Rock");
        $("#user img").attr("src","assets/img/right-hand/2.png");


        if($("#computer h3").text()=="Rock"){
            $(".game-header h3").text("Game Draw");
            $("#computer img").addClass("victory");
            $("#user img").addClass("victory");
        }

        if($("#computer h3").text()=="Paper"){
            $(".game-header h3").text("You Lose");
            $("#computer img").addClass("victory");
            $("#user img").removeClass("victory");
        }

        if($("#computer h3").text()=="Scissor"){
            $(".game-header h3").text("You Won!!!");
            $("#user img").addClass("victory");
            $("#computer img").removeClass("victory");
        }
    });

    $("#paper").click(function(){

        // alert($("#computer h3").text());

        const hand = ["Scissor","Rock","Paper"];
        var user_hand = Math.floor((Math.random()*3)+1);

        $("#computer h3").text(hand[user_hand-1]);
        $("#computer img").attr("src","assets/img/left-hand/"+user_hand+".png");

        $("#user h3").text("Paper");
        $("#user img").attr("src","assets/img/right-hand/3.png");

        if($("#computer h3").text()=="Paper"){
            $(".game-header h3").text("Game Draw");
            $("#computer img").addClass("victory");
            $("#user img").addClass("victory");
        }

        if($("#computer h3").text()=="Scissor"){
            $(".game-header h3").text("You Lose");
            $("#computer img").addClass("victory");
            $("#user img").removeClass("victory");
        }

        if($("#computer h3").text()=="Rock"){
            $(".game-header h3").text("You Won!!!");
            $("#user img").addClass("victory");
            $("#computer img").removeClass("victory");
        }

        
    });

    $("#scissor").click(function(){

        const hand = ["Scissor","Rock","Paper"];
        var user_hand = Math.floor((Math.random()*3)+1);

        $("#computer h3").text(hand[user_hand-1]);
        $("#computer img").attr("src","assets/img/left-hand/"+user_hand+".png");

        $("#user h3").text("Scissor");
        $("#user img").attr("src","assets/img/right-hand/1.png");


        if($("#computer h3").text()=="Scissor"){
            $(".game-header h3").text("Game Draw");
            $("#computer img").addClass("victory");
            $("#user img").addClass("victory");
        }

        if($("#computer h3").text()=="Rock"){
            $(".game-header h3").text("You Lose");
            $("#computer img").addClass("victory");
            $("#user img").removeClass("victory");
        }

        if($("#computer h3").text()=="Paper"){
            $(".game-header h3").text("You Won!!!");
            $("#user img").addClass("victory");
            $("#computer img").removeClass("victory");
        }
    });









});