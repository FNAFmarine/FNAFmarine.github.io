$(document).ready(function()
{
		var music = $("<audio>").appendTo("body");
	music[0].src = "music/menu_music.mp3";
	music[0].play();
var menu = $("<div/>").attr("id", "map").appendTo("body");
var back = $("<div/>").appendTo("body");
var logo = $("<img/>").attr("src", "images/logo.png");
menu.append(logo);
menu.append(sound);
menu.append(back);
logo.css({
"position":"absolute",
"top":"50px",
"left":"500px"
});
back.css({
"width":"32px",
"height":"32px",
"position":"absolute",
"right":"30px"
});
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

	var change = $("#button");
	var author = $("#author");

	change.click(changeView);
	author.click(authorF);

	function authorF()
	{
		location="https://www.facebook.com/profile.php?id=100006477532145&ref=bookmarks"
	}
});