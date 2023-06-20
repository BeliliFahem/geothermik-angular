import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular-ivy';
import { AppModule } from './app/app.module';

Sentry.init({
  dsn: 'https://8ae2d0434cca4647bb42dc2c5967cdab@o4505392956571648.ingest.sentry.io/4505392958603264',
  integrations: [
    // Registers and configures the Tracing integration,
    // which automatically instruments your application to monitor its
    // performance, including custom Angular routing instrumentation
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost'], // TODO use env variables
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    // Registers the Replay integration,
    // which automatically captures Session Replays
    new Sentry.Replay(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(`Bootstrap success`);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
