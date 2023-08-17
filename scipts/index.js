import {semWiseSubject} from '../data/semWiseSubjects.js';

let semWiseSubjectHTML = "";
semWiseSubject.forEach((semAndSubject) => {
  let i = 0;
  let subjectListHTML = "";
  const subjects = semAndSubject.subjectName;
  const paperLinks = semAndSubject.subjectWisePaper;
  for (i = 0; i < subjects.length; i++) {
    subjectListHTML += ` <li><a href="${paperLinks[i]}">${subjects[i]}</a></li>
    `;
  }
  semWiseSubjectHTML += `
  <div class="row justify-content-center" id="csit-sem-sub">
  <div class="col-lg-3 shadow-lg  rounded mt-3  zoominout">
     <h4>${semAndSubject.sem}</h4>
     <ol>
        ${subjectListHTML}
     </ol>
   </div>
   </div>
     `;
});

document.querySelector(".js-semWiseSubjects").innerHTML = semWiseSubjectHTML;
