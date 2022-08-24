import './index.css';
import { fetchScore, addScores } from './modules/scoresApi.js';
import displayScoreList from './modules/scoreBoard.js';

window.onload = async () => {
  displayScoreList(await fetchScore());
};
const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', async () => {
  const list = await fetchScore();
  displayScoreList(list);
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newScore = {
    user: document.querySelectorAll('input')[0].value.trim(),
    score: document.querySelectorAll('input')[1].value.trim(),
  };
  form.reset();
  await addScores(newScore);
});