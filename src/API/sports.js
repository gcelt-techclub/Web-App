import { db } from "../firebase_config";


import {v4 as uuidv4} from 'uuid';

import {
  collection,
  getDocs,
  query,
  where,
  limit,
  setDoc,
  addDoc
} from "firebase/firestore";

import { sportsRef } from "../firebase_config";

export const getSports = async (query = null) => {
  const sportsDocSnap = await getDocs(query ? query : sportsRef);

  const sportsCollection = sportsDocSnap.docs.map((doc) => doc.data());

  return sportsCollection;
};

export const createSport = async (payload) => {

  const { name, team_size, substitute, entry_fee, rules } = payload;

  const q = query(sportsRef, where("name", "==", name), limit(1));

  const res = (await getSports(q));

  console.log(res, ' is the state of firebase');

  if (res.length === 0) {
    // create the sport
    
    const id = uuidv4();

    await addDoc(sportsRef, { id, name, team_size, substitute, entry_fee, rules });

    return {
      msg: "Sports Created",
    };
  } else {
    return {
      msg: "Sports already exists",
    };
  }
};

export const updateSport = async(payload) => {
  const {id, name, team_size, substitute, entry_fee, rules } = payload;

  const q = query(sportsRef, where("id", "==", id), limit(1));

  const reqdSport = await getDocs(q);

  if(reqdSport.empty) return {msg : "Sports Not Found"};


  reqdSport.forEach(async (d) => {
    await setDoc(d.ref,{id, name, team_size, substitute, entry_fee, rules })
  });
  
  return {msg : "Sports Updated Successfully.."}
}