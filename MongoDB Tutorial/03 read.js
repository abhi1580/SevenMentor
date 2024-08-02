db.inventory.find()  //- Fetch all data from the table
db.inventory.find({'qty':85}) //Fetch data from table where qty is 85

db.inventory.find({tags:{$in:["red","D"]}}) // Finds in the tags array present in the objects has contained with value red or D by using $in

