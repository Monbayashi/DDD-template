import 'reflect-metadata';
import { container } from 'tsyringe';
import { Client } from './Client';
import { TestService } from './TestService';

container.register('SuperService', {
  useClass: TestService,
});

const instance = container.resolve(Client);
console.log(instance);
const instance2 = container.resolve(Client);
console.log(instance2);
