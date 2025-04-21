import { feathers } from '@feathersjs/feathers';
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler,
} from '@feathersjs/express';
import 'dotenv/config';
import configuration from '@feathersjs/configuration';
import socketio from '@feathersjs/socketio';
import type { Application } from './declarations';
import { configurationValidator } from './configuration';
import { logger } from './logger';
import { logError } from './hooks/log-error';
import { postgresql } from './postgresql';
import { services } from './services/index';
import { channels } from './channels';

const app: Application = express(feathers());
app.configure(configuration(configurationValidator));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/', serveStatic(app.get('public')));

app.configure(rest());
app.configure(
  socketio({
    cors: {
      origin: app.get('origins'),
    },
  }),
);
app.configure(postgresql);
app.configure(services);
app.configure(channels);

app.use(notFound());
app.use(errorHandler({ logger }));

app.hooks({
  around: {
    all: [logError],
  },
  before: {},
  after: {},
  error: {},
});

app.hooks({
  setup: [],
  teardown: [],
});

export { app };
