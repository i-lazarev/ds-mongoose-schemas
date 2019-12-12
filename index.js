const faker = require("faker");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    firstName: String,
    lastName: String,
    isAdmin:Number
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
                email:faker.internet.email(),
                password:faker.internet.password(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                isAdmin:0
            })
            .then(user => {console.log(user)})
        }
    }
    userCreate()
})

