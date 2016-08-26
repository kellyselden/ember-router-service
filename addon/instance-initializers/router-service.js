export function initialize(instance) {
  let lookupSource;

  if (instance.lookup) {
    lookupSource = instance;
  } else {
    lookupSource = instance.container;
  }

  let router = lookupSource.lookup('router:main');

  instance.application.register('service:router', router, { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize
};
