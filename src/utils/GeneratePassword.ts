import generator from 'generate-password';
import { PassConfig } from '../types/PassConfig.type';

export const generatePassword = (config: PassConfig): string => {
  const password = generator.generate({
    length: config.passLength,
    symbols: config.includeSymbols,
    numbers: config.includeNumbers,
    lowercase: config.includeLowercase,
    uppercase: config.includeUppercase,
  });

  return password;
}