import Ember from 'ember';

const {
  Controller,
  computed,
  inject,
  get
} = Ember;

export default Controller.extend({
  router: inject.service(),

  didInjectRouter: computed(function() {
    return get(this, 'router');
  })
});
