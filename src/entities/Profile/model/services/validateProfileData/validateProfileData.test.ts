import { validateProfileData } from './validateProfileData';
import { AsyncThunkTest } from '~/shared/lib/tests/AsyncThunkTest/AsyncThunkTest';
import { CURRENCY } from '~/entities/Currency';
import { COUNTRY } from '~/entities/Country';
import { VALIDATE_PROFILE_ERRORS } from '../../types/profileSchema';

const mockedProfile = {
  first: "Stanislav",
  lastName: "Gribanov",
  age: "35",
  currency: CURRENCY.RUB,
  country: COUNTRY.RUSSIA,
  city: "Ekaterinburg",
  username: "stas",
  avatar: "https://avatarzo.ru/wp-content/uploads/naruto-uzumaki.jpg"
};


describe('validateProfileData test', () => {
  test('success validate', () => {
    const result = validateProfileData(mockedProfile);
    expect(result.length).toBe(0);
  });

  test('user data validate error', () => {
    const updatedProfile = { ...mockedProfile, first: '' };

    const result = validateProfileData(updatedProfile);
    expect(result.length).toBe(1);
    expect(result).toContain(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_DATA);
  });

  test('user age validate error', () => {
    const updatedProfile = { ...mockedProfile, age: '' };

    const result = validateProfileData(updatedProfile);
    expect(result.length).toBe(1);
    expect(result).toContain(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_AGE);
  });

  test('user country validate error', () => {
    const updatedProfile = { ...mockedProfile, country: undefined };

    const result = validateProfileData(updatedProfile);
    expect(result.length).toBe(1);
    expect(result).toContain(VALIDATE_PROFILE_ERRORS.INCORRECT_USER_COUNTRY);
  });
})