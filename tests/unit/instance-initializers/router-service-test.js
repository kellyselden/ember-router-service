import Ember from 'ember';
import { initialize } from 'dummy/instance-initializers/router-service';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | router service', {
  beforeEach: function() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach: function() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

test('can lookup service', function(assert) {
  initialize(this.appInstance);

  let lookupSource;

  if (this.appInstance.lookup) {
    lookupSource = this.appInstance;
  } else {
    // ember 1.13 support
    lookupSource = this.appInstance.container;
  }

  let router = lookupSource.lookup('service:router');

  assert.ok(router.transitionTo);
});
