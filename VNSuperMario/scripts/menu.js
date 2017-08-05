$(document).ready(function()
{
	//=====[Variables]=====
	var music = $("<audio>").appendTo("body");
	music[0].src = "sound/01-super-mario-bros(1).mp3";
	music[0].play();
	var back = $("<div/>").appendTo("body");
	var map = $("<div/>").attr("id", "map").appendTo("body");
	var background = $("<div/>").attr("id", "back");
	var logo = $("<img/>").attr("src", "images/Super-Mario-Bros1.jpg");
	var castle = $("<img/>").attr("src", "images/SMBCastle.PNG");
	var one = $("<h1/>").attr("id", "firstplayer");
	var copy = $("<h1/>");
	var top = $("<h1/>");
	//=====[/Variables]=====

	//=====[Appends]=====
	background.append(back);
	map.append(background);
	background.append(castle);
	background.append(top);
	background.append(copy);
	background.append(logo);
	background.append(one);
	//=====[/Appends]=====

	//=====[Texts]=====
	top.text("TOP- " + mario.score);
	one.text("START GAME");
	copy.text("1985 Nintendo");
	//=====[/Texts]=====

	//=====[CSS]=====
back.css({
"width":"32px",
"height":"32px",
"position":"absolute",
"right":"30px"
});

	one.css({
"color":"antiquewhite",
"position":"absolute",
"top":"180px",
"left":"350px"
	});

	background.css({
"background-image":"url(images/background.png)",
"position":"absolute",
"width":"1000px",
"height":"385px",
"left":"400px",
"top":"200px"
	});

	logo.css({
"position":"absolute",
"left":"300px",
	});

	copy.css({
"color":"antiquewhite",
"position":"absolute",
"top":"110px",
"left":"450px"
	});

	top.css({
"color":"antiquewhite",
"position":"absolute",
"left":"80px"
	});

	castle.css({
"position":"absolute",
"top":"150px"
	});
	//=====[/CSS]=====
var sound = $("<img>").attr("id","but").attr("src","images/ka.jpg").appendTo(back);

	sound.click(function(){
		if($(this).attr("src") == "images/ka.jpg"){
			music[0].pause();
			$(this).attr("src","images/chka.jpg").attr("id","but2");
		}
		else{
			music[0].play();
			$(this).attr("src","images/ka.jpg").attr("id","but");
		}
	});

	var change = $("#firstplayer");

	change.click(changeView);

});