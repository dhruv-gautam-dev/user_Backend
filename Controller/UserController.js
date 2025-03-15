import MERNUser from "../model/UserModel.js";

export const getUsers = async (req,res)=>{
  try {
    const users = await  MERNUser.find(); //user[] = populated with the mongoDB data 
    res.json(users);

  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getUsersById = async (req,res)=>{  
  try {
    const users = await  MERNUser.findById(req.params.id); //user[] = fetching a single record on the mongoDB Data 
    res.json(users);

  } catch (error) {
    res.status(404).json({message: error.message})
  }
}


export const saveUser = async (req,res)=>{
  const user= new MERNUser(req.body);
  try {
    const insertedUser = await  user.save(); //user[] = populated with the mongoDB data 
    res.status(201).json(insertedUser);

  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

//-----------------------------Below method is used to create a new User ------------------ //

export const  updateUser = async(req,res)=>{
  try {
    const updateUser = await MERNUser.updateOne({_id:req.params.id}, {$set: req.body});
    console.log(req.body);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

export const  deleteUser = async(req,res)=>{
  try {
    const deleteuser = await MERNUser.deleteOne({_id:req.params.id});
    res.status(200).json(deleteuser);


  } catch (error) {
    res.status(400).json({message: error.message})
  }
}


export const checkAPI = async (req, res)=>{
  try {
    res.send('Hello, World!\n');
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}