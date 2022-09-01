import { ArgumentNullError } from '../../utils/errors';
import { ValueObject } from '../../utils/domain/value-object';

export class UserName implements ValueObject<UserName> {
  private readonly value: string;

  constructor(value: string) {
    if (value === null || value === undefined)
      throw new ArgumentNullError('value is null or undefined');

    if (value.length < 3)
      throw new RangeError(
        'Username should consist of more than 3 characters.',
      );

    this.value = value;
  }

  equals(other: UserName): boolean {
    return this.value === other.value;
  }
}

export class UserId implements ValueObject<UserId> {
  private readonly value: string;

  constructor(value: string) {
    if (value === null || value === undefined)
      throw new ArgumentNullError('value is null or undefined');

    this.value = value;
  }

  equals(other: UserId): boolean {
    return this.value === other.value;
  }
}

export class User {
  constructor(public id: UserId, public name: UserName) {}
}
