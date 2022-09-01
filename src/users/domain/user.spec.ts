import { UserId, UserName } from './user';
import { ArgumentNullError } from '../../utils/errors';

describe('UserName', () => {
  describe('create', () => {
    it('null을 이용해 객체 생성을 시도할 경우 예외를 던진다', async () => {
      const result = async () => {
        await new UserName(null);
      };

      await expect(result).rejects.toThrowError(
        new ArgumentNullError('value is null or undefined'),
      );
    });

    it('undefined를 이용해 객체 생성을 시도할 경우 예외를 던진다', async () => {
      const result = async () => {
        await new UserName(undefined);
      };

      await expect(result).rejects.toThrowError(
        new ArgumentNullError('value is null or undefined'),
      );
    });

    it('3자 보다 짧은 이름을 만드려고 하면 예외를 던진다', async () => {
      const result = async () => {
        await new UserName('2자');
      };

      await expect(result).rejects.toThrowError(
        new RangeError('Username should consist of more than 3 characters.'),
      );
    });
  });

  describe('equality', () => {
    it('서로 같은 값을 가진 username은 서로 같다', async () => {
      const username1 = new UserName('some username');
      const username2 = new UserName('some username');

      await expect(username1.equals(username2)).toBeTruthy();
      await expect(username1 === username2).toBeFalsy();
    });

    it('서로 다른 값을 가진 username은 서로 다르다', async () => {
      const username1 = new UserName('some username');
      const username2 = new UserName('other username');

      await expect(username1.equals(username2)).toBeFalsy();
      await expect(username1 === username2).toBeFalsy();
    });
  });
});

describe('UserId', () => {
  describe('create', () => {
    it('null을 이용해 객체 생성을 시도할 경우 예외를 던진다', async () => {
      const result = async () => {
        await new UserId(null);
      };

      await expect(result).rejects.toThrowError(
        new ArgumentNullError('value is null or undefined'),
      );
    });

    it('undefined를 이용해 객체 생성을 시도할 경우 예외를 던진다', async () => {
      const result = async () => {
        await new UserId(undefined);
      };

      await expect(result).rejects.toThrowError(
        new ArgumentNullError('value is null or undefined'),
      );
    });
  });

  describe('equality', () => {
    it('서로 같은 값을 가진 user id는 서로 같다', async () => {
      const username1 = new UserId('some user id');
      const username2 = new UserId('some user id');

      await expect(username1.equals(username2)).toBeTruthy();
      await expect(username1 === username2).toBeFalsy();
    });

    it('서로 다른 값을 가진 user id는 서로 다르다', async () => {
      const username1 = new UserId('some user id');
      const username2 = new UserId('other user id');

      await expect(username1.equals(username2)).toBeFalsy();
      await expect(username1 === username2).toBeFalsy();
    });
  });
});
