// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Oopsie, Event } = initSchema(schema);

export {
  Oopsie,
  Event
};