var {MongoClient, ObjectID} = require('mongodb');
const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL, function (err, client){
    if(err) {
        return console.log('Error on connecting to database');
    }
    console.log('Connected to the MongoDB Server'); 
    
    const db = client.db('TodoApp').collection('Todos');
    db.find().toArray().then(docs => {
        console.log('Todos:\n', JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Error fetching data', err);
    });
    //client.close();
});