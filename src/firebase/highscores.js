import { database } from "./config";
import { getDocs, collection, addDoc } from "firebase/firestore";

const scores = collection(database, "highscores");

export const highscores = () =>
  getDocs(scores)
    .then((snapshot) => {
      let scores = [];
      snapshot.docs.forEach((doc) => {
        scores.push({ ...doc.data(), id: doc.id });
      });
      return scores;
    })
    .catch((err) => {
      console.log(err.message);
    });

export const addHighscore = async (level, time, name, runTime) => {
  const location = collection(database, "highscores");

  addDoc(location, {
    level: level.level,
    time: time,
    name: name,
    runTime: runTime,
  });
};
