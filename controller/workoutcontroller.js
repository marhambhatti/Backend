const person=require("../Schemas/person");


// Add  person (POST)
const addPerson=async(req,res)=>{
    try {
    const {name,age,password}=req.body;
    const newPerson=await person.create({name,age,password});
    
    res.status(200).json(newPerson);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const myJOKES=async(req,res)=>{
    try{
    const jokes=[
        {
            id:1,
            joke:"This iS First Jokes"
        },
        {
            id:2,
            joke:"This iS Second Jokes"
        },{
            id:3,
            joke:"This iS Third Jokes"
        },{
            id:4,
            joke:"This iS Fourth Jokes"
        }
    ];
    res.status(200).send(jokes);
}
    catch(error){
        res.status(400).send(error)
    }
}

module.exports={addPerson,myJOKES};
