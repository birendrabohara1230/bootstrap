const semWiseSubject = [
  {
    sem: "First Semester",
    subjectName: [
      "Compulsory English",
      "Information Technology Fundamentals",
      "Calculus And Analytical Geometry",
      "Electronic Physics",
      "Programming Fundamentals And C Programming",
    ],
  },
  {
    sem: "Second Semester",
    subjectName: [
      "Linear Algebra",
      "Mechanics And Electrodynamics",
      "Digital Logic Design",
      "Microprocessor System",
      "Data Structure And Algorithms",
    ],
  },
  {
    sem: "Third Semester",
    subjectName: [
      "Computer Architecture",
      "Discrete Structure",
      "Introduction To Management",
      "Object Oriented Programming with C++",
      "Operating System",
      "Statistics and Probability",
    ],
  },
  {
    sem: "Fourth Semester",
    subjectName: [
      "System Analysis and Design",
      "Numerical Methods",
      "Database Management System",
      "Applied Statistics",
      "Data Communication and Networks",
      "Theory Of Computation",
    ],
  },
  {
    sem: "Fifth Semester",
    subjectName: [
      "Computer Graphics",
      "Data Analysis and Algorithms",
      "Compiler Design",
      "Simulation and Modeling",
      "Artificial Intelligence",
      "Web Technology I",
    ],
  },
  {
    sem: "Sixth Semester",
    subjectName: [
      "Introduction to Cryptography",
      "Java Progamming I",
      "Research Methodology for CS",
      "Software Engineering",
      "Web Tech II",
      "Minor Project I",
    ],
  },
  {
    sem: "Seventh Semester",
    subjectName: [
      "E-commerce",
      "Advanced Java Programming",
      "Object Oriented Analysis and Design",
      "Minor Project II",
      "Database Administration (Elective I)",
      "Data Mining and Warehousing (Elective II)",
    ],
  },
  {
    sem: "Eight Semester",
    subjectName: [
      "Parallel Computing",
      "Advanced Database Design (Elective III)",
      "Distributed Database Management System (Elective IV)",
      "E-Business and E-Governance (Elective V)",
      "Internship",
    ],
  },
];

let semWiseSubjectHTML = "";
semWiseSubject.forEach((semAndSubject) => {
  let subjectListHTML = "";
  const subjects = semAndSubject.subjectName;
  for (i = 0; i < subjects.length; i++) {
    subjectListHTML += ` <li><a href="csit/4sem/sad/2079.html">${subjects[i]}</a></li>
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
