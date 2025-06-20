import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from '~/entities/User';
import { AsyncThunkTest } from '~/shared/lib/tests/AsyncThunkTest/AsyncThunkTest';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

const loginData = { username: 'Stas', password: '123' };
const mockedResponse = { username: 'Stas', id: '123' };

describe('loginByUsername test', () => {
  test('success login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockedResponse }));
    const asyncThunk = new AsyncThunkTest(loginByUsername);
    const result = await asyncThunk.callThunk(loginData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthDate(mockedResponse));
    expect(result.payload).toEqual(mockedResponse);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }));
    const asyncThunk = new AsyncThunkTest(loginByUsername);
    const result = await asyncThunk.callThunk(loginData);
  
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.payload).toBe('loginError');
    expect(result.meta.requestStatus).toBe('rejected');
  });

})