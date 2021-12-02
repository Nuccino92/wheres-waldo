import { database } from "./config";
import { getDocs, orderBy, query, collection } from "firebase/firestore";

// collection ref
const colRef = collection(database, "levels");

const q = query(colRef, orderBy("level", "asc"));

// get collection data
export const levels = () =>
  getDocs(q)
    .then((snapshot) => {
      let levels = [];
      snapshot.docs.forEach((doc) => {
        levels.push({ ...doc.data(), id: doc.id });
      });
      return levels;
    })
    .catch((err) => {
      console.log(err.message);
    });
