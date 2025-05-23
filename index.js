//auto write name
const texts = ["RAWAN IBRAHIM", "A DEVELOPER"];
let currentTextIndex = 0;
let currentCharIndex = 0;
const element1 = document.getElementById("autoText1");
const element2 = document.getElementById("autoText2");

function typeEffect() {
    let currentText = texts[currentTextIndex];
    let element = currentTextIndex === 0 ? element1 : element2;
    let otherElement = currentTextIndex === 0 ? element2 : element1;
    if (currentCharIndex === 0) {
        element.innerHTML = "";
        otherElement.style.display = "none";
        element.style.display = "inline";
    }
    if (currentCharIndex < currentText.length) {
        element.innerHTML += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(() => {
            currentCharIndex = 0;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typeEffect();
        }, 2000);
    }
}
typeEffect();
// end auto write

// use AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1500
    });
});
//end use AOS

//increase numbers
document.querySelectorAll('.number').forEach((element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    let currentValue = 0;
    const increaseValue = () => {
        if (currentValue < target) {
            currentValue += Math.ceil(target / 100);
            element.textContent = `${currentValue}+`;
            setTimeout(increaseValue, 30);
        } else {
            element.textContent = `${target}+`;
        }
    };
    increaseValue();
});

//TimeLine
document.addEventListener("DOMContentLoaded", function () {
    const educationBtn = document.getElementById("educationBtn");
    const workBtn = document.getElementById("workBtn");
    const volunteerBtn = document.getElementById("volunteerBtn");

    const studySection = document.getElementById("study");
    const workSection = document.getElementById("work");
    const volunteerSection = document.getElementById("volunteer");

    function showSection(sectionToShow, activeBtn) {
        const sections = [studySection, workSection, volunteerSection];
        const buttons = [educationBtn, workBtn, volunteerBtn];

        sections.forEach(section => section.style.display = "none");
        buttons.forEach(btn => btn.classList.remove("active"));

        sectionToShow.style.display = "block";
        activeBtn.classList.add("active");

        handleScroll();
    }

    educationBtn.addEventListener("click", function () {
        showSection(studySection, educationBtn);
    });

    workBtn.addEventListener("click", function () {
        showSection(workSection, workBtn);
    });

    volunteerBtn.addEventListener("click", function () {
        showSection(volunteerSection, volunteerBtn);
    });

    function handleScroll() {
        const visibleTimelineContainer = document.querySelector(".timeline_container:not([style*='display: none'])");
        const timelineLine = visibleTimelineContainer.querySelector(".timeline-line");
        const containerTop = visibleTimelineContainer.getBoundingClientRect().top;
        const containerHeight = visibleTimelineContainer.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - containerTop) / containerHeight, 0), 1);
        timelineLine.style.height = `${progress * 100}%`;
    }

    document.addEventListener("scroll", handleScroll);
});
//dark mode
document.addEventListener("DOMContentLoaded", () => {
    const TOGGLE_BUTTONS = document.querySelectorAll(".toggle");

    // Load preference
    const SAVED_MODE = localStorage.getItem("darkMode") === "true";
    document.body.setAttribute("data-dark-mode", SAVED_MODE);

    TOGGLE_BUTTONS.forEach(button => {
        button.setAttribute("aria-pressed", SAVED_MODE);

        // Attach click event to each toggle button
        button.addEventListener("click", () => {
            const IS_PRESSED = button.getAttribute("aria-pressed") === "true";
            const NEW_MODE = !IS_PRESSED;

            document.body.setAttribute("data-dark-mode", NEW_MODE);
            localStorage.setItem("darkMode", NEW_MODE);

            // Update all toggle buttons to reflect the new mode
            TOGGLE_BUTTONS.forEach(btn => btn.setAttribute("aria-pressed", NEW_MODE));
        });
    });
});
//show menu mobile 

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const cancelBtn = document.querySelector('.cancel');
    const menu = document.querySelector('.menu');

    // Show menu
    menuIcon.addEventListener('click', () => {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    });

    // Hide menu
    cancelBtn.addEventListener('click', () => {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    });

    // Hide menu on nav link click
    const navLinks = document.querySelectorAll('.nav-mobile a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        });
    });
});


//skills
document.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills-section');
    const bars = document.querySelectorAll('.bar');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        bars.forEach((bar) => {
            const targetWidth = parseInt(bar.getAttribute('data-skill'), 10);
            let currentWidth = 0;

            const increaseWidth = () => {
                if (currentWidth < targetWidth) {
                    currentWidth += Math.ceil(targetWidth / 100);
                    bar.style.width = `${currentWidth}%`;
                    setTimeout(increaseWidth, 20);
                } else {
                    bar.style.width = `${targetWidth}%`;
                }
            };
            increaseWidth();
        });
    }
});

//Swiper
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//time line for mobile
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const sections = document.querySelectorAll(".timeline_container.mob-time");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const targetSectionId = button.getAttribute("data-section");
            sections.forEach(section => {
                section.style.display = section.id === targetSectionId ? "block" : "none";
            });
        });
    });
});


document.querySelectorAll('.title_type_skill').forEach(title => {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
        const rows = title.nextElementSibling;
        const arrow = title.querySelector('.second svg');
        if (arrow) arrow.classList.toggle('rotate');
        rows.classList.toggle('open');
  
        // Only trigger animation if the rows are opening
        if (rows.classList.contains('open')) {
            const skillBars = rows.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const skillLevel = bar.getAttribute('data-skill');
                bar.style.width = skillLevel;
  
                const rateSpan = bar.nextElementSibling;
                let percent = 0;
                const target = parseInt(skillLevel);
  
                // Animate skill percentage
                const interval = setInterval(() => {
                    if (percent >= target) {
                        clearInterval(interval);
                    } else {
                        percent++;
                        rateSpan.textContent = percent + '%';
                    }
                }, 10); 
            });
        }
    });
  });