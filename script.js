const audio = new Audio("assets/golf-shot.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
    //Prompt for name
    let name = prompt('Welcome to GC mini golf! What is your name?');
    if (name === null) {
        console.log("cancelled");
    } else {
        let holes = prompt(`Hi, ${name}! Would you like to play 3 or 6 holes today?`);
        if (holes === null) {
            console.log("cancelled");
        } 


//Game for 3 holes
        else if (holes === "3") {
            //hole 1
            let hole1 = Number( prompt("How many putts for hole 1? (par:3)") );
            if (hole1 === 1) {
                console.log("(Hole 1) Wowza! Thats a hole in one!");
            } else if (hole1 === 2) {
                console.log("(Hole 1) You got a Birdie!");
            } else if (hole1 === 3) {
                console.log("(Hole 1) You were on Par!");
            } else if (hole1 > 3 ) {
                console.log(`(Hole 1) You were ${hole1 - 3} over par.`);
            }
            //hole 2
            let hole2 = Number( prompt("How many putts for hole 2? (par:3)") );
            if (hole2 === 1) {
                console.log("(Hole 2) Wowza! Thats a hole in one!");
            } else if (hole2 === 2) {
                console.log("(Hole 2) You got a Birdie!");
            } else if (hole2 === 3) {
                console.log("(Hole 2) You were on Par!");
            } else if (hole2 > 3 ) {
                console.log(`(Hole 2) You were ${hole2 - 3} over par.`);
            }
            //hole 3
            let hole3 = Number( prompt("How many putts for hole 3? (par:3)") );
            if (hole3 === 1) {
                console.log("(Hole 3) Wowza! Thats a hole in one!");
            } else if (hole3 === 2) {
                console.log("(Hole 3) You got a Birdie!");
            } else if (hole3 === 3) {
                console.log("(Hole 3) You were on Par!");
            } else if (hole3 > 3 ) {
                console.log(`(Hole 3) You were ${hole3 - 3} over par.`);
            }
            //End Game (3)
            let total = hole1+hole2+hole3;
            if (total === 3) {
                console.log(`Holy toledo, ${name}, you played a perfect game! Congrats!`);
            } else if (total < 9 ) {
                console.log(`Great job ${name}! Your total par was: -${9-total}`);
            } else if (total === 9) {
                console.log(`Good game ${name}! Your total par was: 0`);
            } else if (total > 9) {
                console.log(`Nice try, ${name}... Your total par was: +${total-9}`);
            }


//Game for 6 holes
        } else if (holes === "6") {
            //hole 1
            let hole1 = Number( prompt("How many putts for hole 1? (par:3)") );
            if (hole1 === 1) {
                console.log("(Hole 1) Wowza! Thats a hole in one!");
            } else if (hole1 === 2) {
                console.log("(Hole 1) You got a Birdie!");
            } else if (hole1 === 3) {
                console.log("(Hole 1) You were on Par!");
            } else if (hole1 > 3 ) {
                console.log(`(Hole 1) You were ${hole1 - 3} over par.`);
            }
            //hole 2
            let hole2 = Number( prompt("How many putts for hole 2? (par:3)") );
            if (hole2 === 1) {
                console.log("(Hole 2) Wowza! Thats a hole in one!");
            } else if (hole2 === 2) {
                console.log("(Hole 2) You got a Birdie!");
            } else if (hole2 === 3) {
                console.log("(Hole 2) You were on Par!");
            } else if (hole2 > 3 ) {
                console.log(`(Hole 2) You were ${hole2 - 3} over par.`);
            }
            //hole 3
            let hole3 = Number( prompt("How many putts for hole 3? (par:3)") );
            if (hole3 === 1) {
                console.log("(Hole 3) Wowza! Thats a hole in one!");
            } else if (hole3 === 2) {
                console.log("(Hole 3) You got a Birdie!");
            } else if (hole3 === 3) {
                console.log("(Hole 3) You were on Par!");
            } else if (hole3 > 3 ) {
                console.log(`(Hole 3) You were ${hole3 - 3} over par.`);
            }
            //hole 4
            let hole4 = Number( prompt("How many putts for hole 4? (par:3)") );
            if (hole4 === 1) {
                console.log("(Hole 4) Wowza! Thats a hole in one!");
            } else if (hole4 === 2) {
                console.log("(Hole 4) You got a Birdie!");
            } else if (hole4 === 3) {
                console.log("(Hole 4) You were on Par!");
            } else if (hole4 > 3 ) {
                console.log(`(Hole 4) You were ${hole4 - 3} over par.`);
            }
            //hole 5
            let hole5 = Number( prompt("How many putts for hole 5? (par:3)") );
            if (hole5 === 1) {
                console.log("(Hole 5) Wowza! Thats a hole in one!");
            } else if (hole5 === 2) {
                console.log("(Hole 5) You got a Birdie!");
            } else if (hole5 === 3) {
                console.log("(Hole 5) You were on Par!");
            } else if (hole5 > 3 ) {
                console.log(`(Hole 5) You were ${hole5 - 3} over par.`);
            }
            //hole 6
            let hole6 = Number( prompt("How many putts for hole 6? (par:3)") );
            if (hole6 === 1) {
                console.log("(Hole 6) Wowza! Thats a hole in one!");
            } else if (hole6 === 2) {
                console.log("(Hole 6) You got a Birdie!");
            } else if (hole6 === 3) {
                console.log("(Hole 6) You were on Par!");
            } else if (hole6 > 3 ) {
                console.log(`(Hole 6) You were ${hole6 - 3} over par.`);
            }
            //End Game (3)
            let total = hole1+hole2+hole3+hole4+hole5+hole6;
            if (total === 6) {
                console.log(`Holy toledo, ${name}, you played a perfect game! Congrats!`);
            } else if (total < 18 ) {
                console.log(`Great job ${name}! Your total par was: -${18-total}`);
            } else if (total === 18) {
                console.log(`Good game ${name}! Your total par was: 0`);
            } else if (total > 18) {
                console.log(`Nice try, ${name}... Your total par was: +${total-18}`);
            }
        }
    }
  });
});
