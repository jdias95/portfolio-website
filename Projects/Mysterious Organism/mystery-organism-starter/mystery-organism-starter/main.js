// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate () {
      let randIndex = Math.floor(Math.random() * 15);
      const newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) { 
        randIndex = Math.floor(Math.random() * 15);
      };
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA (pAequorObject) {
      let counter = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          counter++;
        };
      };
      return `Specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${((counter / 15) * 100).toFixed(2)}% DNA in common`;
    },
    willLikelySurvive () {
      let counter = 0;
      for (let i = 0; i < 15 ; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++;
        };
      };
      return (counter / 15) >= 0.6;
    },
    complementStrand () {
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'A') {
          this.dna[i] = 'T';
        } else if (this.dna[i] === 'T') {
          this.dna[i] = 'A';
        } else if (this.dna[i] === 'C') {
          this.dna[i] = 'G';
        } else {
          this.dna[i] = 'C';
        };
      };
      return this.dna;
    },
  };
};

const arrayOfSurvivors = () => {
  const likelySurvivors = [];
  let counter = 1;
  while (likelySurvivors.length < 30) {
    let newOrg = pAequorFactory(counter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      likelySurvivors.push(newOrg.dna);
    };
    counter++
  };
  return likelySurvivors;
};

const ex1 = pAequorFactory(1, mockUpStrand())
const ex2 = pAequorFactory(2, mockUpStrand())

console.log('Specimen Number:', ex1.specimenNum)
console.log('DNA Strand:', ex1.dna)
console.log('Mutated DNA Strand:', ex1.mutate())
console.log('Complement Strand:', ex1.complementStrand())
console.log(ex1.willLikelySurvive())
console.log('Specimen Number:', ex2.specimenNum)
console.log('DNA Strand:', ex2.dna)
console.log('Mutated DNA Strand:', ex2.mutate())
console.log('Complement Strand:', ex2.complementStrand())
console.log(ex2.willLikelySurvive())
console.log(ex1.compareDNA(ex2))

console.log(arrayOfSurvivors()) 