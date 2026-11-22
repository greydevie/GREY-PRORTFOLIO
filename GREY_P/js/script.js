/**
 * ==========================================================================
 * PORTFOLIO INTERACTIVITY & DATA CONFIGURATION
 * Author: Greymher Llyod M. Loleng
 * Description: Easy-to-edit data objects + modular Vanilla JS features.
 * ==========================================================================
 */

/* ==========================================================================
   1. EASY-TO-EDIT PERSONAL & PORTFOLIO DATA
   Update any values below to customize your portfolio content immediately.
   ========================================================================== */
const PORTFOLIO_DATA = {
  profile: {
    fullName: "Greymher Llyod M. Loleng",
    role: "IT Student",
    location: "Philippines",
    email: "greymher.loleng@example.com", // Replace with your real email address
    phone: "+63 917 555 0194",           // Placeholder number — replace anytime
    shortIntro:
      "I am an Information Technology student who enjoys learning about programming, web development, and technology. I am continuously improving my skills by building projects and exploring new technologies.",
    typingRoles: [
      "Aspiring Web Developer",
      "2nd Year BSIT Student",
      "Cisco Certified Learner",
      "Problem Solver"
    ]
  },

  // Realistic, honest proficiency levels (easily editable)
  skills: [
    {
      category: "Programming",
      badge: "Core Languages",
      items: [
        { name: "HTML", level: 75, label: "Intermediate" },
        { name: "CSS", level: 70, label: "Intermediate" },
        { name: "JavaScript", level: 55, label: "Developing" },
        { name: "Java", level: 50, label: "Developing" },
        { name: "C", level: 30, label: "Foundational" },
        { name: "Python", level: 10, label: "Beginner" }
      ]
    },
    {
      category: "Tools and Technologies",
      badge: "Workflow & Stack",
      items: [
        { name: "Visual Studio Code", level: 80, label: "Proficient" },
        { name: "Git and GitHub", level: 30, label: "Foundational" },
        { name: "Bootstrap", level: 30, label: "Foundational" },
        { name: "MySQL (SQL)", level: 30, label: "Foundational" }
      ]
    }
  ],

  // Featured Capstone Project (Ready for you to add future projects anytime)
  projects: [
    {
      id: "rfid-attendance",
      title: "RFID-Based Attendance System",
      category: "Other Projects",
      featured: true,
      description:
        "Capstone project developed at Children's of Fatima School Inc. SHS that automates student attendance logging using RFID card scanning, real-time timestamp recording, and structured MySQL database records.",
      features: [
        "Instant student identification via RFID tag/card tap",
        "Automated time-in / time-out logging with date and status verification",
        "Structured SQL database records for attendance tracking and reporting",
        "Reduces manual roll-call errors and saves classroom time"
      ],
      technologies: ["RFID Hardware", "Programming Logic", "MySQL", "HTML/CSS"],
      liveUrl: "", // Leave empty to open interactive project details modal
      repoUrl: "https://github.com/", // Replace with your actual GitHub repository URL
      accentStart: "#3b82f6",
      accentEnd: "#06b6d4",
      codeLabel: "RFID // ATTENDANCE CAPSTONE"
    }
  ],

  // Cisco Badges & Certificates verified via Credly (easily editable titles/dates)
  certifications: [
    {
      id: "cisco-badge-1",
      issuer: "Cisco Networking Academy",
      title: "Cisco Verified Digital Badge I",
      description:
        "Awarded by Cisco and verified on Credly for completing foundational IT and networking coursework.",
      badgeCode: "CREDLY // 89827DE4",
      credlyUrl: "https://www.credly.com/badges/89827de4-81e1-4b37-bb57-48d5cabdef5b/public_url"
    },
    {
      id: "cisco-badge-2",
      issuer: "Cisco Networking Academy",
      title: "Cisco Verified Digital Badge II",
      description:
        "Awarded by Cisco and verified on Credly demonstrating continued progress in technical IT competencies.",
      badgeCode: "CREDLY // DDE46D72",
      credlyUrl: "https://www.credly.com/badges/dde46d72-4cea-4cb8-9206-17beaf2784b7/public_url"
    }
  ],

  // Educational background timeline
  education: [
    {
      course: "Bachelor of Science in Information Technology (BSIT)",
      school: "Mabalacat City College",
      year: "2nd Year College (Present)",
      coursework: [
        "Web Systems and Technologies (HTML, CSS, JavaScript)",
        "Computer Programming (Java, C, Python)",
        "Database Management Systems (SQL / MySQL)",
        "Networking & IT Fundamentals (Cisco)"
      ],
      achievements: [
        "Earned 2 verified Cisco digital badges on Credly",
        "Continuously building responsive web applications and programming foundations"
      ]
    },
    {
      course: "Senior High School",
      school: "Children's of Fatima School Inc. SHS",
      year: "Completed",
      coursework: [
        "Information & Communications Technology Foundations",
        "System Analysis & Capstone Project Development"
      ],
      achievements: [
        "Developed an RFID-Based Attendance System as a Senior High School capstone project",
        "Collaborated on hardware-software integration and database record management"
      ]
    }
  ],

  /*
   * OPTIONAL CONTACT BACKEND CONFIGURATION
   * Leave endpoint empty ("") to keep honest client-side validation mode.
   * To enable real email delivery via Formspree:
   *   1. Create a free form at https://formspree.io/
   *   2. Paste your endpoint URL below, e.g., "https://formspree.io/f/yourFormId"
   */
  contactService: {
    formspreeEndpoint: ""
  }
};

/* ==========================================================================
   2. APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initProfileBindings();
  initImageFallbacks();
  initThemeToggle();
  initNavigation();
  initTypingEffect();
  renderSkills();
  renderProjects("all");
  initProjectFilters();
  renderCertifications();
  renderEducation();
  initContactForm();
  initScrollEffects();
  initModal();
  renderMarquee();
  initSectionTitles();
  initHeroCanvas();
  enhanceInteractive();
  initCursorFollower();
  initSpotlight();
  initRipple();
  initParallax();
  updateCopyrightYear();
});

/* ==========================================================================
   3. PROFILE BINDINGS & IMAGE FALLBACKS
   ========================================================================== */
function initProfileBindings() {
  const { profile } = PORTFOLIO_DATA;

  document.querySelectorAll('[data-profile="fullName"]').forEach((el) => {
    el.textContent = profile.fullName;
  });

  document.querySelectorAll('[data-profile="role"]').forEach((el) => {
    el.textContent = profile.role;
  });

  document.querySelectorAll('[data-profile="location"]').forEach((el) => {
    el.textContent = profile.location;
  });

  document.querySelectorAll('[data-profile="shortIntro"]').forEach((el) => {
    el.textContent = profile.shortIntro;
  });

  document.querySelectorAll('[data-profile="email"]').forEach((el) => {
    el.textContent = profile.email;
    if (el.tagName === "A") {
      el.href = `mailto:${profile.email}`;
    }
  });

  document.querySelectorAll('[data-profile="phone"]').forEach((el) => {
    el.textContent = profile.phone;
    if (el.tagName === "A") {
      el.href = `tel:${profile.phone.replace(/\s+/g, "")}`;
    }
  });
}

function initImageFallbacks() {
  const imagePairs = [
    { imgId: "heroProfileImg", fallbackId: "heroProfileFallback" },
    { imgId: "aboutProfileImg", fallbackId: "aboutProfileFallback" }
  ];

  imagePairs.forEach(({ imgId, fallbackId }) => {
    const img = document.getElementById(imgId);
    const fallback = document.getElementById(fallbackId);
    if (!img || !fallback) return;

    const showFallback = () => {
      img.style.display = "none";
      fallback.style.display = "flex";
    };

    img.addEventListener("error", showFallback);

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  });
}

/* ==========================================================================
   4. DARK / LIGHT THEME TOGGLE (WITH LOCALSTORAGE)
   ========================================================================== */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  } else {
    root.setAttribute("data-theme", "dark");
  }

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", nextTheme);
    clearTimeout(themeTransitionTimer);
    themeTransitionTimer = setTimeout(() => root.classList.remove("theme-transition"), 650);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

/* ==========================================================================
   5. NAVIGATION & MOBILE HAMBURGER MENU
   ========================================================================== */
function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

/* ==========================================================================
   6. TYPING EFFECT IN HERO SECTION
   ========================================================================== */
function initTypingEffect() {
  const target = document.getElementById("typingText");
  const roles = PORTFOLIO_DATA.profile.typingRoles;
  if (!target || !roles || roles.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    target.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;

  function tick() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentRole.substring(0, charIndex);
    }

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1900;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }

    setTimeout(tick, delay);
  }

  setTimeout(tick, 1800);
}

/* ==========================================================================
   7. SKILLS SECTION RENDERING & ANIMATION
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(
      (group) => `
      <article class="skill-category-card glass-card reveal">
        <div class="skill-category-title">
          <h3>${escapeHTML(group.category)}</h3>
          <span class="category-badge">${escapeHTML(group.badge)}</span>
        </div>
        <div class="skills-list">
          ${group.items
            .map(
              (skill) => `
              <div class="skill-item">
                <div class="skill-meta">
                  <span class="skill-name">${escapeHTML(skill.name)}</span>
                  <span class="skill-level-label">${escapeHTML(skill.label)} &bull; ${skill.level}%</span>
                </div>
                <div class="progress-track" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${escapeHTML(skill.name)} proficiency">
                  <div class="progress-fill" data-width="${skill.level}%"></div>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      </article>
    `
    )
    .join("");
}

/* ==========================================================================
   8. PROJECTS RENDERING & CATEGORY FILTERING
   ========================================================================== */
function createProjectThumbnailSVG(project) {
  return `
    <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHTML(project.title)} preview thumbnail">
      <defs>
        <linearGradient id="grad-${project.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${project.accentStart}" stop-opacity="0.32" />
          <stop offset="100%" stop-color="${project.accentEnd}" stop-opacity="0.18" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#grad-${project.id})" />
      <circle cx="540" cy="60" r="120" fill="${project.accentStart}" opacity="0.14" />
      <circle cx="100" cy="310" r="100" fill="${project.accentEnd}" opacity="0.14" />
      <rect x="44" y="54" width="552" height="252" rx="16" fill="rgba(15, 23, 42, 0.55)" stroke="rgba(255,255,255,0.14)" />
      <circle cx="72" cy="80" r="6" fill="#ef4444" opacity="0.8" />
      <circle cx="92" cy="80" r="6" fill="#f59e0b" opacity="0.8" />
      <circle cx="112" cy="80" r="6" fill="#10b981" opacity="0.8" />
      <text x="320" y="182" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="22" font-weight="700" fill="#f8fafc" letter-spacing="2">
        ${escapeHTML(project.codeLabel)}
      </text>
      <text x="320" y="216" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" fill="#cbd5e1">
        ${escapeHTML(project.technologies.join(" • "))}
      </text>
    </svg>
  `;
}

function getFilteredProjects(filterCategory) {
  return filterCategory === "all"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((project) => project.category === filterCategory);
}

function renderProjects(filterCategory, { immediate = false } = {}) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = getFilteredProjects(filterCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-filter-msg">No projects listed under <strong>${escapeHTML(filterCategory)}</strong> yet — more projects coming soon!</p>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (project) => `
      <article class="project-card glass-card reveal${immediate ? " visible" : ""}" data-project-id="${escapeHTML(project.id)}">
        <div class="project-thumb">
          ${createProjectThumbnailSVG(project)}
          <span class="project-category-tag">${escapeHTML(project.category)}</span>
          ${project.featured ? `<span class="project-featured-tag">Capstone</span>` : ""}
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-desc">${escapeHTML(project.description)}</p>
          <div class="project-tech-list">
            ${project.technologies
              .map((tech) => `<span class="tech-chip">${escapeHTML(tech)}</span>`)
              .join("")}
          </div>
          <div class="project-actions">
            <button type="button" class="btn btn-primary view-project-btn" data-project-id="${escapeHTML(project.id)}">
              View Project
            </button>
            <a href="${escapeHTML(project.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              View Source Code
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  grid.querySelectorAll(".view-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });

  enhanceInteractive(grid);
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const category = btn.getAttribute("data-filter") || "all";
      changeProjectFilter(category);
    });
  });
}

/* ==========================================================================
   9. CERTIFICATIONS & CISCO BADGES RENDERING
   ========================================================================== */
function renderCertifications() {
  const grid = document.getElementById("certificationsGrid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.certifications
    .map(
      (cert) => `
      <article class="cert-card glass-card reveal">
        <div class="cert-header">
          <div class="cert-emblem" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
          </div>
          <div>
            <span class="cert-issuer">${escapeHTML(cert.issuer)}</span>
            <h3 class="cert-title">${escapeHTML(cert.title)}</h3>
          </div>
        </div>
        <p class="cert-desc">${escapeHTML(cert.description)}</p>
        <div class="cert-meta-row">
          <span class="verified-pill">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Verified on Credly
          </span>
          <span class="tech-chip">${escapeHTML(cert.badgeCode)}</span>
        </div>
        <a href="${escapeHTML(cert.credlyUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-full">
          <span>Verify Badge on Credly</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </article>
    `
    )
    .join("");
}

/* ==========================================================================
   10. PROJECT DETAILS MODAL
   ========================================================================== */
function initModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalClose");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeProjectModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeProjectModal();
    }
  });
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal || modal.hidden) return;

  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  clearTimeout(modalCloseTimer);
  modalCloseTimer = setTimeout(
    () => {
      modal.hidden = true;
      if (lastFocusedEl) lastFocusedEl.focus({ preventScroll: true });
    },
    reduceMotion() ? 0 : 340
  );
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find((item) => item.id === projectId);
  const modal = document.getElementById("projectModal");
  if (!project || !modal) return;

  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;

  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = project.features
    .map((feature) => `<li>${escapeHTML(feature)}</li>`)
    .join("");

  const techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = project.technologies
    .map((tech) => `<span class="tech-chip">${escapeHTML(tech)}</span>`)
    .join("");

  const liveLink = document.getElementById("modalLiveLink");
  if (project.liveUrl) {
    liveLink.href = project.liveUrl;
    liveLink.style.display = "inline-flex";
    if (project.liveUrl.startsWith("#")) {
      liveLink.removeAttribute("target");
    } else {
      liveLink.setAttribute("target", "_blank");
    }
  } else {
    liveLink.style.display = "none";
  }

  const repoLink = document.getElementById("modalRepoLink");
  repoLink.href = project.repoUrl;

  clearTimeout(modalCloseTimer);
  lastFocusedEl = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  void modal.offsetWidth; // flush layout so the open transition runs
  modal.classList.add("is-open");
  document.getElementById("modalClose").focus({ preventScroll: true });
}

/* ==========================================================================
   11. EDUCATION TIMELINE RENDERING
   ========================================================================== */
function renderEducation() {
  const timeline = document.getElementById("educationTimeline");
  if (!timeline) return;

  timeline.innerHTML = PORTFOLIO_DATA.education
    .map(
      (edu) => `
      <article class="timeline-item reveal">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <h3 class="timeline-course">${escapeHTML(edu.course)}</h3>
            <span class="timeline-year">${escapeHTML(edu.year)}</span>
          </div>
          <p class="timeline-school">${escapeHTML(edu.school)}</p>
          <div class="timeline-meta-grid">
            <div>
              <h4 class="timeline-subhead">Relevant Coursework</h4>
              <ul class="timeline-list">
                ${edu.coursework.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
              </ul>
            </div>
            <div>
              <h4 class="timeline-subhead">Achievements &amp; Focus</h4>
              <ul class="timeline-list">
                ${edu.achievements.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

/* ==========================================================================
   12. CONTACT FORM VALIDATION & HONEST SUBMISSION HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusBox = document.getElementById("formStatus");
  if (!form || !statusBox) return;

  const fields = {
    fullName: {
      input: document.getElementById("fullName"),
      error: document.getElementById("fullNameError"),
      validate: (val) => {
        if (!val.trim()) return "Please enter your full name.";
        if (val.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      }
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: (val) => {
        if (!val.trim()) return "Please enter your email address.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(val.trim())) return "Please enter a valid email address.";
        return "";
      }
    },
    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("subjectError"),
      validate: (val) => {
        if (!val.trim()) return "Please enter a subject.";
        if (val.trim().length < 3) return "Subject must be at least 3 characters.";
        return "";
      }
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("messageError"),
      validate: (val) => {
        if (!val.trim()) return "Please enter your message.";
        if (val.trim().length < 10) return "Message must be at least 10 characters long.";
        return "";
      }
    }
  };

  Object.values(fields).forEach(({ input, error, validate }) => {
    const runValidation = () => {
      const message = validate(input.value);
      error.textContent = message;
      input.classList.toggle("invalid", Boolean(message));
      return !message;
    };

    input.addEventListener("blur", runValidation);
    input.addEventListener("input", () => {
      if (input.classList.contains("invalid")) {
        runValidation();
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusBox.className = "form-status";
    statusBox.textContent = "";

    let isFormValid = true;
    Object.values(fields).forEach(({ input, error, validate }) => {
      const msg = validate(input.value);
      error.textContent = msg;
      input.classList.toggle("invalid", Boolean(msg));
      if (msg) isFormValid = false;
    });

    if (!isFormValid) {
      statusBox.className = "form-status error";
      statusBox.textContent = "Please correct the highlighted fields before submitting.";
      return;
    }

    const endpoint = PORTFOLIO_DATA.contactService.formspreeEndpoint.trim();

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: fields.fullName.input.value.trim(),
            email: fields.email.input.value.trim(),
            subject: fields.subject.input.value.trim(),
            message: fields.message.input.value.trim()
          })
        });

        if (response.ok) {
          statusBox.className = "form-status success";
          statusBox.textContent = "Thank you! Your message has been delivered.";
          form.reset();
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        statusBox.className = "form-status error";
        statusBox.textContent =
          "Unable to send message right now. Please try emailing directly using the address on the left.";
      }
      return;
    }

    const senderName = escapeHTML(fields.fullName.input.value.trim());
    const senderSubject = encodeURIComponent(fields.subject.input.value.trim());
    const senderBody = encodeURIComponent(
      `Name: ${fields.fullName.input.value.trim()}\nEmail: ${fields.email.input.value.trim()}\n\n${fields.message.input.value.trim()}`
    );

    statusBox.className = "form-status info";
    statusBox.innerHTML = `
      <strong>Validation Passed (${senderName})!</strong> No email backend (Formspree/EmailJS) is connected to this static portfolio yet, so your message was not transmitted automatically.
      You can <a href="mailto:${escapeHTML(PORTFOLIO_DATA.profile.email)}?subject=${senderSubject}&body=${senderBody}" style="text-decoration:underline;color:var(--accent-primary);font-weight:600;">open this message in your email app</a>, or connect Formspree in <code>js/script.js</code>.
    `;
  });
}

/* ==========================================================================
   13. SCROLL REVEAL, SKILL BAR FILL, ACTIVE NAV & BACK TO TOP
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  // Extra elements that join the staggered reveal system
  document
    .querySelectorAll(".highlight-item, .contact-details li")
    .forEach((el) => el.classList.add("reveal"));

  // Elements that enter together are staggered in reading order (top, then left)
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((entry, index) => {
          const el = entry.target;
          el.style.setProperty("--stagger", Math.min(index, 6));
          el.classList.add("visible");

          el.querySelectorAll(".progress-fill").forEach((bar, barIndex) => {
            const level = parseFloat(bar.getAttribute("data-width")) || 0;
            bar.style.transitionDelay = `${0.25 + barIndex * 0.09}s`;
            bar.style.transform = `scaleX(${Math.min(1, level / 100)})`;
          });

          el.querySelectorAll(".skill-level-label").forEach((label, i) => {
            const m = /^(.*?)(\d+)%$/.exec(label.textContent.trim());
            if (m) countUp(label, Number(m[2]), (n) => `${m[1]}${n}%`, 1300, 250 + i * 90);
          });
          el.querySelectorAll(".highlight-number").forEach((num) => {
            if (/^\d+$/.test(num.textContent.trim())) countUp(num, Number(num.textContent), String, 1100, 200);
          });

          revealObserver.unobserve(el);
        });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // Timeline connector draws itself when it enters the viewport
  const lineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("line-drawn");
          lineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".timeline").forEach((el) => lineObserver.observe(el));

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress / 100))})`;
    }

    if (navbar) {
      navbar.classList.toggle("scrolled", scrollY > 20);
    }

    let currentSectionId = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const hrefId = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", hrefId === currentSectionId);
    });
  };

  let scrollTicking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
    },
    { passive: true }
  );
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" });
    });
  }
}

/* ==========================================================================
   14. UTILITIES
   ========================================================================== */
function updateCopyrightYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   15. MOTION HELPERS — 3D TILT, MAGNETIC HOVER, HERO CANVAS, FILTER TRANSITIONS
   ========================================================================== */
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const reduceMotion = () => motionQuery.matches;
const canHover = () => hoverQuery.matches;

let themeTransitionTimer = 0;
let modalCloseTimer = 0;
let lastFocusedEl = null;
let currentFilter = "all";
let filterToken = 0;
let activeTilt = null;

window.addEventListener(
  "scroll",
  () => {
    if (activeTilt) activeTilt._rect = null;
  },
  { passive: true }
);

/* Attach tilt + magnetic behaviour to current (and future, re-rendered) elements */
function enhanceInteractive(root = document) {
  root.querySelectorAll(".profile-frame, .project-card, .cert-card").forEach((el) => {
    el.setAttribute("data-tilt", "");
    bindTilt(el);
  });
  root
    .querySelectorAll(".btn, .social-icon, .theme-toggle, .back-to-top, .social-pill")
    .forEach((el) => bindMagnetic(el));
}

function bindTilt(el, max = 5) {
  if (el.dataset.tiltBound || !canHover() || reduceMotion()) return;
  el.dataset.tiltBound = "1";
  let raf = 0;

  const reset = () => {
    cancelAnimationFrame(raf);
    el.classList.remove("is-tilting");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    if (activeTilt === el) activeTilt = null;
  };

  el.addEventListener("pointerenter", () => {
    activeTilt = el;
    el._rect = el.getBoundingClientRect();
    el.classList.add("is-tilting");
  });

  el.addEventListener("pointermove", (event) => {
    const rect = el._rect || (el._rect = el.getBoundingClientRect());
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-x", `${(-py * max * 2).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(px * max * 2).toFixed(2)}deg`);
    });
  });

  el.addEventListener("pointerleave", reset);
}

function bindMagnetic(el, strength = 0.28) {
  if (el.dataset.magBound || !canHover() || reduceMotion()) return;
  el.dataset.magBound = "1";
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;

  const loop = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    el.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
    if (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = 0;
      if (!tx && !ty) el.style.translate = "";
    }
  };
  const kick = () => {
    if (!raf) raf = requestAnimationFrame(loop);
  };

  el.addEventListener("pointermove", (event) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2 - x; // remove current offset to avoid feedback
    const cy = rect.top + rect.height / 2 - y;
    tx = (event.clientX - cx) * strength;
    ty = (event.clientY - cy) * strength;
    kick();
  });
  el.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
    kick();
  });
}

/* Animated project filtering: leave -> re-render -> FLIP survivors + enter newcomers */
function changeProjectFilter(category) {
  const grid = document.getElementById("projectsGrid");
  if (!grid || category === currentFilter) return;
  currentFilter = category;
  const token = ++filterToken;

  if (reduceMotion()) {
    renderProjects(category, { immediate: true });
    return;
  }

  const first = new Map();
  grid.querySelectorAll(".project-card").forEach((card) => {
    first.set(card.dataset.projectId, card.getBoundingClientRect());
  });
  const startHeight = grid.offsetHeight;
  const nextIds = new Set(getFilteredProjects(category).map((project) => project.id));

  const leaving = [...grid.querySelectorAll(".project-card")].filter((card) => !nextIds.has(card.dataset.projectId));
  grid.querySelectorAll(".empty-filter-msg").forEach((msg) => leaving.push(msg));
  leaving.forEach((el) => el.classList.add("is-leaving"));

  setTimeout(() => {
    if (token !== filterToken) return;
    renderProjects(category, { immediate: true });

    const endHeight = grid.offsetHeight;
    let enterIndex = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const previous = first.get(card.dataset.projectId);
      if (previous) {
        const now = card.getBoundingClientRect();
        const dx = previous.left - now.left;
        const dy = previous.top - now.top;
        if (dx || dy) {
          card.animate(
            [{ translate: `${dx}px ${dy}px` }, { translate: "0 0" }],
            { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
        }
      } else {
        card.classList.add("is-entering");
        card.style.setProperty("--enter-i", enterIndex++);
      }
    });

    if (startHeight && startHeight !== endHeight) {
      grid.style.height = `${startHeight}px`;
      void grid.offsetHeight;
      grid.style.transition = "height 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
      grid.style.height = `${endHeight}px`;
      setTimeout(() => {
        grid.style.height = "";
        grid.style.transition = "";
      }, 540);
    }
  }, leaving.length ? 240 : 0);
}

/* Lightweight drifting-dot network behind the hero (theme aware, pauses off-screen) */
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  const hero = document.getElementById("home");
  if (!canvas || !hero || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const root = document.documentElement;
  const LINK_DIST = 125;
  const POINTER_DIST = 150;
  const pointer = { x: -9999, y: -9999 };
  const palette = { r: 59, g: 130, b: 246, dot: 0.55, line: 0.17 };
  let width = 0, height = 0, dots = [], raf = 0, running = false, inView = true, last = 0;

  const readPalette = () => {
    const hex = getComputedStyle(root).getPropertyValue("--accent-primary").trim();
    const match = /^#?([0-9a-f]{6})$/i.exec(hex);
    if (match) {
      const n = parseInt(match[1], 16);
      palette.r = (n >> 16) & 255;
      palette.g = (n >> 8) & 255;
      palette.b = n & 255;
    }
    const light = root.getAttribute("data-theme") === "light";
    palette.dot = light ? 0.42 : 0.55;
    palette.line = light ? 0.13 : 0.17;
  };

  const draw = (dt = 0) => {
    ctx.clearRect(0, 0, width, height);
    const { r, g, b } = palette;

    for (const d of dots) {
      if (dt) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        if (d.x < -10) d.x = width + 10;
        else if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        else if (d.y > height + 10) d.y = -10;
      }
      ctx.fillStyle = `rgba(${r},${g},${b},${palette.dot})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      for (let k = i + 1; k < dots.length; k++) {
        const c = dots[k];
        const dx = a.x - c.x;
        const dy = a.y - c.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${((1 - dist / LINK_DIST) * palette.line).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();
        }
      }
      const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
      if (pd < POINTER_DIST) {
        ctx.strokeStyle = `rgba(${r},${g},${b},${((1 - pd / POINTER_DIST) * palette.line * 2).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
    }
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(Math.min(70, Math.max(22, (width * height) / 16000)));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 26,
      vy: (Math.random() - 0.5) * 26,
      r: Math.random() * 1.1 + 0.7
    }));
    draw(0);
  };

  const frame = (time) => {
    if (!running) return;
    const dt = Math.min((time - last) / 1000, 0.05);
    last = time;
    draw(dt);
    raf = requestAnimationFrame(frame);
  };
  const start = () => {
    if (running || reduceMotion() || !inView || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  readPalette();
  resize();

  new ResizeObserver(() => requestAnimationFrame(resize)).observe(hero);
  new MutationObserver(() => {
    readPalette();
    draw(0);
  }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    inView ? start() : stop();
  }).observe(hero);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  });
  hero.addEventListener("pointerleave", () => {
    pointer.x = pointer.y = -9999;
  });

  motionQuery.addEventListener("change", () => (reduceMotion() ? (stop(), draw(0)) : start()));
  start();
}


/* ==========================================================================
   16. EXTRA MOTION — MARQUEE, COUNT-UP, WORD REVEALS, CURSOR, SPOTLIGHT, RIPPLE, PARALLAX
   ========================================================================== */
function renderMarquee() {
  const rowA = document.getElementById("marqueeTrack");
  const rowB = document.getElementById("marqueeTrack2");
  if (!rowA || !rowB) return;

  const names = PORTFOLIO_DATA.skills.flatMap((group) => group.items.map((item) => item.name));
  const list = [...names, "Cisco Badges", "RFID Capstone", "Responsive Design", "Problem Solving"];
  const build = (items) => {
    const html = items.map((name) => `<span class="marquee-item">${escapeHTML(name)}</span>`).join("");
    return html + html; // duplicated so the -50% loop is seamless
  };
  rowA.innerHTML = build(list);
  rowB.innerHTML = build([...list].reverse());
}

function countUp(el, to, format, duration = 1300, delay = 0) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  if (reduceMotion()) {
    el.textContent = format(to);
    return;
  }
  el.textContent = format(0);
  const start = performance.now() + delay;
  const step = (now) => {
    const p = Math.min(Math.max((now - start) / duration, 0), 1);
    el.textContent = format(Math.round(to * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initSectionTitles() {
  document.querySelectorAll(".section-title").forEach((title) => {
    if (title.dataset.split) return;
    title.dataset.split = "1";
    const text = title.textContent.trim();
    title.setAttribute("aria-label", text);
    title.innerHTML = text
      .split(/\s+/)
      .map((word, i) => `<span class="word" aria-hidden="true"><span style="--w:${i}">${escapeHTML(word)}</span></span>`)
      .join(" ");
  });
}

function initCursorFollower() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;
  if (!canHover() || reduceMotion()) {
    dot.remove();
    ring.remove();
    return;
  }

  let mx = -100, my = -100, rx = -100, ry = -100, raf = 0, shown = false;
  const loop = () => {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;
    raf = Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      mx = event.clientX;
      my = event.clientY;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        dot.classList.add("on");
        ring.classList.add("on");
      }
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.classList.toggle("is-hover", Boolean(event.target.closest("a, button, input, textarea, [data-tilt]")));
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true }
  );
  document.documentElement.addEventListener("mouseleave", () => {
    shown = false;
    dot.classList.remove("on");
    ring.classList.remove("on");
  });
}

function initSpotlight() {
  if (!canHover() || reduceMotion()) return;
  document.addEventListener(
    "pointermove",
    (event) => {
      const card = event.target.closest && event.target.closest(".glass-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    { passive: true }
  );
}

function initRipple() {
  document.addEventListener("pointerdown", (event) => {
    const btn = event.target.closest && event.target.closest(".btn, .filter-btn");
    if (!btn || reduceMotion()) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${event.clientX - rect.left - size / 2}px;top:${event.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
}

function initParallax() {
  if (reduceMotion()) return;
  const hero = document.getElementById("home");
  const visual = document.querySelector(".hero-visual");
  const canvas = document.getElementById("heroCanvas");
  if (!hero) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < hero.offsetHeight + 100) {
          if (visual) visual.style.translate = `0 ${(y * 0.14).toFixed(1)}px`;
          if (canvas) canvas.style.translate = `0 ${(y * 0.12).toFixed(1)}px`;
        }
        ticking = false;
      });
    },
    { passive: true }
  );
}