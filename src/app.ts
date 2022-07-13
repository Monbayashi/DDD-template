import readline from 'readline';
import { container } from 'tsyringe';
import { UserApplicationService } from './UserApplicationService';
import { UserRegisterCommand } from './UserRegisterCommand';

export class App {
  private constructor() {
    // Static Class
  }

  static async start() {
    for (;;) {
      const input = await this.question('Input user name > ');
      const userApplicationService = container.resolve(UserApplicationService);
      const command = new UserRegisterCommand(input);
      userApplicationService.Register(command);

      console.log('--------------------------');
      console.log('user created:');
      console.log('--------------------------');
      console.log('user name:');
      console.log('- ' + input);
      console.log('--------------------------');

      const yesOrNo = await this.question('continue? (y/n) > ');
      if (yesOrNo === 'n') {
        break;
      }
    }
  }

  private static question = (question: string): Promise<string> => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      readlineInterface.question(question, (answer) => {
        resolve(answer);
        readlineInterface.close();
      });
    });
  };
}
