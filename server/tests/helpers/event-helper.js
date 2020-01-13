exports.pushEvent = data => new Promise((resolve, reject) => {
  chai.request(server)
  .post('/event')
  .set('x-hub-signature', 'sha1=027242ab59cc2034825073faaff5fadf993bc536')
  .send(data)
  .end((error, response) => {
    if (error) {
      reject(error);
    } else {
      resolve(response);
    }
  });
})