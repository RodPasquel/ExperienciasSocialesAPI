const assert = require('assert');
const proxyquire = require ('proxyquire');

const { getAllStub,createStub,MongoLibMock } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe("services - movies", function() {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo' : MongoLibMock
    });

    const MoviesService = new MoviesServices();

    describe("when get movies method is called", async function() {
        it('should call the getAll MongoLib Method', async function(){
                await MoviesService.getMovies({});
                assert.strictEqual(getAllStub.called.true);
        })

        it('should return an array of movies', async function() {
            const result = await MoviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    });
});