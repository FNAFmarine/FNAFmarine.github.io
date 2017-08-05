console.log("If You Want to see all information about your player press 'I' in keyboard (Dont type in console)");
console.log("If You Want to Buy Lives press 'L' in keyboard (Dont type in console)");
function Player()
{
	this.name = "Mario";
	this.score = 0;
	this.lives = 3;
	
	this.Attack = function(en)
	{
		en.live -= 1;
		if(en.live == 0)
		{
			console.log("Enemy died");
			this.score += 40;	
			en.status = "Dead";
		}
		else if(en.live < 0)
		{
			console.log("You cant attack enemy because enemy is dead");
			en.live = 0;
		}
	}


$("html").keydown(rev);
function rev(e)
{
	if(e.which==76)
		re();
	if(e.which==73)
		info();
}

function re()
{
		var reviv = confirm("Do you want to buy 1 live paying 100 from your score?")
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
				console.log("You Dont have enough score");
			}
	}
	else
	{
		alert("Good Bye");
	}


}

function info()
{
	console.log("Information");
	console.log("Name: " + mario.name);
	console.log("Score: " + mario.score);
	console.log("Lives: " + mario.lives);
}

}

function Enemy()
{
	this.live = 1;
}

var en1 = new Enemy();
var en2 = new Enemy();
var en3 = new Enemy();


var mario = new Player();