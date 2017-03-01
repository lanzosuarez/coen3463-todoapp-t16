var session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    assert = require('assert');
    
    const uri = process.env.MONGOLAB_URI || 'mongodb://lanzosuarez:bobotngacla1234@ds143449.mlab.com:43449/todos';
    var store = new MongoDBStore(
      {
        uri: uri,
        collection: 'mySessions'
      },
        function(error){
            assert.ifError(error);
            assert.ok(true);
        }      
      );
 
    // Catch errors 
    store.on('error', function(error) {
      assert.ifError(error);
      assert.ok(false);
    });

module.exports = store;