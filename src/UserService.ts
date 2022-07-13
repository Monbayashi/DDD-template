import { injectable } from 'tsyringe';

@injectable()
export class UserService {
  constructor() {
    console.log('UserService');
  }
}
