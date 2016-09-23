export function initialize(appInstance) {
  let lookupSource;

  if (appInstance.lookup) {
    lookupSource = appInstance;
  } else {
    // ember 1.13 support
    lookupSource = appInstance.container;
  }

  let router = lookupSource.lookup('router:main');

  appInstance.application.register('service:router', router, { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize
};
