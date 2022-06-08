const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'testing';
dotenv.config({ path: process.env.PWD + '/' + env + '.env' });
global.logger = require('../server/util/logger');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const server = require('../server/server');

chai.use(chaiHttp);
const request = require('supertest');
request(app);
request(server);
// Start testing
require('./init.test');

// Auth
// require('../server/services/charts/test/chart.test');
require('../server/util/test/socket.test');

// End Testing
require('./end.test');

describe('Stop server in end', () => {
    it('Server should stop manually to get code coverage', done => {
        server.close();
        app.close();
        done();
    });
});
