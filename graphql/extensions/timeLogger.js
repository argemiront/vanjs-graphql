const { GraphQLExtension } = require('apollo-server');

class ElapsedTimeLogger extends GraphQLExtension {

  willSendResponse(o) {
    const { context: { stats } } = o;

    const endTime = new Date();

    console.log(`Request completed in ${endTime - stats.startTime} ms`);
    
    return o;
  }
}

module.exports = ElapsedTimeLogger;
