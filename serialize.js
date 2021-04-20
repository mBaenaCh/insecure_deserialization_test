const serialize = require('node-serialize');

insecureDeserialization = {
  username: function () {
    while (true) {
      console.log('You have been hacked xd');
    }
  },
};

console.log('Serialized: \n' + serialize.serialize(insecureDeserialization));
