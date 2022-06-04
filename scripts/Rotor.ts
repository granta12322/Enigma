import seedrandom from "./seedrandom";


const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LETTER_COUNT = ALPHABET.length;
const SEED_RANGE = 256;

class Rotor {
    id: number;
    position: number;
    letterMapping: Array<Array<String>>;


    constructor(id: number) {
        this.id,
        this.position;

        const randomSeed = id;
        const inputLetters = [...ALPHABET];
        let outputLetterChoices = [...ALPHABET];
        
        const leftLetterPosition = 0;
        const rightLetterPosition = 1;
        
        for (let i: number; i < inputLetters.length; i++) {
            let inputLetter = inputLetters[i];
            let unusedChoiceCount = outputLetterChoices.length;
            let chooseOutputLetter = (remainingChoiceNumber) => (remainingChoiceNumber / SEED_RANGE) * seedrandom(randomSeed);
            
            let chosenLetterIndex = chooseOutputLetter( unusedChoiceCount )
            let chosenOutputLetter = outputLetterChoices[ chosenLetterIndex ];
            delete outputLetterChoices[chosenLetterIndex];

            this.letterMapping[leftLetterPosition][i] = chosenOutputLetter;
            this.letterMapping[rightLetterPosition][i] = inputLetter;
            console.log(this.letterMapping);
        }
        console.log(this.letterMapping);
    };

    stepRotor() { 
        this.position = (this.position + 1) % LETTER_COUNT  // !!! Possible off by 1 error here.
    };

}

let roter_1 = new Rotor(1);