import { initialize } from 'dummy/instance-initializers/router-service';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Instance Initializer | router service');

test('ensure register is called for 1.13', function(assert) {
  let register = sinon.spy();

  let appInstance = {
    container: {
      lookup: sinon.stub().returns({}),
    },
    application: {
      register
    }
  };

  initialize(appInstance);

  assert.ok(register.calledOnce);
});

test('ensure register is called for 2.x', function(assert) {
  let register = sinon.spy();

  let appInstance = {
    lookup: sinon.stub().returns({}),
    register
  };

  initialize(appInstance);

  assert.ok(register.calledOnce);
});
