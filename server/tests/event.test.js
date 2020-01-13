const eventHelper = require('./helpers/event-helper');
const eventFactory = require('./helpers/event-factory');
const fs = require('fs');

const projectsPath = fs.existsSync('/.dockerenv') ? '/app/projects/' : `${process.env.PROJECT_PATH}`;

describe('/event', () => {
  describe('post', () => {
    describe('repo is not local', () => {
      it('clones a new copy of the repo and returns a 201', (done) => {
        eventHelper.pushEvent(eventFactory.createEvent('test-1')).then(res => {
          expect(res.status).to.equal(201);
          expect(fs.existsSync(`${projectsPath}/test-1`)).to.equal(true);
          done();
        })
          .catch(error => done(error));
      });
    });
  });
});