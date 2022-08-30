class Hangman {
   constructor(word, numGuesses) {
      this.word = word.toLowerCase().split("");
      this.numGuesses = numGuesses;
      this.guessed = [];
      this.status = "playing";
   }
   makeGuess(letter) {
      if (this.status !== "playing") return;
      letter = letter.toLowerCase();
      if (!this.guessed.includes(letter)) {
         // if unique guess, add to guessed array
         this.guessed.push(letter);
         if (!this.word.includes(letter)) {
            // nested if statement
            this.numGuesses--; // if unique guess AND if incorrect guess
         }
      }
      this.calculateStatus();
   }
   get puzzle(){ // of getters and setters chapter
      let puzzle = "";
      this.word.forEach((letter) => {
         if (this.guessed.includes(letter) || letter === " ") {
            puzzle += letter;
         } else {
            puzzle += "*";
         }
      });
      return puzzle;
   }
   calculateStatus() {
      let correct = this.word.every((letter) => {
         return this.guessed.includes(letter) || letter === " ";
      });
   
      if (this.numGuesses <= 0) {
         return (this.status = "failed!");
      }
   
      if (correct) {
         return (this.status = "finished!");
      }
   }
   get statusMessage() { // of getters and setters chapter
      if (this.status === "playing") {
         return `Guesses left: ${this.numGuesses}`;
      } else if (this.status === "failed!") {
         return `Nice try! The word was "${this.word.join("")}."`;
      } else if (this.status === "finished!") {
         return `Great work! You guessed the word!`;
      }
   }
}


export { Hangman as default }





