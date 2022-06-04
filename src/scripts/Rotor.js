import seedrandom from "seedrandom";


const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LETTER_COUNT = ALPHABET.length;
const SEED_RANGE = 256;

class Rotor {
    id;
    position;
    letterMapping;

    
    constructor(id) {
        this.id,
        this.position;
        this.letterMapping;

        const randomSeed = id;
        const inputLetters = [...ALPHABET];
        let outputLetterChoices = [...ALPHABET];


        
        const leftLetterPosition = 0;
        const rightLetterPosition = 1;
        
        for (let i = 0; i < inputLetters.length; i++) {
            let inputLetter = inputLetters[i];
            let unusedChoiceCount = outputLetterChoices.length;
            let randomChoice = seedrandom(randomSeed)["int32"]
            console.log(randomChoice)
            let chooseOutputLetter = (remainingChoiceNumber) => (remainingChoiceNumber / SEED_RANGE) * randomChoice;
            
            let chosenLetterIndex = chooseOutputLetter( unusedChoiceCount )
            let chosenOutputLetter = outputLetterChoices[ chosenLetterIndex ];
            delete outputLetterChoices[chosenLetterIndex];

            let letterIO = [inputLetter, chosenOutputLetter]
            console.log(letterIO)
            console.log(chosenLetterIndex)
            this.letterMapping.push(letterIO)

            console.log(this.letterMapping);
        }
        console.log(this.letterMapping);
    };

    stepRotor() { 
        this.position = (this.position + 1) % LETTER_COUNT  // !!! Possible off by 1 error here.
    };

}

let roter_1 = new Rotor(1);