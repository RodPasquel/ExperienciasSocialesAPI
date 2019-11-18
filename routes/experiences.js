// Express Router
// _Routes > Services > Mongo Library Methods

const express = require('express');
const { moviesMock} = require('../utils/mocks/movies');
const ExperiencesService = require ('../services/experiences');
const { movieIdSchema, createMovieSchema, updateMovieSchema} = require ('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');

function experiencesAPI(app) {
    const router = express.Router();
    app.use("/api/experiences",router); // initial route

    const experiencesService = new ExperiencesService();
    
    //Route: Experiences Global List
    router.get("/",async function(req,res,next){ 
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);     
        const { tags } = req.query; 
        try{
            const experiences = await experiencesService.getExperiences({ tags });
            res.status(200).json({
                data: experiences,
                message: 'All experiences listed',
            });
        }catch(err){
            next(err);
        }
    });

    //Route: Experiences filtered by Category
    router.get("/byCategory/:CategoryID", async function(req,res,next){
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS); 
        const { CategoryID } = req.params;
        try{
            const experiences = await experiencesService.getExpByCategory({ CategoryID });
            res.status(200).json({
                data: experiences,
                message: `experiences for Category ${CategoryID} retrieved`,
            });
        }catch(err){
            next(err);
        }
    });


    //Route: Experiences filtered by date
    router.get("/byDate/:SearchDate", async function(req,res,next){
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { SearchDate } = req.params;
        console.log("SearchDate is: ",SearchDate);
        try{
            const experiences = await experiencesService.getExperiencesFiltered({ SearchDate });
            res.status(200).json({
                data: experiences,
                message: `experiences for ${SearchDate} retrieved`,
            });
        }catch(err){
            next(err);
        }
    });

    //Route: Experiences filtered by date or location
    // getting query from URL/search/SearchQuery?date=2019-11-09&location=Campeche
    router.get("/search/SearchQuery", async function(req,res,next){
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const SearchQuery = req.query;
        const SearchDate = SearchQuery.date;
        const SearchLocation = SearchQuery.location;
        try{
            const experiences = await experiencesService.getExperiencesFiltered({ SearchDate, SearchLocation });
            res.status(200).json({
                data: experiences,
                message: `experiences for ${SearchDate} retrieved`,
            });
        }catch(err){
            next(err);
        }
    });

    //Route: Create a new Experience
    router.post("/", async function(req,res,next){
    //router.post("/", validationHandler( createMovieSchema ), async function(req,res,next){
        const { body: experience } = req;
        try{
            const createdExperienceID = await experiencesService.createExperience({ experience });
            res.status(201).json({
                data: createdExperienceID,
                message: `experience "${createdExperienceID}" created`,
            });
        }catch(err){
            next(err);
        }
    });

    
    // Route: Update an Experience
    //router.put("/:experienceID", validationHandler({ movieID: movieIdSchema }, 'params' ), validationHandler(updateMovieSchema), async function(req,res,next){
    router.put("/:experienceID", async function(req,res,next){
    //router.put("/event", async function(req,res,next){

        const { body: experience } = req;
        const { experienceID } = req.params;
        // http://{{url}}/api/experiences/event?id=5dc71d3016ecdc3641d9191a&qty=7
        //http://{{url}}/api/experiences/5dc71d3016ecdc3641d9191a
        //const query = req.query;
        //console.log("query: ",query);
        //const experienceID = req.query.id;
        //const experience = `{ 'current-capacity': ${req.query.qty} }`;
        
       console.log("experienceID es: ",experienceID);
       console.log("experience es: ",experience);
        try{
            const updatedExperienceID = await experiencesService.updateEvent({ experienceID, experience });

            res.status(200).json({
                data: updatedExperienceID,
                message: `experience ${experienceID} updated`,
            });
        }catch(err){
            next(err);
        }
    });
    
    // Route: Delete an Experience
    router.delete("/:movieID", validationHandler({ movieID: movieIdSchema }, 'params' ), async function(req,res,next){
        const { movieID } = req.params;
        try{
            const deleteMovieID = await experiencesService.deleteMovie({ movieID });

            res.status(200).json({
                data: deleteMovieID,
                message: `movie ${movieID} deleted`,
            });
        }catch(err){
            next(err);
        }
    });
}
module.exports = experiencesAPI;
