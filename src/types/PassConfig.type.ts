export type PassConfig = {
  passLength: number,
  includeSymbols: boolean,    // ( e.g. @#$% )
  includeNumbers: boolean,     // ( e.g. 123456 )
  includeLowercase: boolean,  // ( e.g. abcdefgh )
  includeUppercase: boolean,  // ( e.g. ABCDEFGH )
}