import {db} from '../firebase_config';

import { collection,getDocs,query,where,limit} from "firebase/firestore"; 

const userRef = collection(db, "users");

export const getUser = async (uid) => {
        console.log(uid);
        const userQuery = query(userRef, where("uid", "==", uid),limit(1));

    const userDocSnap = await getDocs(userQuery);

    userDocSnap.forEach((doc) =>{ 
        return doc;
    })  
}