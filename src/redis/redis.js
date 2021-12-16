//----------------------caching-----------------------//
const redis = require("redis")
const { promisify } = require("util");
const { urlCode } = require("../controller/urlController");

//Connect to redis
const redisClient = redis.createClient(
    13772,
    "redis-13772.c91.us-east-1-3.ec2.cloud.redislabs.com",
    { no_ready_check: true }
);
redisClient.auth("1i1XHaA9vUrCDB5p6Y7UGehix73nOZz1", function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
});

//Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
// redisClient.GET("d2fbxodh_" , function (err,value){
// console.log(value)
// })
// bind,call and apply method
module.exports = {
    SET_ASYNC,
    GET_ASYNC 
}