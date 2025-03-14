
import mongoose from "mongoose";  // Step 1: import the mongoose.

const MERNUser = mongoose.Schema({ // Step 2: Create the Schema.
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  }
});

export default mongoose.model('MERNUsers', MERNUser); // Schema object converted to the collection.  