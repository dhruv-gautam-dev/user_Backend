import express from "express"; // Step 1 : import the express
import { getUsers,getUsersById,saveUser, updateUser,deleteUser,checkAPI } from "../Controller/UserController.js";

const router = express.Router(); // Step 2: Create the router object 

// Step 3: Create the mapping 
router.get("/users",getUsers);
router.post("/users", saveUser );
router.get("/users/:id",getUsersById);
router.patch("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);
router.get("/check",checkAPI);          // this is to check the api is working or not.
export default router;