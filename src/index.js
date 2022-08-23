import './index.css';

const leaders = {
  leader1: ['Name', 100],
  leader2: ['Name', 20],
  leader3: ['Name', 50],
  leader4: ['Name', 78],
  leader5: ['Name', 125],
  leader6: ['Name', 77],
  leader7: ['Name', 42],
};

const leaderBoard = document.querySelector('.scoresBoard');

leaderBoard.innerHTML = `
<ul>
<li class="listOne">${leaders.leader1[0]}: ${leaders.leader1[1]}</li>
<li class="listTwo">${leaders.leader2[0]}: ${leaders.leader2[1]}</li>
<li  class="listOne">${leaders.leader3[0]}: ${leaders.leader3[1]}</li>
<li class="listTwo">${leaders.leader4[0]}: ${leaders.leader4[1]}</li>
<li  class="listOne">${leaders.leader5[0]}: ${leaders.leader5[1]}</li>
<li class="listTwo">${leaders.leader6[0]}: ${leaders.leader6[1]}</li>
<li  class="listOne">${leaders.leader7[0]}: ${leaders.leader7[1]}</>
</ul>`;
