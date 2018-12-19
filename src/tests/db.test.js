const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('Tape is working', t => {
  t.equal('1', '1', '1 should equal 1');
  t.end();
})

/* Handling error test */
test('Is the error page loading?', t => {
  request(app)
    .get('/error')
    .expect(404)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 404)
      t.end()
    })
})

/* Handling home route is "OK" */
test('Are we loading the home page', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200)
      t.end()
    })
})

/* Handling route with '/shopping-list' */
test('Are we getting to the shopping list form?', t => {
  request(app)
    .get('/shopping-list')
    .expect(200)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200)
      t.end()
    })
})
