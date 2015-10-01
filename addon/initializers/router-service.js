export function initialize(container, application) {
  application.register('service:router', container.lookup('router:main'), { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize: initialize
};
