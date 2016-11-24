export function initialize(appInstance) {
  let lookupSource;
  let registerSource;

  if (appInstance.lookup) {
    lookupSource = appInstance;
    registerSource = appInstance;
  } else {
    // ember 1.13 support
    lookupSource = appInstance.container;
    registerSource = appInstance.application;
  }

  let router = lookupSource.lookup('router:main');

  registerSource.register('service:router', router, { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize
};
