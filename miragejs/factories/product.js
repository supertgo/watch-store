import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */

export default {
  product: Factory.extend({
    title() {
      return faker.fake('{{lorem.words}}');
    },
    price() {
      return faker.fake('{{commerce.price}}');
    },
  }),
};
