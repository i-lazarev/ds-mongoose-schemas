const faker = require("faker");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String
},{versionKey: false})

const User = mongoose.model("users", UserSchema)

mongoose.connect("mongodb://localhost/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("open", () => {
    console.log("Mongodb Connection established")

    const userCreate = function(){
        for(i=0; i<5; i++){
            User.create({
                firstName: faker.name.findName()
            })
            .then(user => {console.log(user)})
        }
    }
    userCreate()
})

