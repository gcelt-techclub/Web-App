// Library Imports
import {v4 as uuidv4} from 'uuid';
import {
  getDocs,
  query,
  where,
  limit,
  setDoc,
  addDoc
} from "firebase/firestore";

// Database Ref
import { sportsRef } from "../firebase_config";

// Function to get Sports
export const getSports = async (query = null) => {

  // Getting the corresponding Document Snapshot and converting it into array
  const sportsDocSnap = await getDocs(query ? query : sportsRef);
  const sportsCollection = sportsDocSnap.docs.map((doc) => doc.data());

  return sportsCollection;
};


// Function to create a Sport
export const createSport = async (payload) => {

  // Destructuring the Payload
  const { name, team_size, substitute, entry_fee, rules,image_name } = payload;

  // Finding if the Sport already exists
  const q = query(sportsRef, where("name", "==", name), limit(1));
  const res = (await getSports(q));

  // If the Sports Does not exist, then push it into Database
  if (res.length === 0) {

    // Creating the Record and return a success msg
    const id = uuidv4();
    await addDoc(sportsRef, { id, name, team_size, substitute, entry_fee, rules,image_name });

    return {
      msg: "Sports Created",
    };
  } 
  
  // If the Sports already exists, then return an error msg
  else {
    return {
      msg: "Sports already exists",
    };
  }
};



export const updateSport = async(payload) => {

  // Destructuring the Payload
  const {id, name, team_size, substitute, entry_fee, rules,image_name } = payload;

  // Finding if the Sport already exists
  const q = query(sportsRef, where("id", "==", id), limit(1));
  const reqdSport = await getDocs(q);

  // If the Sport is not found, then return an error msg cz updating a sport which does not exist makes no sense
  if(reqdSport.empty) return {msg : "Sports Not Found"};

  // Updating the Sport instance found accordingly
  reqdSport.forEach(async (d) => {
    await setDoc(d.ref,{id, name, team_size, substitute, entry_fee, rules,image_name })
  });
  
  // Return a Success msg
  return {msg : "Sports Updated Successfully.."}
}