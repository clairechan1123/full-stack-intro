function attachProjectClickListeners() {
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
}

// Typewriter effect
const typewriterElement = document.querySelector(".typewriter");
const texts = ["Freshman.", "NYCU CS.", "Full stack developer...", "Rover Scout.", "Volleyball player...", "ENFP (Happy dog :D)"];
let textIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    const typingSpeed = 100; 
    const deletingSpeed = 50; 
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;
    
    if (!isDeleting) {
    // typing phase
    let charIndex = 0;
    typewriterElement.textContent = '';
    
    const typingInterval = setInterval(() => {
        typewriterElement.textContent += currentText[charIndex];
        charIndex++;
        
        if (charIndex === currentText.length) { // finished typing
        clearInterval(typingInterval);
        // pause after typing, then start deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, pauseAfterTyping);
        }
    }, typingSpeed);
    
    } else {
    // deleting phase
    let charIndex = currentText.length;
    
    const deletingInterval = setInterval(() => {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
        clearInterval(deletingInterval);
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        
        setTimeout(() => {
            typeWriter();
        }, pauseAfterDeleting);
        }
    }, deletingSpeed);
    }
}

// Start the typewriter effect
typeWriter();

const projects = [
  {
    "title": "《數理奇航·宙數迴戰》",
    "description": "第三屆臺中女中數理科學營，活動長。",
    "date": "2023/07/01-07/03",
    "url": "https://www.instagram.com/tcgs_msc_4th/"
  },
  {
    "title": "《迎新》",
    "description": "一中女中數資聯合迎新，活動組。",
    "date": "2023/09/24",
    "url": "https://www.instagram.com/tcgs._.318_/"
  },
  {
    "title": "《龍族凰族迎新露營》",
    "description": "一中女中童軍團聯合迎新露營，總召。",
    "date": "2023/11/04-11/05",
    "url": "https://www.instagram.com/tcgs_scout/"
  },
  {
    "title": "《𝐈𝐧𝐬𝐨𝐦𝐧𝐢𝐚》",
    "description": "臺中女中數理資優班第12屆成果發表會，總召。",
    "date": "2024/06/12-06/13",
    "url": "https://www.instagram.com/insomnia_tcgs36th.18/"
  }
]

const projectsList = document.querySelector(".project-list");

function renderProjects(list) {
    projectsList.innerHTML = list
        .map(p => {
            return `
            <div class="project-item" data-url="${p.url}" target="_blank">
                <h3 class="title">${p.title}</h3>
                <div class="content">
                    <p class="meta">${p.date}</p>
                    <p>${p.description.replace(/\n/g, "<br>")}</p>
                </div>
                <div class="project-img" style="background-image: url('${p.image}')"></div>
            </div>
            `;
        })
        .join("");
    attachProjectClickListeners();
}

// first time load all projects
renderProjects(projects);

// Search functionality
const searchInput = document.getElementById("project-search-input");
const searchBtn = document.getElementById("project-search-btn");

function searchProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm)
    );
    renderProjects(filteredProjects);
}

searchBtn.addEventListener("click", searchProjects);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchProjects();
    }
});

const scout = [
  {
    "title": "幼童",
    "description": " ",
    "date": "2025/09/22",
    "url": "https://github.com/NYCU-SDC/full-stack-intro-frontend"
  },
  {
    "title": "童軍",
    "description": " ",
    "date": "2025/08/29",
    "url": "https://github.com/NYCU-SDC/full-stack-advanced-frontend"
  },
  {
    "title": "行義-世大",
    "description": " ",
    "date": "2025/05/29",
    "url": "https://github.com/NYCU-SDC/core-system-frontend"
  },
  {
    "title": "蘭姐-凰族",
    "description": " 。",
    "date": "2025/04/16",
    "url": "https://github.com/NYCU-SDC/clustron-frontend"
  },
  {
    "title": "羅浮-論壇、菲律賓",
    "description": " ",
    "date": "2025/04/16",
    "url": "https://github.com/NYCU-SDC/clustron-frontend"
  }
]

const scoutlife = document.querySelector(".scout-life");

function renderScout(scoutlist) {
    scoutlife.innerHTML = scoutlist
        .map(p => {
            return `
            <div class="scout-item" data-url="${p.url}" target="_blank">
                <h3 class="title">${p.title}</h3>
                <div class="content1">
                    <p>${p.description.replace(/\n/g, "<br>")}</p>
                    <p class="meta">Created on ${p.date}</p>
                </div>
                <div class="scout-img" style="background-image: url('${p.image}')"></div>
            </div>
            `;
        })
        .join("");
    attachProjectClickListeners();
}

// first time load all projects
renderScout(scout);

function attachProjectClickListeners() {
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
}

function attachProjectClickListeners() {
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item a");

function updateActiveNav() {
    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        // 如果畫面捲動位置在這個 section 的範圍內
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute("id");
        }
    });
    
    // 更新 nav 連結的 active 狀態
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {
    item.addEventListener("click", function() {
        const url = this.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank");
        }
    });
});

/* Fade-in & out */
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px"
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

const fadeInSections = document.querySelectorAll(".fade-in-section");
fadeInSections.forEach(section => {
    sectionObserver.observe(section);
});

