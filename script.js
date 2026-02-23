const jobs = [
  {
    id: 1,
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "50,000 BDT",
    description: "Build responsive web interfaces.",
    status: "all"
  },
  {
    id: 2,
    companyName: "CodeCraft",
    position: "Backend Developer",
    location: "Chattogram",
    type: "Remote",
    salary: "60,000 BDT",
    description: "Develop REST APIs.",
    status: "all"
  },
  {
    id: 3,
    companyName: "Creative IT",
    position: "UI Designer",
    location: "Dhaka",
    type: "Full-time",
    salary: "40,000 BDT",
    description: "Design clean user interfaces.",
    status: "all"
  },
  {
    id: 4,
    companyName: "NextGen Tech",
    position: "MERN Stack Developer",
    location: "Remote",
    type: "Contract",
    salary: "70,000 BDT",
    description: "Full stack web development.",
    status: "all"
  },
  {
    id: 5,
    companyName: "BrainStation",
    position: "QA Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "35,000 BDT",
    description: "Test web applications.",
    status: "all"
  },
  {
    id: 6,
    companyName: "WebWorks",
    position: "WordPress Developer",
    location: "Sylhet",
    type: "Remote",
    salary: "30,000 BDT",
    description: "Build WordPress websites.",
    status: "all"
  },
  {
    id: 7,
    companyName: "InnoSoft",
    position: "React Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "55,000 BDT",
    description: "Develop SPA using React.",
    status: "all"
  },
  {
    id: 8,
    companyName: "DataHive",
    position: "Data Analyst",
    location: "Remote",
    type: "Full-time",
    salary: "65,000 BDT",
    description: "Analyze business data.",
    status: "all"
  }
];
let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("jobs-container");
  container.innerHTML = "";

  let filteredJobs = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  document.getElementById("tab-count").innerText =
    filteredJobs.length + " Jobs";

  if (filteredJobs.length === 0) {
    container.innerHTML = `
      <div class="no-jobs" style="text-align:center; width:100%;">
      <img class="no-jobs" src="./asset/jobs.png" alt="">
        <h3>No jobs Available</h3>
        <p>Please update job status to see here.</p>
      </div>
    `;
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
    <p><strong>${job.companyName}</strong></p>
    <button class="delete-btn" data-id="${job.id}"><i class="fa-solid fa-trash"></i></button>
      <h3>${job.position}</h3>
      <p>${job.location} | ${job.type}</p>
      <p>Salary: ${job.salary}</p>
      <p>${job.description}</p>
      <div class="buttons">
        <button class="action interview-btn" data-id="${job.id}">Interview</button>
        <button class="action rejected-btn" data-id="${job.id}">Rejected</button>
      </div>
      
    `;

    container.appendChild(card);
  });

  updateCounts();
}

function updateCounts() {
  document.getElementById("all-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejected-count").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("tab")) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");
    currentTab = e.target.dataset.tab;
    renderJobs();
  }

 
const interviewBtn = e.target.closest(".interview-btn");
if (interviewBtn) {
  const id = Number(interviewBtn.dataset.id);
  const job = jobs.find(j => j.id === id);
  job.status = job.status === "interview" ? "all" : "interview";
  renderJobs();
}

const rejectedBtn = e.target.closest(".rejected-btn");
if (rejectedBtn) {
  const id = Number(rejectedBtn.dataset.id);
  const job = jobs.find(j => j.id === id);
  job.status = job.status === "rejected" ? "all" : "rejected";
  renderJobs();
}




  const deleteBtn = e.target.closest(".delete-btn");

if (deleteBtn) {
  const id = Number(deleteBtn.dataset.id);
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

});

renderJobs();