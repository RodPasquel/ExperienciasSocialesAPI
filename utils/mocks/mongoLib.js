const sinon = require('sinon');
// Sinon permite hacer stub mock ups. Cada vez que creamos un nuevo stub les inyecta unas propiedades que determinan si fueron llamados o no

const { moviesMock, filteredMoviesMocks } = require("./movies");

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in : ["Drama"]} }
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMocks("Drama"));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
    getAllStub(collection, query){
        return getAllStub(collection, query);
    }
    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
}