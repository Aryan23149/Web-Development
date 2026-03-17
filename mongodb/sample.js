db.createCollection("non_fiction",{
    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a string , string is required'
                }
                ,price:{
                    bsonType:'number'
                    ,description:'must be a number, number is required'
                }
            }
        }
    },
    validationAction:"error"
})
db.runCommand({
    collMod:'non_fiction',
    validator:{
        $jsonSchema:{
            required:['name','price','isReal'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a string , string is required'
                }
                ,price:{
                    bsonType:'number',
                    description:'must be a number, number is required'
                },
                isReal:{
                    bsonType:'bool',
                    description:'must be a boolean value, either true or false'
                }
            }
        }
    },
    validationAction:'error'
})