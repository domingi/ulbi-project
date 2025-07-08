import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";
import { AsyncThunkConfigExtra, StoreScheme } from "~/app/providers/StoreProvider";

type ActionCreator<Returned, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, AsyncThunkConfigExtra<RejectedValue>>;

jest.mock('axios');

export class AsyncThunkTest<Returned, Arg, RejectedValue> {
  action: ActionCreator<Returned, Arg, RejectedValue>;
  dispatch: jest.Mock;
  getState: jest.Mock;
  navigate: jest.Mock;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor (action: ActionCreator<Returned, Arg, RejectedValue>, state?: DeepPartial<StoreScheme>) {
    this.action = action;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state);
    this.navigate = jest.fn();
    this.api = jest.mocked(axios);
  }

  async callThunk (data: Arg) {
    const action = this.action(data);
    const extra = {
      api: this.api,
      navigate: this.navigate,
    };

    const result = await action(this.dispatch, this.getState, extra);
    return result;
  }
}