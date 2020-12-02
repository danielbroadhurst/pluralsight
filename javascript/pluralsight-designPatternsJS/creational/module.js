/**
 * Module Pattern
 * A way to encapsulate methods, a toolbox of functions.
 */
let ModulePattern = function()  {

  let privateData = 'Private Data';

  return {
    method: function () {
      return true;
    },
    nextMethod: function () {
      return true;
    }
  }
}

/**
 * Module Demo
 */
let repository = function () {

  let db = {}; // Methods on this module have access to this but it is not public.

  const get = function(id) {
    console.log('Getting Task: '+ id);
    return {
      name: 'New Task from DB'
    }
  }

  const save = function (task) {
    console.log('Saving ' + task.name + ' to the db.');
  }
  
  // Public API
  return {
    get,
    save
  }
}

module.exports = repository();