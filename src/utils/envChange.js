export const counter = (function () {
  let instance;

  function create() {
    return { val: 0 };
  }

  return {
    get: function () {
      if (!instance) {
        instance = create();
      }
      return instance;
    },
  };
})();
