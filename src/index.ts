import 'reflect-metadata';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { container, Lifecycle } from 'tsyringe';
import { InMemoryUserRepository } from './InMemoryUserRepository';
import { App } from './app';

const setUp = async () => {
  // DB
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  mongoose.connect(uri);

  // IoC コンテナ
  container.register(
    'IUserRepository',
    {
      useClass: InMemoryUserRepository,
    },
    { lifecycle: Lifecycle.Singleton },
  );

  App.start();
};

setUp();

// container.register('SuperService', {
//   useClass: TestService,
// });

// const instance = container.resolve(Client);
// console.log(instance);
// const instance2 = container.resolve(Client);
// console.log(instance2);
