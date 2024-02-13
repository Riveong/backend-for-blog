const name = require('../function/functions');
'use strict'


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    try{
      reply.statusCode = 201;
      return { 
        "status": reply.statusCode,
        "error":"false",
        "result": "Hello World"
      };
    }
    catch{
      reply.statusCode = 500;
      return {
        status:reply.statusCode,
        error:"true"
      };
    };
  });


  fastify.get('/products', async function (request, reply) {
    try{
      reply.statusCode = 201;
      return { 
        "status": reply.statusCode,
        "error":"false",
        "result": name
      };
    }
    catch{
      reply.statusCode = 500;
      return {
        status:reply.statusCode,
        error:"true"
      }
    };
  })
};
