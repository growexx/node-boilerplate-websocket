
const request = require('supertest');
const app = require('../server/server');
request(app);
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);
