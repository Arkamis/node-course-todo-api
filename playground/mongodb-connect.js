const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017';
MongoClient.connect( URL, (err, client) => {
    if(err){
        return console.log('Unable To connect to MongoDB Server');
    }
    console.log('Connected to the MongoDB Server'); 
    
    const db = client.db('TodoApp')
    db.collection('Todos').insertOne({
        text: 'Walk the dog out',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    // var arrayToInsert = [{name:'Miguel R.',age: 20,location: 'Colima'},{name:'Carlos',age: 15,location: 'Tepic'}, {name:'Juan',age: 22,location: 'Jalisco'}]
    // db.collection('Users').insertMany(arrayToInsert)
    // .then(result => {
    //     if(result) {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // })
    // .catch(err => {
    //     console.log('Unable to insert todo', err);
    // })
    client.close();
});