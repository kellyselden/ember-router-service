export function initialize(appInstance) {
  let lookupSource;

  if (appInstance.lookup) {
    lookupSource = appInstance;
  } else {
    // ember 1.13 support
    lookupSource = appInstance.container;
  }

  let { application } = appInstance;
  let fullName = 'service:router';

  // skip fastboot check if ember 1.13
  if (application.hasRegistration) {
    // fastboot support
    if (application.hasRegistration(fullName)) {
      return;
    }
  }

  let router = lookupSource.lookup('router:main');

  application.register(fullName, router, { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize
};
