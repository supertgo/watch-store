import { Factory } from 'miragejs';
import faker from '@faker-js/faker';
import { randomNumber } from './utils';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */

export default {
  user: Factory.extend({
    name() {
      return faker.fake('{{name.findName}}');
    },
    mobile() {
      return faker.fake('{{phone.phoneNumber}}');
    },
    afterCreate(user, server) {
      const messages = server.createList('message', randomNumber(10), { user });

      user.update({ messages });
    },
  }),
};
