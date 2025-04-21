import { hooks as schemaHooks } from '@feathersjs/schema';

import {
  repliesDataValidator,
  repliesPatchValidator,
  repliesQueryValidator,
  repliesResolver,
  repliesExternalResolver,
  repliesDataResolver,
  repliesPatchResolver,
  repliesQueryResolver,
} from './replies.schema';

import type { Application } from '../../declarations';
import { RepliesService, getOptions } from './replies.class';
import { repliesPath, repliesMethods } from './replies.shared';

export * from './replies.class';
export * from './replies.schema';

export const replies = (app: Application) => {
  app.use(repliesPath, new RepliesService(getOptions(app)), {
    methods: repliesMethods,
    events: [],
  });
  app.service(repliesPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(repliesExternalResolver),
        schemaHooks.resolveResult(repliesResolver),
      ],
    },
    before: {
      all: [
        schemaHooks.validateQuery(repliesQueryValidator),
        schemaHooks.resolveQuery(repliesQueryResolver),
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(repliesDataValidator),
        schemaHooks.resolveData(repliesDataResolver),
      ],
      patch: [
        schemaHooks.validateData(repliesPatchValidator),
        schemaHooks.resolveData(repliesPatchResolver),
      ],
      remove: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  });
};

declare module '../../declarations' {
  interface ServiceTypes {
    [repliesPath]: RepliesService;
  }
}
