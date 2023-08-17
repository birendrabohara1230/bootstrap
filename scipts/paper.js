import { semWiseSubject } from "../data/semWiseSubjects.js";
const sem = document.querySelector(".js-semester-name").textContent;

let currentsempaperHTML = '';
semWiseSubject.forEach((selectSem) => {
  let subjectsList = "";
  let i = 0;
  if (selectSem.sem === sem) {
     for (i = 0; i < selectSem.subjectName.length; i++) {
    subjectsList += `<li><a href="../../../${selectSem.subjectWisePaper[i]}">${selectSem.subjectName[i]}</a></li>`;
  }
    currentsempaperHTML = `
        <h4 class="js-second-semester">${sem}</h4>
            <ol>
            ${subjectsList}
            </ol>
        `;
  }
});

document.querySelector('.js-current-sem-paper').innerHTML = currentsempaperHTML;