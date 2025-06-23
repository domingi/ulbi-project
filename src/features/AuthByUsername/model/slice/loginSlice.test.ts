import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice test', () => {
  test('setUsername', async () => {
    const store: DeepPartial<LoginSchema> = { username: '123' };
    const result = loginReducer(store as LoginSchema, loginActions.setUsername('1234'));

    expect(result.username).toBe('1234');
  });

  test('setPassword', async () => {
    const store: DeepPartial<LoginSchema> = { password: '123' };
    const result = loginReducer(store as LoginSchema, loginActions.setPassword('1234'));

    expect(result.password).toBe('1234');
  });
})