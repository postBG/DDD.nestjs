import { ArgumentNullError } from './error';

export class UserName {
  private readonly value: string;

  constructor(value: string) {
    if (value == null)
      throw new ArgumentNullError('value is null or undefined');

    if (value.length < 3)
      throw new RangeError(
        'Username should consist of more than 3 characters.',
      );

    this.value = value;
  }
}

export class UserId {
  private readonly value: string;

  constructor(value: string) {
    if (value == null)
      throw new ArgumentNullError('value is null or undefined');

    this.value = value;
  }
}

export class User {
  constructor(public id: UserId, public name: UserName) {}
}
