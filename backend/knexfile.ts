import { app } from './src/app';

const config = app.get('postgresql');

module.exports = config;
