import { RandomUserProfile } from "../types/RandomUserProfile.type";

export const getRandomUser = async (): Promise<RandomUserProfile> => {
  try {
    const response = await fetch(`https://randomuser.me/api/`);
    if (response.error) {
      throw response.error;
    }
    const json = await response.json();
    return json.results[0];
  } catch (err) {
    throw err;
  }
} 