describe('/', () => {
  describe('get', () => {
    xit('returns a 200', (done) => {
      chai.request(server)
        .get('/')
        .send()
        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(200);
          done();
        })
    });
  });
});