// Utility Variables
var $targetWord = document.getElementById("targetWord")





// Game Object Base Code
var game = {
    bank: [ "tttt"],
    chosenWord: "NaN",
    hangReference: [],
    workingWord: "NaN",

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
    
    // keyCheck: function (userKey) {
    //     let progressWord =  this.hangReference
    //     this.hangAnswer = this.chosenWord.split(" ")
        
    //     for (i=0; i < this.hangReference.length; i++){
    //         let charPos = this.hangAnswer[i].indexOf(userKey)
    //         // change html to display userKey press
    //         console.log(charPos)
    //         if ( charPos === -1){
    //             //Attempts + 1 and add userKey to array of attempts
    //             console.log("that letter isn't in this word")
    //             this.attemptCount++
    //             this.failedAttempts.push(userKey)
    //         } else {
    //             console.log("that letter is in this word and is at", charPos)
    //             //add to progressWord
    //             progressWord[charPos] = userKey
    //             //convert progressWord
    //             this.workingWord = progressWord.join(" ")
    //             this.setWord(this.workingWord)
    //         }
    //     }
    // },

    keyCheck: function (userKey) {
        for (var i = 0; i < this.hangReference; i++) {
            let tempPos = this.chosenWord[i].indexOf(userKey)

            if (tempPos >= 0) {
                this.workingWord[i] = userKey
                this.setWord(this.workingWord)

            } else {

            }
        }


    },

    start: function () {
        document.onkeyup = function(event) {
            var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",]
            var userKey = event.key
            if (alphabet.indexOf(userKey) === -1){
                alert("I'm sorry, your input was not recognized. Please only use alphebetical keys.")
            } else {
            console.log(userKey)
            game.keyCheck(userKey)
            }
        }
    },

    
}



game.getWord()
game.convert()
game.setWord(game.hangReference)
game.start()




