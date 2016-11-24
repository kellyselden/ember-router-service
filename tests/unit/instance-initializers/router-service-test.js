import { initialize } from 'dummy/instance-initializers/router-service';
import { module, test } from 'qunit';
import { copy } from 'ember-metal/utils';
import sinon from 'sinon';

const router = { testProp: 'test val' };

let lookup;
let register;
let ember1Application;
let ember2AppInstance;

module('Unit | Instance Initializer | router service', {
  beforeEach() {
    lookup = sinon.stub().returns(copy(router));
    register = sinon.spy();

    ember1Application = {
      container: {
        lookup,
      },
      application: {
        register
      }
    };
    ember2AppInstance = {
      lookup,
      register
    };
  }
});

test('ensure lookup is called for 1.13', function(assert) {
  initialize(ember1Application);

  assert.deepEqual(lookup.args, [['router:main']]);
});

test('ensure lookup is called for 2.x', function(assert) {
  initialize(ember2AppInstance);

  assert.deepEqual(lookup.args, [['router:main']]);
});

test('ensure register is called for 1.13', function(assert) {
  initialize(ember1Application);

  assert.deepEqual(register.args, [[
    'service:router',
    router,
    { singleton: true, instantiate: false }
  ]]);
});

test('ensure register is called for 2.x', function(assert) {
  initialize(ember2AppInstance);

  assert.deepEqual(register.args, [[
    'service:router',
    router,
    { singleton: true, instantiate: false }
  ]]);
});
