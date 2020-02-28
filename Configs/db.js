/*
 * contains MongoDB User Database info 
 */
require('dotenv').config();

const PSW = process.env.MongoDB_PSW

module.exports = {
    'database': `mongodb+srv://ScalableRESTAPI:${PSW}@scalablerestapi-kpb2h.mongodb.net/test?retryWrites=true&w=majority`
};