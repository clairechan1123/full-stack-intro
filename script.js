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
    "url": "https://www.instagram.com/tcgs_msc_4th/",
    "image": "數理營.jpg"
  },
  {
    "title": "《迎新》",
    "description": "一中女中數資聯合迎新，活動組。",
    "date": "2023/09/24",
    "url": " ",
    "image": "迎新.jpg"
  },
  {
    "title": "《凰族童軍團》",
    "description": "台中女中凰族童軍團53屆，復社社長。",
    "date": "2023/08",
    "url": "https://www.instagram.com/tcgs_scout/",
    "image": "phoenix.jpg"
  },
  {
    "title": "《龍族凰族迎新露營》",
    "description": "一中女中童軍團聯合迎新露營，<br>總召。",
    "date": "2023/11/04-11/05",
    "url": "https://www.instagram.com/tcgs_scout/",
    "image": "迎新露營.jpg"
  },
  {
    "title": "《𝐈𝐧𝐬𝐨𝐦𝐧𝐢𝐚》",
    "description": "臺中女中數理資優班第12屆成果發表會，總召。",
    "date": "2024/06/12-06/13",
    "url": "https://www.instagram.com/insomnia_tcgs36th.18/",
    "image": "insomnia.jpg"
  }
]

const projectsList = document.querySelector(".project-list");

/* === 修改後的 renderProjects (配合電影海報樣式) === */
function renderProjects(list) {
    // 安全檢查
    if (!projectsList) return;

    projectsList.innerHTML = list
        .map(p => {
            // 判斷有沒有圖片，沒有的話就不設背景(會顯示 CSS 預設的深灰色)
            // 你的資料有些 image 是空字串 ""，這行會處理它
            const bgStyle = p.image ? `background-image: url('${p.image}');` : '';

            return `
            <div class="project-item" data-url="${p.url}" style="${bgStyle}">
                <div class="project-content-wrapper">
                    <h3 class="title">${p.title}</h3>
                    <span class="meta">${p.date}</span>
                    
                    <div class="content">
                        <p>${p.description.replace(/\n/g, "<br>")}</p>
                    </div>
                </div>
            </div>
            `;
        })
        .join("");

    // 重新綁定點擊事件 (這行不用改，維持你原本寫好的函式即可)
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
    "title": "Cub Scout 幼童軍",
    "description": "2019全國第十一次童軍大露營<br><img src='全11.jpg'>",
    "date": "2014-2019",
    "url": "https://www.facebook.com/groups/553272231464860",
    "image": "cub.jpg"
  },
  {
    "title": "Scout 童軍",
    "description": "技能考驗營<br><img src='考驗營1.jpg'><br><img src='考驗營2.jpg'>",
    "date": "2019-2022",
    "url": "https://www.facebook.com/groups/553272231464860",
    "image": "scout.jpg"
  },
  {
    "title": "Venture Scout 行義童軍",
    "description": "韓國第25屆世界大露營<br><img src='WSJ1.jpg'><br><img src='WSJ2.jpg'><br><img src='WSJ3.jpg'><br><img src='WSJ4.jpg'>",
    "date": "2022-2025",
    "url": "https://www.facebook.com/groups/553272231464860",
    "image": "venture.jpg"
  },
  {
    "title": "Ranger Girl Scout 蘭姐女童軍",
    "description": "第9屆全國女童軍大露營<br><img src='全9.jpg'>",
    "date": "2023-2025",
    "url": "https://www.instagram.com/tcgs_scout/",
    "image": "ranger.jpg"
  },
  {
    "title": "Rover Scout 羅浮童軍",
    "description": "菲律賓Intercultureal Dialogue Workshop<br><img src='DIworkshop.jpg'><br><br>亞太區青年論壇<br><img src='YF1.jpg'><br><img src='YF2.jpg'><br><img src='YF3.jpg'><br><img src='YF4.jpg'>",
    "date": "2025-",
    "url": "https://www.instagram.com/apsyftaiwan/",
    "image": "rover.jpg"
  }
]

const scoutContainer = document.querySelector(".scout-accordion");

// 3. 渲染函式 (產生手風琴 HTML)
function renderScout(list) {
    // 安全檢查：如果 HTML 沒寫這個容器就跳過
    if (!scoutContainer) return;

    scoutContainer.innerHTML = list.map((p, index) => {
        // 注意這裡的結構是為了配合手風琴 CSS
        return `
        <div class="scout-card" 
             style="background-image: url('${p.image}');" 
             onclick="openScoutModal(${index})">
            
            <div class="scout-overlay">
                <h3>${p.title}</h3>
                <p class="scout-hint">Click for details ↗</p>
            </div>
        </div>
        `;
    }).join("");
}

// 4. 執行渲染
renderScout(scout);


/* =========================================
   Modal 全螢幕視窗邏輯 (不用動)
   ========================================= */
const modal = document.getElementById("scout-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeModalBtn = document.querySelector(".close-modal");

// 開啟視窗函式
window.openScoutModal = function(index) {
    const item = scout[index];
    
    // 把資料填進去
    modalImg.src = item.image;
    modalTitle.textContent = item.title;
    modalDate.textContent = item.date;
    // 處理換行符號
    modalDesc.innerHTML = item.description ? item.description.replace(/\n/g, "<br>") : "";
    
    // 如果有網址才顯示按鈕
    if (item.url && item.url.trim() !== "") {
        modalLink.href = item.url;
        modalLink.style.display = "inline-block";
    } else {
        modalLink.style.display = "none";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // 鎖住背景滾動

    document.querySelector(".modal-text").scrollTop = 0;
}

// 關閉視窗函式
function closeScoutModal() {
    if(modal) modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// 綁定關閉按鈕
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeScoutModal);
}
// 點擊背景關閉
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeScoutModal();
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

