// Utility Variables
var $targetWord = document.getElementById("targetWord")





// Game Object Base Code
var game = {
    bank: ["word", "other", "test", "new"],
    chosenWord: "NaN",
    hangReference: [],
    displayWord: "NaN",
    attemptCount: 0,
    failedAttempts: [], 
    
    getWord: function () { 
        this.chosenWord = this.bank[Math.floor(Math.random() * this.bank.length)];
        let pos = this.bank.indexOf(this.chosenWord)
        // this.bank.splice(pos, 1)
    },
    
    convert: function () {
        this.hangReference = this.chosenWord.split("")
        
        for (i = 0; i < this.hangReference.length; i++) {
            this.hangReference[i] = "_"
            console.log(this.hangReference)    
        }
        this.workingWord = this.hangReference.join(" ")
    },
    setWord: function (str) {
        $targetWord.innerHTML = str;
    },
    
    keyCheck: function (userKey) {
        var progressWord =  this.hangReference

        for (i=0; i < this.hangReference.length; i++){
            let charPos = this.hangReference[i].indexOf(userKey)
            // change html to display userKey press

            if ( charPos === -1){
                //Attempts + 1 and add userKey to array of attempts
                this.attemptCount++
                this.failedAttempts.push(userKey)
            } else {
                //add to progressWord
                progressWord[charPos] = userKey
                //convert progressWord
                this.displayWord = progressWord.join()

            }
        }
    },

    start: function () {
        document.onkeyup() = function(event) {
            var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",]
            var userKey = event.key
            if (alphabet.indexOf(userKey) === -1){
                alert("I'm sorry, your input was not recognized. Please only use alphebetical keys.")
            } else {
            this.keyCheck(userKey)
            }
        }
    },

    
}



game.getWord()
game.convert()
game.setWord(game.displayWord)




