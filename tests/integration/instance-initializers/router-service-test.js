import Ember from 'ember';
import { initialize } from 'dummy/instance-initializers/router-service';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Integration | Instance Initializer | router service', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
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

test('doesn\'t error when run multiple times (fastboot support)', function(assert) {
  if (!this.appInstance.hasRegistration) {
    // skip fastboot check if ember 1.13
    assert.ok(true);
    return;
  }

  initialize(this.appInstance);
  initialize(this.appInstance);

  assert.ok(this.appInstance.hasRegistration('service:router'));
});
