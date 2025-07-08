import { Profile, VALIDATE_PROFILE_ERRORS } from "../../types/profileSchema";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [VALIDATE_PROFILE_ERRORS.NO_DATA];

  const { first, country, lastName, age } = profile;
  const errors = [];

  if (!first || !lastName) {
    errors.push(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_DATA);
  }

  if (!country) {
    errors.push(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_COUNTRY);
  }

  if (!age || !Number.isInteger(Number(age))) {
    errors.push(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_AGE);
  }

  return errors;
};
