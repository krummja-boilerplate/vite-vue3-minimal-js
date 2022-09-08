import autoRoutes from 'pages-generated';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg';

import './assets/main.css';

const routes = autoRoutes

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {},
);
