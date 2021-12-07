// function used for assigning classes to character images,
//     used for indicating to the player they have found the character already

export const checkIfFound = (char, charactersFound) => {
  return charactersFound.includes(char) ? true : false;
};
