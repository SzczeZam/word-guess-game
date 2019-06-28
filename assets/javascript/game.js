// Utility Variables
var $targetWord = document.getElementById("targetWord")
var $fails = document.getElementById("fails")
var $wins = document.getElementById("wins")
var $losses = document.getElementById("losses")
var $attemptsLeft = document.getElementById("attemptsLeft")


// Game Object Base Code
var game = {
    bank: ["coffee","latte","espresso","macchiato","mocha",
    "cappiccino","drip","americano","coldbrew","pourover",
    "steam","dairy","siphon","honduras","ethiopia","colombia",
    "sumatra","soy","macadamia",],

    chosenWord: "NaN",
    hangReference: [],
    workingWord: "NaN",

    wins : 0,
    losses: 0,
    attemptsLeft: 10,
    failedAttempts: [], 
    
    getWord: function () { 
        this.chosenWord = this.bank[Math.floor(Math.random() * this.bank.length)];
        let pos = this.bank.indexOf(this.chosenWord)
        this.bank.splice(pos, 1)
        // console.log(this.chosenWord)
    },
    
    convert: function () {
        this.hangReference = this.chosenWord.split("")
        for (i = 0; i < this.hangReference.length; i++) {
            this.hangReference[i] = "_"
            // console.log(this.hangReference)    
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
        let progressWord = this.hangReference
        console.log("keyCheck started")
       if (this.chosenWord.indexOf(userKey) >= 0){
        console.log("it's there")
            for (var i = 0; i < this.workingWord.length; i++) {
                let tempPos = this.chosenWord.indexOf(userKey, [i])
                // console.log(tempPos)

                if (tempPos === -1) {
                    
                } else{
                progressWord[tempPos] = userKey
                this.workingWord = progressWord.join(" ")
                this.setWord(this.workingWord)


                    
                }
            }  
        } else {
            console.log("it's not there")
            // console.log(game.attempsLeft)

            this.failedAttempts.push(userKey)
            $fails.textContent = this.failedAttempts
            game.attemptsLeft-=1;
            $attemptsLeft.textContent = game.attemptsLeft
            
            console.log(game.attemptsLeft)
            if (game.attemptsLeft <= 0) {
                this.failure()
            }
        }

    },

    start: function () {
        document.onkeyup = function(event) {
            var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",]
            var userKey = event.key.toLowerCase()
            $attemptsLeft.textContent = this.attempsLeft
            if (alphabet.indexOf(userKey) === -1){
                alert("I'm sorry, your input was not recognized. Please only use alphebetical keys.")
            } else {
            console.log(userKey)
            game.keyCheck(userKey)
            game.successCheck()

            }
        }
    },

    successCheck: function () {
        if (this.workingWord.indexOf("_") === -1) {
            this.reset()
            alert("You Won!")
            this.wins++
            $wins.textContent = this.wins
        }    
        
    },

    failure: function () {
        alert("You Failed")
        this.losses++
        this.reset()
    },

    reset: function () {
        this.attemptLeft = 10
    
        this.failedAttempts = []
        this.getWord()
        this.convert()
        this.setWord(game.workingWord)
        this.start()

    },

    
}





game.reset()




