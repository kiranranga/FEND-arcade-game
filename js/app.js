// Enemies our player must avoid
var i=0;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x= x;
    this.y= y;
    this.speed= speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222);
    };
    //discription to update lifes
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
                $('.life img').last().remove();
        if($('.life').children().length===1){
            var a=confirm("Game Over...! Play Again");
            if(a==true){
                location.reload();
            } else{
                i=0;
                document.getElementById("myspan").innerHTML= i;
                
                $('.life').last().append('<img src="images/Heart.png">');
                $('.life').last().append('<img src="images/Heart.png">');
                $('.life').last().append('<img src="images/Heart.png">');
            }
        } else
            ""
        player.x = 200;
        player.y = 400 ;
    };
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
 var Player = function(x,y,speed) {
      this.x= x;
      this.y= y;
      this.speed= speed;
      this.sprite = 'images/char-boy.png';
}
Player.prototype.update=function(){
    if(this.x<0){
        this.x=0;
    }
    if(this.x>400 ){
        this.x=400;
    }
    if(this.y<0){
        this.y=380;
        this.x=200;
        document.getElementById("myspan").innerHTML= i;
        i++;
    }
    if(this.y>400){
        this.y=380;
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput=function(eventHappend){
    switch(eventHappend) {
            case "left":
            this.x-=100;
            break;
            case "right":
            this.x+=100;
            break;
            case "up":
            this.y-=80;
            break;
            case "down":
            this.y+=80;
            break;
        }

    }
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyposition=[60,140,220];
enemyposition.map((ep)=>{
    enemy =new Enemy(0,ep,50);
    allEnemies.push(enemy);    
    return allEnemies;
});
// Place the player object in a variable called player
player= new Player(200,380,30);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
