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
            title:"This is First Jokes"
        },
        {
            id:2,
            title:"This is Second Jokes"
        },{
            id:3,
            title:"This is Third Jokes"
        },{
            id:4,
            title:"This is Fourth Jokes"
        }
    ];
    res.status(200).send(jokes);
}
    catch(error){
        res.status(400).send(error)
    }
}

module.exports={addPerson,myJOKES};
