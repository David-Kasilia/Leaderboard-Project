const displayScoreList = (list) => {
  const scoreBoard = document.querySelector('.scoresBoard');

  scoreBoard.innerHTML = '';

  if (list.length === null) {
    scoreBoard.innerHTML = '<li class="listOne">No results</li>';
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score) => {
      scoreBoard.innerHTML += ` <li class="listOne">${score.user} : ${score.score}</li>`;
    });
};

export default displayScoreList;