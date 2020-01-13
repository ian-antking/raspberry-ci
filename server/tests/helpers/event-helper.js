exports.pushEvent = data => new Promise((resolve, reject) => {
  chai.request(server)
  .post('/event')
  .set('x-hub-signature', 'sha1=bfe5830a33bf4b9e9e2f87c1d3f6f279f4ba4c66')
  .send(data)
  .end((error, response) => {
    if (error) {
      reject(error);
    } else {
      resolve(response);
    }
  });
})