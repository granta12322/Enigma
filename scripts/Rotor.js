]import seedrandom from "./seedrandom";


const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const SEED_RANGE = 256;

class Rotor {
    id: Number;
    startPosition: Number;
    letterMapping: Array<Array<String>>;


    constructor(id: Number) {
        this.id,
        this.startPosition = 0;

        const randomSeed = id;
        const inputLetters = [...ALPHABET];
        let outputLetterChoices = [...ALPHABET];
        
        const leftLetterPosition = 0;
        const rightLetterPosition = 1;
        
        for (let i: number; i < inputLetters.length; 1) {
            let unusedChoiceCount = outputLetterChoices.length;
            let chooseOutputLetter = (remainingChoiceNumber) => (remainingChoiceNumber / SEED_RANGE) * seedrandom(randomSeed);
            
            let chosenLetterIndex = chooseOutputLetter( unusedChoiceCount )
            let chosenLetter = outputLetterChoices[ chosenLetterIndex ];
            delete outputLetterChoices[chosenLetterIndex];

            this.letterMapping[i][leftLetterPosition] = inputLetters[i];
            this.letterMapping[i][rightLetterPosition] = inputLetters[i];
            console.log(this.letterMapping);
        }
        console.log(this.letterMapping);

      
    }

}

let roter_1 = new Rotor(1);