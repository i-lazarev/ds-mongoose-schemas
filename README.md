# Mongoose - Exercise 1

## Write a MongoDB "seed script" (=> fill Mongo with initial data)

* Install packages Mongoose and Faker

* Create a schema for a user document
* Create a model User on the users collection
    * attach the schema to the model

* Connect to your MongoDB users database using mongoose.connect(...)

* After connection:
    * Create 5 records using a for loop
    * Generate random user entries using faker methods, e.g.:        
        faker.name.firstName()
    * This kind of data initialisation via a script we call "seeding"

* Check the generated user documents in compass

* If your "seed script" worked alright, you are done

* If your script produced faulty records
    * Go into Compass and delete the records or
    * Go into the mongo shell to the user database and execute db.users.deleteMany({})
