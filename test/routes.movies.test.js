const assert = require('assert');
const proxyquire = require ('proxyquire');

// Proxyquire permite que cuando se solicita un paquete, en lugar de traer el paquete real, traiga un Mock
const { moviesMock, MovieServiceMock } = require ('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe.only ('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies' : MovieServiceMock
    });

    const request = testServer(route);
    describe('GET /movies', function() {
        it('should respond with status 200', function(done){
            request.get('/api/movies').expect(200,done);
        });

        it('should respond with the list of movies', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                } );
                
            done();
            });
        });
    });
});