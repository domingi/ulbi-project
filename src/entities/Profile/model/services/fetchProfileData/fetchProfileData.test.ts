import { fetchProfileData } from './fetchProfileData';
import { AsyncThunkTest } from '~/shared/lib/tests/AsyncThunkTest/AsyncThunkTest';
import { CURRENCY } from '~/entities/Currency';
import { COUNTRY } from '~/entities/Country';

const mockedResponse = {
  first: "Stanislav",
  lastName: "Gribanov",
  age: "34",
  currency: CURRENCY.RUB,
  country: COUNTRY.RUSSIA,
  city: "Ekaterinburg",
  username: "stas",
  avatar: "https://avatarzo.ru/wp-content/uploads/naruto-uzumaki.jpg"
};

describe('fetchProfileData test', () => {
  test('success fetch', async () => {
    const asyncThunk = new AsyncThunkTest(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data: mockedResponse }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.payload).toEqual(mockedResponse);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error fetch', async () => {
    const asyncThunk = new AsyncThunkTest(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.reject({ status: 403 }));
    const result = await asyncThunk.callThunk();
  
    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.payload).toBe('fetchProfileDataError');
    expect(result.meta.requestStatus).toBe('rejected');
  });

})