$(function(){

  let count = 10;
  let marvel_point = 0;
  let dc_point = 0;

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
          
          $(".game-header h3").text(marvel_character[marvel_hero - 1]+" Wins");
          $(".marvel img").addClass("victory");
          $(".dc img").removeClass("victory");
          
          marvel_point+=1;
          count-=1;
          $(".marvel h2").text("Marvel : "+marvel_point);
          $(".count").text(count);
        }
        else if (marvel_dice<dc_dice) {
          
          $(".game-header h3").text(dc_character[dc_hero - 1]+" Wins");
          $(".dc img").addClass("victory");
          $(".marvel img").removeClass("victory");
          
          dc_point+=1;
          count-=1;
          $(".dc h2").text("DC : "+dc_point);
          $(".count").text(count);
        }
        else if (marvel_dice==dc_dice) {
          $(".game-header h3").text("Battle is Draw");
          $(".marvel img").addClass("victory");
          $(".dc img").addClass("victory");
          marvel_point+=1;
          dc_point+=1;
          count-=1;
          $(".count").text(count);
        }
        else{
          $(".game-header h3").text("Battle Begin");
        }


        if(count<0){

          if(marvel_point>dc_point){
            $(".game-header h3").text("Marvel Wins");
            count= 10;
            $(".count").text(count);
            marvel_point=0;
            dc_point=0;
            $(".dc h2").text("DC : "+dc_point);
            $(".marvel h2").text("Marvel : "+marvel_point);
          }
          else if(marvel_point<dc_point){
            $(".game-header h3").text("DC Wins");
            count= 10;
            $(".count").text(count);
            marvel_point=0;
            dc_point=0;
            $(".dc h2").text("DC : "+dc_point);
            $(".marvel h2").text("Marvel : "+marvel_point);
          }
          else{
            $(".game-header h3").text("Game Tie");
            count= 10;
            $(".count").text(count);
            marvel_point=0;
            dc_point=0;
            $(".dc h2").text("DC : "+dc_point);
            $(".marvel h2").text("Marvel : "+marvel_point);
          }          
          
          
        }

        


  });
  




});
