import { updateProfileData } from './updateProfileData';
import { AsyncThunkTest } from '~/shared/lib/tests/AsyncThunkTest/AsyncThunkTest';
import { CURRENCY } from '~/entities/Currency';
import { COUNTRY } from '~/entities/Country';
import { VALIDATE_PROFILE_ERRORS } from '../../types/profileSchema';

const mockedData = {
  first: "Stanislav",
  lastName: "Gribanov",
  age: "35",
  currency: CURRENCY.RUB,
  country: COUNTRY.RUSSIA,
  city: "Ekaterinburg",
  username: "stas",
  avatar: "https://avatarzo.ru/wp-content/uploads/naruto-uzumaki.jpg",
  id: '1'
};


describe('updateProfileData test', () => {
  test('success fetch', async () => {
    const asyncThunk = new AsyncThunkTest(updateProfileData, { profile: { formData: mockedData } });
    asyncThunk.api.put.mockReturnValue(Promise.resolve({ data: mockedData }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.payload).toEqual(mockedData);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error fetch', async () => {
    const asyncThunk = new AsyncThunkTest(updateProfileData, { profile: { formData: mockedData } });
    asyncThunk.api.put.mockReturnValue(Promise.reject({ status: 403 }));
    const result = await asyncThunk.callThunk();
  
    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.payload).toEqual([VALIDATE_PROFILE_ERRORS.SERVER_ERROR]);
    expect(result.meta.requestStatus).toBe('rejected');
  });

})