import { loginByUsername } from './loginByUsername';
import { userActions } from '~/entities/User';
import { AsyncThunkTest } from '~/shared/lib/tests/AsyncThunkTest/AsyncThunkTest';

const loginData = { username: 'Stas', password: '123' };
const mockedResponse = { username: 'Stas', id: '123' };

describe('loginByUsername test', () => {
  test('success login', async () => {
    const asyncThunk = new AsyncThunkTest(loginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: mockedResponse }));
    const result = await asyncThunk.callThunk(loginData);

    expect(asyncThunk.api.post).toHaveBeenCalledTimes(1);
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthDate(mockedResponse));
    expect(result.payload).toEqual(mockedResponse);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error login', async () => {
    const asyncThunk = new AsyncThunkTest(loginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));
    const result = await asyncThunk.callThunk(loginData);
  
    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.payload).toBe('loginError');
    expect(result.meta.requestStatus).toBe('rejected');
  });

})