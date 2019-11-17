// Mongo Library
// Routes > Services > _Mongo Library Methods

const { MongoClient, ObjectId } = require ('mongodb');
const { config } = require ('../config/index');

const USER = encodeURIComponent(config.dbUser); 
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME=config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }
    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if(err) {
                        
                        reject(err);
                    }
                    if(config.dev)
                    {
                        console.log('Connected succesfully to mongo lib');
                    }
                    resolve(this.client.db(this.dbName));
                });
            });
        }

        return MongoLib.connection;
    }

    // All elements in the connection
    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        });
    }

    //Find elements for a date
    getSearchDate(collection, SearchDate) {
        return this.connect().then(db => {
            return db.collection(collection).aggregate(
            [
                { $match : { "date":new Date(`${SearchDate}`) } },
                {
                    $lookup:{
                        from: "ExperiencesCatalog",
                        localField: "experience-id", 
                        foreignField: "_id",
                        as: "ExperienciaInfo"         }
                },
                {   
                    $project:{
                        _id : 1,
                        date : 1,
                        title: { $arrayElemAt: [ "$ExperienciaInfo.title", 0 ] },
                        description : { $arrayElemAt: [ "$ExperienciaInfo.description", 0 ] },
                        location : { $arrayElemAt: ["$ExperienciaInfo.location", 0 ] },
                        locationLat : { $arrayElemAt: ["$ExperienciaInfo.locationLat", 0 ] },
                        locationLong : { $arrayElemAt: ["$ExperienciaInfo.locationLong", 0 ] },
                        locationZoom : { $arrayElemAt: ["$ExperienciaInfo.locationZoom", 0 ] },
                        image1cover : { $arrayElemAt: ["$ExperienciaInfo.image1-cover", 0 ] },
                        image2: { $arrayElemAt: ["$ExperienciaInfo.image2", 0 ] },
                        image3: { $arrayElemAt: ["$ExperienciaInfo.image3", 0 ] },
                        cost : { $arrayElemAt: ["$ExperienciaInfo.cost", 0 ] },
                        duration : { $arrayElemAt: ["$ExperienciaInfo.duration", 0 ] },
                        capacity : { $arrayElemAt: ["$ExperienciaInfo.capacity", 0 ] },      
                        currentCapacity:  "$current-capacity"
                    } 
                },
             ]).toArray();
        });
    }

    // find elements by category
    getExperienceByCategory(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        });
    }

    // find single element by ID
    get(collection, id){
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id : ObjectId(id) })
        });
    }

    // Add data to the collection
    create(collection,data){
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data)
        }).then(result => result.insertedID);
    }

    // Update specific element by ID
    update(collection,id, data){
        return this.connect().then(db => {
            console.log("Updating ",data);
            return db.collection(collection).updateOne({ _id : ObjectId(id)}, { $set: data },{ upsert : true })
        }).then(result => result.upsertedID || id);
    }

    // Delete a specific element by ID
    delete(collection, id){
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id : ObjectId(id) });
        }).then(() => id)
    }
}

module.exports = MongoLib;