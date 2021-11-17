import { PassConfig } from '../types/PassConfig.type';

const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersCharacters = "0123456789";
const symbolsCharacters = "!@#$%^&*(){}[]=<>/,.";

export const generatePassword = (config: PassConfig): string => {
  let password = Array.from({length: config.passLength});
  let charactersGroups: string[] = []
  
  if(config.includeLowercase){
    password = setRandomCharacter(password, lowerCaseCharacters);
    charactersGroups = [...charactersGroups, lowerCaseCharacters];
  }
  if(config.includeUppercase){
    password = setRandomCharacter(password, upperCaseCharacters);
    charactersGroups = [...charactersGroups, upperCaseCharacters];
  }
  if(config.includeNumbers){
    password = setRandomCharacter(password, numbersCharacters);
    charactersGroups = [...charactersGroups, numbersCharacters];
  }
  if(config.includeSymbols){
    password = setRandomCharacter(password, symbolsCharacters);
    charactersGroups = [...charactersGroups, symbolsCharacters];
  }
  
  while(hasEmptyCharacters(password)){
    password = setRandomCharacter(password, getRandomCharactersGroup(charactersGroups));
  }

  return password.join('');
}

//0...N (where N = max-1)
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

const getRandomEmptyIndex = (passwordArray: any[]): number => {
  const emptyIndexes = passwordArray.reduce((acc, elem, index) => !elem ? [...acc, index] : acc, []);
  if(emptyIndexes.length === 0) return -1;
  const randomIndex = getRandomInt(emptyIndexes.length);
  return emptyIndexes[randomIndex];
}

const getRandomCharacter = (characters: string) => {
  return characters.charAt(getRandomInt(characters.length));
}

const setRandomCharacter = (passwordArray: any[], characters: string): any[] => {
  const randomCharacter = getRandomCharacter(characters);
  const randomEmptyIndex = getRandomEmptyIndex(passwordArray);
  if(randomEmptyIndex === -1) return passwordArray;
  let newPassArray = [...passwordArray]
  newPassArray[randomEmptyIndex] = randomCharacter;
  return newPassArray;
}

const hasEmptyCharacters = (password: any[]) => password.some(char => char === undefined);

const getRandomCharactersGroup = (charactersGroups: string[]): string => {
  const randomInt = getRandomInt(charactersGroups.length);
  return charactersGroups[randomInt];
}