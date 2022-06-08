const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');

chai.use(chaiHttp);

describe('chart get index', () => {
    try {
        it('Root Page', (done) => {
            request(process.env.BASE_URL)
                .get('/cca_websocket/')
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.statusCode, 200);
                    done();
                });
        });
    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});
