import { SuperService } from './SuperService';

export class TestService implements SuperService {
  constructor() {
    console.log('TestService');
  }
}
