const compare = (a, b) => {
  if (a.runTime < b.runTime) {
    return -1;
  }
  if (a.runTime > b.runTime) {
    return 1;
  }
  return 0;
};

export const sortHighscores = (scores) => {
  return scores.sort(compare);
};
