export function initialize(instance) {
  instance.application.register('service:router', instance.lookup('router:main'), { singleton: true, instantiate: false });
}

export default {
  name: 'router-service',
  initialize
};
