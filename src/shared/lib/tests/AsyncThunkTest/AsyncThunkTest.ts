import { AsyncThunkAction } from "@reduxjs/toolkit";

type ActionCreator<Returned, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export class AsyncThunkTest<Returned, Arg, RejectedValue> {
  action: ActionCreator<Returned, Arg, RejectedValue>;
  dispatch: jest.Mock;
  getState: jest.Mock;

  constructor (action: ActionCreator<Returned, Arg, RejectedValue>) {
    this.action = action;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk (data: Arg) {
    const action = this.action(data);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}