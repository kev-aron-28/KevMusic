const eventBus = {};

eventBus.install = function(Vue) {
  Vue.prototype.$eventBus = new Vue();
};

export default eventBus;
