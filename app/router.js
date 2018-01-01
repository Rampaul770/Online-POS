import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cashier');
  this.route('sales');
  this.route('reports');
  this.route('settings');
});

export default Router;
