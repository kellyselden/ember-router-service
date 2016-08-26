# ember-router-service
[![npm version](https://badge.fury.io/js/ember-router-service.svg)](https://badge.fury.io/js/ember-router-service)
[![Build Status](https://travis-ci.org/kellyselden/ember-router-service.svg?branch=master)](https://travis-ci.org/kellyselden/ember-router-service)

service:router alias for router:main

### Usage

```js
export default Ember.Component.extend({
  router: Ember.inject.service(),

  actions: {
    goSomewhere() {
      this.get('router.router').transitionTo('somewhere-else');
    }
  }
});
```
