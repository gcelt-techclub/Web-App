// Firebase Imports
import {getDocs,query,where,limit} from "firebase/firestore"; 

// DataBase Ref
import { userRef } from "../firebase_config";


// Function to get the details of a user given UID 
export const getUser = async (uid) => {

    // Constructing the Query and fetching the corresponding Documents
    const userQuery = query(userRef, where("uid", "==", uid),limit(1));
    const userDocSnap = await getDocs(userQuery);

    // Returning the Corresponding Record from the whole Document Snapshot
    userDocSnap.forEach((doc) =>{ 
        return doc;
    })  
}