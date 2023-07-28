$(function(){

    $("#fight-button").click(function(){
        // alert("button pressed");

        // Marvel section
        const marvel_character = ["Iron Man", "Ultron", "Thanos", "Kang", "Thor", "Captain America", "Hulk", "Dr. Strange", "Black Panther", "Scarlet Witch"];

        let marvel_hero = Math.floor((Math.random()*10)+1);
        let marvel_dice = Math.floor((Math.random()*6)+1);

        $(".marvel img").attr("src","assets/img/Marvel/marvel"+marvel_hero+".png");
        $(".marvel-dice img").attr("src","assets/img/dice/"+marvel_dice+".png");
        $(".marvel h3").text(marvel_character[marvel_hero-1]);


        // DC section
        const dc_character = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Darksied", "Joker", "Harley Quin", "Dr. Fate", "Black Adam"];

        let dc_hero = Math.floor((Math.random()*10)+1);
        let dc_dice = Math.floor((Math.random()*6)+1);

        $(".dc img").attr("src","assets/img/DC/dc"+dc_hero+".png");
        $(".dc-dice img").attr("src","assets/img/dice/"+dc_dice+".png");
        $(".dc h3").text(dc_character[dc_hero-1]);

        // Game Logic

        if(marvel_dice>dc_dice){
            $(".game-header h3").text("Marvel Wins");
            $(".game-header h3").text(marvel_character[marvel_hero - 1]+" Wins");
            $(".marvel img").addClass("victory");
            $(".dc img").removeClass("victory");
          }
          else if (marvel_dice<dc_dice) {
            $(".game-header h3").text("DC Wins");
            $(".game-header h3").text(dc_character[dc_hero - 1]+" Wins");
            $(".dc img").addClass("victory");
            $(".marvel img").removeClass("victory");
          }
          else if (marvel_dice==dc_dice) {
            $(".game-header h3").text("Battle is Draw");
            $(".marvel img").addClass("victory");
            $(".dc img").addClass("victory");
          }
          else{
            $(".game-header h3").text("Battle Begin");
          }


    });




});