const eventHelper = require('./helpers/event-helper');
const eventFactory = require('./helpers/event-factory');

describe('/event', () => {
  describe('post', () => {
    it('returns 201 when recieves push event from repo that is not local', (done) => {
      eventHelper.pushEvent(eventFactory.createEvent('test-1')).then(res => {
        console.log(res.body.error);
        expect(res.status).to.equal(201);
        done();
      })
      .catch(error => done(error));
    });
  });
});