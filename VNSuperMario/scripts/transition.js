function changeView()
{
	$("#map").empty();
	//=====[Variables]=====
    var main = $("<div/>").attr("id", "main").appendTo("body");
	var level = $("<div/>").attr("id", "map").appendTo("#main");
    var but = $("<div/>").attr("id", "but");
	var bricks = $("<div/>").attr("id", "bricks");
	var mush1 = $("<div/>").attr("id", "mush1");
	var mush2 = $("<div/>").attr("id", "mush2");
	var mush3 = $("<div/>").attr("id", "mush3");
    var mush4 = $("<div/>").attr("id", "mush4");
    var mush5 = $("<div/>").attr("id", "mush5");
    var mush6 = $("<div/>").attr("id", "mush6");
    var mush7 = $("<div/>").attr("id", "mush7");
    var mush8 = $("<div/>").attr("id", "mush8");
    var mush9 = $("<div/>").attr("id", "mush9");
    var mush10 = $("<div/>").attr("id", "mush10");
    var mush11 = $("<div/>").attr("id", "mush11");
    var mush12 = $("<div/>").attr("id", "mush12");
    var mush13 = $("<div/>").attr("id", "mush13");
    var mush14 = $("<div/>").attr("id", "mush14");
    var mush15 = $("<div/>").attr("id", "mush15");
    var mush16 = $("<div/>").attr("id", "mush16");
    var mush17 = $("<div/>").attr("id", "mush17");
    var victory = $("<div/>").attr("id", "victory");
    var floor = $("<div/>").attr("id", "floor");
	var dynamic = $("<div/>").attr("id", "dynamic");
    var death = $("<div/>").attr("id", "death");
    var enemy1 = $("<div/>").attr("id", "enemy1");
	var left = $("<div/>").attr("id", "left");
    var right = $("<div/>").attr("id", "right");
    var top = $("<div/>").attr("id", "top");
    //=====[/Variables]=====

    //=====[Coins]======
    var coin1 = $("<div/>").attr("id", "coin1");
    var coin2 = $("<div/>").attr("id", "coin2");
    var coin3 = $("<div/>").attr("id", "coin3"); 
    var coin4 = $("<div/>").attr("id", "coin4");
    var coin5 = $("<div/>").attr("id", "coin5");
    var coin6 = $("<div/>").attr("id", "coin6"); 
    //=====[/Coins]=====
	
	//=====[Appends]=====
	level.append(bricks);
	level.append(mush1);
	level.append(mush2);
	level.append(mush3);
    level.append(mush4);
    level.append(mush5);
    level.append(mush6);
    level.append(mush7);
    level.append(mush8);
    level.append(mush9);
    level.append(mush10);
    level.append(mush11);
    level.append(mush12);
    level.append(mush13);
    level.append(mush14);
    level.append(mush15);
    level.append(mush16);
    level.append(mush17);
    level.append(victory);
    level.append(floor);
	level.append(dynamic);
    level.append(death);
    level.append(coin1);
    level.append(coin2);
    level.append(coin3);
    level.append(coin4);
    level.append(coin5);
    level.append(coin6);
    level.append(but);
    level.append(left);
    level.append(right);
    level.append(enemy1);
    level.append(top);
	//=====[/Appends]=====

	//=====[CSS]=====

    but.css({
"position":"absolute",
"background-color":"red",
"width":"50px",
"height":"3px",
"top":"190px",
"left":"2070px"
    });

    coin1.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"137px",
"left":"675px"
    });

    coin2.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"137px",
"left":"695px"
    });

    coin3.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"137px",
"left":"715px"
    });

    coin4.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"169px",
"left":"1970px"
    });

    coin5.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"169px",
"left":"1990px"
    });

    coin6.css({
        "position":"absolute",
        "width":"24px",
        "height":"24px",
        "background-image":"url(images/coin.png)",
        "background-size":"24px 24px",
"top":"169px",
"left":"2010px"
    });

	dynamic.css({
	"background-image":"url(images/mario.png)",
	"width":"30px",
	"height":"30px",
"position":"absolute",
"left":"100px",
"top":"360px",
"background-size":"30px 30px"
	});

	level.css({
"background-image":"url(images/level.png)",
"position":"absolute",
"width":"4216px",
"height":"480px",
"left":"0px",
"top":"185px",
"background-size":"4216px 480px",
	});	

    main.css({
"position":"relative",
"width":"1200px",
"height":"900px",
"overflow":"hidden"
    });

bricks.css({
"position":"absolute",
"width":"415px",
"height":"66px",
"top":"416px"
});

mush1.css({
"position":"absolute",
"width":"106px",
"height":"30px",
"top":"386px",
"left":"464px"
});

mush2.css({
"position":"absolute",
"width":"200px",
"height":"30px",
"top":"290px",
"left":"625px"
});

mush3.css({
"position":"absolute",
"width":"126px",
"height":"30px",
"top":"163px",
"left":"675px"
});

mush4.css({
"position":"absolute",
"top":"386px",
"height":"30px",
"left":"828px",
"width":"75px"
});

mush5.css({
"position":"absolute",
"top":"260px",
"height":"30px",
"width":"126",
"left":"907"
});

mush6.css({
"position":"absolute",
"height":"30px",
"width":"190px",
"top":"133px",
"left":"1033px"
});

mush7.css({
"position":"absolute",
"top":"415px",
"left":"1295px",
"height":"30px",
"width":"100px"
});

mush8.css({
"position":"absolute",
"height":"30px",
"top":"415px",
"left":"1526px",
"width":"126px"
});

mush9.css({
"position":"absolute",
"height":"30px",
"width":"100px",
"top":"158px",
"left":"1553px"
});

mush10.css({
"position":"absolute",
"height":"30px",
"width":"126px",
"top":"415px",
"left":"1682px"
});

mush11.css({
"position":"absolute",
"width":"75px",
"height":"30px",
"top":"290px",
"left":"1810px"
});

mush12.css({
"position":"absolute",
"width":"150px",
"height":"30px",
"top":"193px",
"left":"1970px"
});

mush13.css({
"position":"absolute",
"width":"100px",
"height":"30px",
"left":"2536px",
"top":"350px"
});

mush14.css({
"position":"absolute",
"width":"200px",
"height":"30px",
"top":"227px",
"left":"2695px"
});

mush15.css({
"position":"absolute",
"width":"75px",
"top":"415px",
"height":"30px",
"left":"2925px"
});

mush16.css({
"position":"absolute",
"width":"100px",
"height":"30px",
"top":"290px",
"left":"3000px"
});

mush17.css({
"position":"absolute",
"width":"100px",
"height":"30px",
"top":"290px",
"left":"3155px"
});

floor.css({
"position":"absolute",
"width":"420px",
"height":"66px",
"top":"416px",
"left":"3335px"
});

victory.css({
"position":"absolute",
"height":"66px",
"width":"470px",
"top":"416px",
"left":"3755px"
});

death.css({
"position":"absolute",
"top":"482",
"width":"4216px",
"height":"10px"
});

enemy1.css({
"position":"absolute",
"background-image":"url(images/enemy.png)",
"width":"24px",
"height":"24px",
"background-size":"24px 24px",
"top":"390px",
"left":"250px"
});

top.css({
"position":"absolute",
"width":"24px",
"height":"2px",
"background-size":"24px 24px",
"top":"388px",
"left":"250px"
});

left.css({
"position":"absolute",
"width":"24px",
"height":"24px",
"top":"390px",
"left":"176px"
});

right.css({
"position":"absolute",
"width":"24px",
"height":"24px",
"top":"390px",
"left":"324px"
});
//=====[/CSS]=====
    var direction = "left";
    var dynamic = $("#dynamic");
    var wallsss = [$("#death")];
    var coins = [$("#coin1")];
    var coins2 = [$("#coin2")];
    var coins3 = [$("#coin3")];
    var coins4 = [$("#coin4")];
    var coins5 = [$("#coin5")];
    var coins6 = [$("#coin6")];
    var enemy = [$("#enemy1")];
    var victory = [$("#victory")];
    var kick = [$("#top")];
    var leftd = [$("#left")];
    var rightd =[$("#right")];
    var button = [$("#but")];
    var walls = [$("#bricks"), $("#mush1"), $("#mush2"), $("#mush3"), $("#mush4"), $("#mush5"), $("#mush5"), $("#mush6"), $("#mush7"), $("#mush8"), $("#mush9"), $("#mush10"), $("#mush11"), $("#mush12"), $("#mush13"), $("#mush14"), $("#mush15"), $("#mush16"), $("#mush17"), $("#floor")];
    var directions = {};

    var speedX = 4;
    var speedY = 0;
    var speedZ = 1;
    var speedV = 1;

    var gravity = 0.2;
    var jumpState = true;

    var STATIC_HOR_CENTER;
    var STATIC_VER_CENTER;
    var STATIC_KOX_CENTER;

    var WIDTH_DIFFERENCE;
    var HEIGHT_DIFFERENCE;

    var DYNAMIC_HOR_CENTER;
    var DYNAMIC_VER_CENTER;

    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e)
    {
        directions[e.which] = true;
    }

    function stop(e)
    {
        delete directions[e.which];
    }

    function checkCollision()
    {
        for(var i in walls)
        {
        STATIC_HOR_CENTER = walls[i].position().left + walls[i].width()/2;
        STATIC_VER_CENTER = walls[i].position().top;
        STATIC_KOX_CENTER = walls[i].position().top + walls[i].height();

        WIDTH_DIFFERENCE = dynamic.width()/2 + walls[i].width()/2;
        HEIGHT_DIFFERENCE = dynamic.height()/2 + walls[i].height()/2

        DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
        DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();

        if(Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&Math.abs(dynamic.position().top - STATIC_KOX_CENTER) <= 5  )
            {
                if(speedY > 0 ) {
                    speedY = -speedY;
                }   
            }


        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE && 
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5)
        {
            jumpState = false;
            dynamic.css("top", walls[i].position().top - dynamic.height());
            speedY = 7;
            break;
        }
        else
        {
            if(jumpState == false)
            {
                speedY = 0;
                jumpState = true;
            }
        }

    }
}

    function Victory()
    {
        for(var i in victory)
        {
        STATIC_HOR_CENTER = victory[i].position().left + victory[i].width()/2;
        STATIC_VER_CENTER = victory[i].position().top;
        STATIC_KOX_CENTER = victory[i].position().top + victory[i].height();

        WIDTH_DIFFERENCE = dynamic.width()/2 + victory[i].width()/2;
        HEIGHT_DIFFERENCE = dynamic.height()/2 + victory[i].height()/2

        DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
        DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();

        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE && 
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5)
        {
            jumpState = false;
            dynamic.css("top", walls[i].position().top - dynamic.height());
            speedY = 7;
            location="index.html"
            alert("Congratulations :D You Win!\nYour Final Score is: " + mario.score);
            break;
        }

    }
}

    function onButton()
    {
        for(var i in button)
        {
            STATIC_HOR_CENTER = button[i].position().left + button[i].width()/2;
            STATIC_VER_CENTER = button[i].position().top + button[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + button[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + button[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
                console.log("Teleportation");
                dynamic.css({
    "background-image":"url(images/mario.png)",
    "width":"30px",
    "height":"30px",
"position":"absolute",
"left":"2536px",
"top":"320px",
"background-size":"30px 30px"
                }) ;
            }

        }
    }


    function Top()
    {
        for(var i in kick)
        {
        STATIC_HOR_CENTER = kick[i].position().left + kick[i].width()/2;
        STATIC_VER_CENTER = kick[i].position().top;

        WIDTH_DIFFERENCE = dynamic.width()/2 + kick[i].width()/2;
        HEIGHT_DIFFERENCE = dynamic.height()/2 + kick[i].height()/2

        DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
        DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();


        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE && 
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5)
        {
            $("#enemy1").remove();
            mario.score += 20;
        }

    }
    } 

    function checkDead()
    {
        for(var i in wallsss)
        {
            STATIC_HOR_CENTER = wallsss[i].position().left + wallsss[i].width()/2;
            STATIC_VER_CENTER = wallsss[i].position().top;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + wallsss[i].width()/2;
            
        DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
        DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height();
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= 5)
            {
                console.log("You Died!");
                mario.lives -= 1;
               console.log("Lives: " + mario.lives);
                if (mario.lives == 0) {
                        var reviv = confirm("You Died! Do you want to buy 1 live paying 100 from your score?")
    if(reviv)
    {
            if(mario.score > 100 || mario.score == 100)
            {
                mario.score -= 100;
                mario.lives += 1;
                console.log("Thanks For Buying!");
            }
            else
            {
                console.log("Game Over You Dont have enough score");
                var timeout = setTimeout(dead, 3000);
            }
    }

    else
    {
        alert("Game Over");
    var timeout = setTimeout(dead, 3000);
    } 
                }

    dynamic.css({
    "background-image":"url(images/mario.png)",
    "width":"30px",
    "height":"30px",
"position":"absolute",
"left":"100px",
"top":"360px",
"background-size":"30px 30px"
    });

                       level.css({
"background-image":"url(images/level.png)",
"position":"absolute",
"width":"4216px",
"height":"480px",
"left":"0px",
"top":"185px",
"background-size":"4216px 480px",
    });  

            }

        }
    }

function tp()
{
    dynamic.css({
    "background-image":"url(images/mario.png)",
    "width":"30px",
    "height":"30px",
"position":"absolute",
"left":"100px",
"top":"360px",
"background-size":"30px 30px"
    });

enemy1.css({
"position":"absolute",
"background-image":"url(images/enemy.png)",
"width":"24px",
"height":"24px",
"background-size":"24px 24px",
"top":"390px",
"left":"250px"
});

                    level.css({
"background-image":"url(images/level.png)",
"position":"absolute",
"width":"4216px",
"height":"480px",
"left":"0px",
"top":"185px",
"background-size":"4216px 480px",
    }); 

}

       function enemyhit()
    {
        for(var i in enemy)
        {
            STATIC_HOR_CENTER = enemy[i].position().left + enemy[i].width()/2;
            STATIC_VER_CENTER = enemy[i].position().top + enemy[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + enemy[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + enemy[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
                mario.lives -= 1;
                console.log("You Died");
                console.log("Lives: " + mario.lives);
                mario.score -= 20;
                tp();
                            if (mario.lives == 0) {
                        var reviv = confirm("You Died! Do you want to buy 1 live paying 100 from your score?")
    if(reviv)
    {
            if(mario.score > 100 || mario.score == 100)
            {
                mario.score -= 100;
                mario.lives += 1;
                console.log("Thanks For Buying!");
            }
            else
            {
                console.log("Game Over You Dont have enough score");
                var timeout = setTimeout(dead, 3000);
            }
    }

    else
    {
        alert("Game Over");
    var timeout = setTimeout(dead, 3000);
    } 
                }
            }

            }

        }

   function checkCoin()
    {
        for(var i in coins)
        {
            STATIC_HOR_CENTER = coins[i].position().left + coins[i].width()/2;
            STATIC_VER_CENTER = coins[i].position().top + coins[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin1").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        }

   function Left()
    {
        for(var i in leftd)
        {
            STATIC_HOR_CENTER = leftd[i].position().left + leftd[i].width()/2;
            STATIC_VER_CENTER = leftd[i].position().top + leftd[i].height()/2;;
            
            WIDTH_DIFFERENCE = enemy1.width()/2 + leftd[i].width()/2;
            HEIGHT_DIFFERENCE = enemy1.height()/2 + leftd[i].height()/2;
            
            DYNAMIC_HOR_CENTER = enemy1.position().left + enemy1.width()/2;
            DYNAMIC_VER_CENTER = enemy1.position().top + enemy1.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
                direction = "right";
            }

            }

        }

       function Right()
    {
        for(var i in rightd)
        {
            STATIC_HOR_CENTER = rightd[i].position().left + rightd[i].width()/2;
            STATIC_VER_CENTER = rightd[i].position().top + rightd[i].height()/2;;
            
            WIDTH_DIFFERENCE = enemy1.width()/2 + rightd[i].width()/2;
            HEIGHT_DIFFERENCE = enemy1.height()/2 + rightd[i].height()/2;
            
            DYNAMIC_HOR_CENTER = enemy1.position().left + enemy1.width()/2;
            DYNAMIC_VER_CENTER = enemy1.position().top + enemy1.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
                direction = "left";
            }

            }

        }    

    function enemymove()
    {
        if(direction == "left"){
            top.css("left", (top.position().left - speedV) + "px");
            enemy1.css("left", (enemy1.position().left - speedV) + "px");
        }
        else if(direction == "right")
        {
            top.css("left", (top.position().left + speedZ) + "px");              
            enemy1.css("left", (enemy1.position().left + speedZ) + "px");  
        }
    }

   function checkCoin2()
    {
        for(var i in coins2)
        {
            STATIC_HOR_CENTER = coins2[i].position().left + coins2[i].width()/2;
            STATIC_VER_CENTER = coins2[i].position().top + coins2[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins2[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins2[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin2").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        }


   function checkCoin3()
    {
        for(var i in coins3)
        {
            STATIC_HOR_CENTER = coins3[i].position().left + coins3[i].width()/2;
            STATIC_VER_CENTER = coins3[i].position().top + coins3[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins3[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins3[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin3").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        }

   function checkCoin4()
    {
        for(var i in coins4)
        {
            STATIC_HOR_CENTER = coins4[i].position().left + coins4[i].width()/2;
            STATIC_VER_CENTER = coins4[i].position().top + coins4[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins4[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins4[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin4").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        }        

   function checkCoin5()
    {
        for(var i in coins5)
        {
            STATIC_HOR_CENTER = coins5[i].position().left + coins5[i].width()/2;
            STATIC_VER_CENTER = coins5[i].position().top + coins5[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins5[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins5[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin5").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        }

          function checkCoin6()
    {
        for(var i in coins6)
        {
            STATIC_HOR_CENTER = coins6[i].position().left + coins6[i].width()/2;
            STATIC_VER_CENTER = coins6[i].position().top + coins6[i].height()/2;;
            
            WIDTH_DIFFERENCE = dynamic.width()/2 + coins6[i].width()/2;
            HEIGHT_DIFFERENCE = dynamic.height()/2 + coins6[i].height()/2;
            
            DYNAMIC_HOR_CENTER = dynamic.position().left + dynamic.width()/2;
            DYNAMIC_VER_CENTER = dynamic.position().top + dynamic.height()/2;
        
        if( Math.abs(DYNAMIC_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
            Math.abs(DYNAMIC_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE)
            {
             $("#coin6").remove();  
                mario.score += 40;
                console.log("Score: " + mario.score);
            }

            }

        } 

function dead()
{
    location="index.html"
}
    function move()
    {

        for(var i in directions)
        {
            //console.log(i);

            if(dynamic.position().left > 0 && i==37)
            {
                dynamic.css("left", (dynamic.position().left - speedX) + "px");
                level.css("left", (level.position().left + speedX) + "px");
            }

            if(i==39)
            {
                dynamic.css("left", (dynamic.position().left + speedX) + "px");
                level.css("left", (level.position().left - speedX) + "px");
            }

            if(i == 38 && jumpState == false)
            {
                jumpState = true;
                dynamic.css("top", dynamic.position().top - 6);
            }
        }

        checkCollision();
        checkDead();
        checkCoin();
        checkCoin2();
        checkCoin3();
        checkCoin4();
        checkCoin5();
        Left();
        Right();
        Top();
        enemymove();
        checkCoin6();
        enemyhit();
        jump();
        Victory();
        onButton();
    }

    var interval = setInterval(move, 20);

    function jump()
    {
        if(jumpState)
        {
            if(speedY > -9)
            {
                speedY -= gravity;
            }
            dynamic.css("top", dynamic.position().top - speedY);
        }
    }
}