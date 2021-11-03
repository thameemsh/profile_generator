const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer2) => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer3) => {
      rl.question("What's your favourite thing to eat for that meal?", (answer4) => {
        rl.question("Which sport is your absolute favourite?", (answer5) => {
          rl.question("What's an activity you like doing?", (answer6) => {
            rl.question("What do you listen to while doing that?", (answer7) => {
              let result = answer1 +"\n"+ answer2 +"\n"+ answer3 +"\n"+ answer4 +"\n"+ answer5 +"\n"+ answer6 +"\n"+ answer7;
              console.log(`Thank you for your valuable feedback: ${result}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

