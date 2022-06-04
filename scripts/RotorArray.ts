import Rotor from './Rotor';

const leftLetterPosition = 0;
const rightLetterPosition = 1;
class RotorArray {
    id: String;
    rotors: Array<Rotor>;
    rotorStartPositions: Array<number>;

    

    constructor(rotors: Array<Rotor>, rotorStartPositions) {
        let buildId = (rotorArray) => rotorArray.toString();
        this.id = buildId(rotors);
        this.rotorStartPositions,
    };
    

    stepRotors() {
        for (let rotor of this.rotors) {
            rotor.stepRotor();
            if (rotor.position != 0) break;  // Rotate next rotor only when start of preceeding is reached.
        }
    };


    propogateLetter(inputLetter: string) {
        //this.letterMapping[leftLetterPosition][i] = chosenOutputLetter;
        //this.letterMapping[rightLetterPosition][i] = inputLetter;
        let inputLetterIndex: number;
        let outputLetterIndex: number;

        let inputLetterPosition: number;
        let outputLetterPosition: number;

        
        function calculateOutputPosition(outputLetterIndex, rotorIndex) {
            return outputLetterIndex  
            + this.rotors[rotorIndex].position 
            + this.rotorStartPositions[rotorIndex];
        };
        
        let rotorIndex = 0;
        for (let rotor of this.rotors) {
            
            outputLetterIndex = rotor.letterMapping[rightLetterPosition]
            outputLetterPosition = calculateOutputPosition(outputLetterIndex, rotorIndex)
            inputLetterPosition = outputLetterPosition;
            
            rotorIndex ++;
        }

        

    }
    

}