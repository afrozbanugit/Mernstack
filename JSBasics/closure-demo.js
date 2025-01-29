/* function counter(){
    var count =0;
    
    console.log("Initial count is "+count);
    var getCount = function(){
        count++;
        return count;
    }
    return getCount;
}

var result = counter();
result();
result();
console.log(result()); */

function scoreboard(){
var score =0;
   var i = function increaseScore(points){
        score += points;
    }
    var d =function decreaseScore(points){
        score -= points;
    }
   var g = function getScore(){
        return score;
    }
    return {i,d,g};
}

var game = scoreboard();
console.log(game);
game.i(5)
game.d(2);
console.log(game.g()); 
