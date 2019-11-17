// Services
// Routes > _Services > Mongo Library Methods

// Pasamos los Mocks a esta capa pues ahora es su responsabilidad servir
//const { moviesMock } = require("../utils/mocks/movies");
const MongoLib = require ('../lib/mongo');

class ExperiencesService { 
    constructor(){
        this.collection = 'ExperiencesCatalog';
        this.mongoDB = new MongoLib();
    }
    async getExperiences({ tags }) {
        this.collection = 'ExperiencesCatalog';
        const query= tags && { category: { $in: tags }};
        const experiences = await this.mongoDB.getAll(this.collection, query);
        return experiences || [];
    }

    async getExperiencesFiltered({ SearchDate }) {
        this.collection = 'ExperiencesEvents';
        const experiences = await this.mongoDB.getSearchDate(this.collection, SearchDate);
        return experiences || [];
    }

    async getExpByCategory({ CategoryID }) {
        this.collection = 'ExperiencesCatalog';
        const query= { category: { $in: [CategoryID] } };
        const experiences = await this.mongoDB.getExperienceByCategory(this.collection, query);
        return experiences || [];
    }

    async getExperience({ experienceID }) {
        const experience = await this.mongoDB.get(this.collection, experienceID);
        return experience || {}; 
    }

    async createExperience({ experience }) {
        const createExperienceId = await this.mongoDB.create(this.collection, experience);
        return createExperienceId; 
    }

    async updateEvent({ experienceID, experience }) {
        this.collection = 'ExperiencesEvents';
        const updatedEventId =  await this.mongoDB.update(this.collection, experienceID, experience);
        return updatedEventId; 
    }

    async deleteMovie({ movieID }) {
        const deleteMovieId = await this.mongoDB.delete(this.collection, movieID);
        return deleteMovieId;          
    }
}

module.exports = ExperiencesService;

// The services Call the Mongo Library Methods