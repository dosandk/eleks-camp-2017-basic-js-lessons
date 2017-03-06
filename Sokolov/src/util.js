const utilModule = (function() {
  return {
    typeOf(obj) {
      return ({}).toString.call(obj)
        .match(/\s(\w+)/)[1].toLowerCase();
    },

    checkParamTypes(args, types) {
      args = [].slice.call(args);
      for (let i = 0; i < types.length; i++) {
        if (this.typeOf(args[i]) != types[i]) {
          throw new TypeError('param' + i +
                              ' must be of type ' + types[i]);
        }
      }
    }
  };
})();
