import { injectable } from 'tsyringe';
import { UserRegisterCommand } from './UserRegisterCommand';

@injectable()
export class UserApplicationService {
  constructor() {
    console.log('UserApplicationService');
  }

  Register(command: UserRegisterCommand) {
    console.log(command);
  }
}
