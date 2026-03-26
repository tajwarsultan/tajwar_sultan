document.addEventListener('DOMContentLoaded', () => {
  // --- 1. PRELOADER ---
  const preloader = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloader-fill');
  const preloaderText = document.querySelector('.preloader-text');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          document.body.style.overflow = 'auto';
          initMainAnimations();
        }, 1000);
      }, 500);
    }
    preloaderFill.style.width = `${progress}%`;
  }, 200);

  // --- 2. CUSTOM CURSOR ---
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });

  const hoverElements = document.querySelectorAll('a, button, .glass-card, .filter-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2.5)';
      follower.style.transform = 'scale(1.5)';
      follower.style.borderColor = 'var(--primary)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
    });
  });

  // --- 3. THREE.JS PARTICLES ---
  const initParticles = () => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesCount = window.innerWidth < 768 ? 1000 : 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#66D2CE',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      
      particlesMesh.rotation.x += (mouseY * 0.1 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.1 - particlesMesh.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  const initSkillsSphere = () => {
    const canvas = document.getElementById('skills-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    const size = canvas.parentElement.clientHeight;
    renderer.setSize(size, size);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: '#66D2CE',
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Add points for skills
    const pointsCount = 40;
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pointsCount * 3);
    
    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;
      
      positions[i * 3] = Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = Math.cos(phi);
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: '#66D2CE',
      transparent: true,
      opacity: 1
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 2.5;

    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    const animateSkill = () => {
      requestAnimationFrame(animateSkill);
      group.rotation.y += 0.005;
      group.rotation.x += (mouseY * 0.2 - group.rotation.x) * 0.05;
      group.rotation.y += (mouseX * 0.2 - group.rotation.y) * 0.05;
      renderer.render(scene, camera);
    };

    animateSkill();
  };

  initParticles();
  initSkillsSphere();

  // --- 4. EMAILJS ---
  if (typeof emailjs !== 'undefined') {
    emailjs.init("YOUR_PUBLIC_KEY"); // User needs to replace this
  }

  // --- 4. TYPING ANIMATION ---
  const typingText = document.getElementById('typing-text');
  const phrases = [
    "Hi, I’m Tajwar Sultan — Full Stack Developer & AI Engineer",
    "I Build Scalable Web Applications",
    "I Specialize in OpenAI & AI Integrations",
    "I Design High-Performance Products"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingDelay = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingDelay = 500;
    }

    setTimeout(type, typingDelay);
  };
  
  if (typingText) setTimeout(type, 2000);

  // --- 5. COUNTER ANIMATION ---
  const stats = document.querySelectorAll('.stat-number');
  const observerOptions = { threshold: 0.5 };
  
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-target'));
        let count = 0;
        const duration = 2000;
        const increment = countTo / (duration / 16);
        
        const updateCount = () => {
          count += increment;
          if (count < countTo) {
            target.textContent = Math.floor(count);
            requestAnimationFrame(updateCount);
          } else {
            target.textContent = countTo;
          }
        };
        updateCount();
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  stats.forEach(stat => statsObserver.observe(stat));

  // --- 6. GSAP SCROLL ANIMATIONS ---
  const initMainAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in sections
    gsap.utils.toArray('.reveal-up').forEach(elem => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Special hero entrance
    const heroAnims = document.querySelectorAll('.hero-anim');
    gsap.from(heroAnims, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
    });

    // Skills bar animation
    gsap.utils.toArray('.skill-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(bar, 
        { width: "0%" },
        { 
          width: width + "%", 
          duration: 2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%"
          }
        }
      );
    });

    // Navbar effects
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Active nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  };

  // --- 7. TERMINAL LOGIC ---
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  
  const commands = {
    help: "Available commands: about, skills, contact, projects, clear, help",
    about: "Tajwar Sultan — Full Stack Developer & AI Engineer with 4+ years of experience in building scalable web apps and AI integrations.",
    skills: "Frontend: React, Next.js, JS/TS, CSS/Tailwind\nBackend: Node.js, Python, FastAPI, PostgreSQL\nAI: OpenAI, LangChain, RAG Pipelines",
    contact: "Email: sultan.baig305@gmail.com\nLinkedIn: tajwar-sultan\nGitHub: tajwarsultan",
    projects: "Featured: CARLA (AI Assistant), GreatCoops AI (SaaS), Eldrin AI (Agents)",
    clear: "CLEAR_TERMINAL"
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const input = terminalInput.value.toLowerCase().trim();
        const response = commands[input] || `Command not found: ${input}. Type "help" for a list of commands.`;
        
        const inputLine = document.createElement('div');
        inputLine.className = 't-line';
        inputLine.innerHTML = `<span class="t-prompt">tajwar@portfolio:~$</span> <span>${input}</span>`;
        terminalBody.appendChild(inputLine);
        
        if (response === "CLEAR_TERMINAL") {
          terminalBody.innerHTML = '';
        } else {
          const responseLine = document.createElement('div');
          responseLine.className = 't-line';
          responseLine.innerHTML = response.replace(/\n/g, '<br>');
          terminalBody.appendChild(responseLine);
        }
        
        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    });
  }

  // --- 8. THEME TOGGLE ---
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      
      themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
      localStorage.setItem('theme', newTheme);
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeIcon) themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

  // --- 9. SMOOTH SCROLL & BACK TO TOP ---
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navItems = document.getElementById('nav-links');
  
  hamburger?.addEventListener('click', () => {
    navItems.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navItems.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Project Filtering
  const filterBtns = document.querySelectorAll('[data-pfilter]');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-pfilter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-pcategory').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          gsap.from(card, { opacity: 0, scale: 0.9, duration: 0.4 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Skills Filtering
  const skillFilterBtns = document.querySelectorAll('[data-filter]');
  const skillItems = document.querySelectorAll('.skill-item');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      skillItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Resume Download Counter
  const resumeBtns = document.querySelectorAll('a[download]');
  const resumeCountDisplay = document.getElementById('resume-count');
  
  let downloads = parseInt(localStorage.getItem('resumeDownloads') || '0');
  if (resumeCountDisplay) resumeCountDisplay.textContent = downloads;

  resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      downloads++;
      localStorage.setItem('resumeDownloads', downloads);
      if (resumeCountDisplay) resumeCountDisplay.textContent = downloads;
    });
  });

  // Year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Project Modal Content
  const modalData = {
    carla: {
      title: "CARLA — AI Research Assistant",
      image: "./images/tajwar-sultan.png",
      desc: "Detailed case study for CARLA. This AI-powered assistant uses RAG to provide accurate answers based on uploaded documents. Features real-time streaming and semantic search.",
      tech: ["React", "Python", "OpenAI", "Pinecone"]
    },
    greatcoops: {
      title: "GreatCoops AI",
      image: "./images/box.jpg",
      desc: "GreatCoops is a platform for co-operative businesses that leverages AI to analyze member data and generate automated governance reports and insights.",
      tech: ["Next.js", "PostgreSQL", "OpenAI", "Tailwind"]
    },
    eldrin: {
      title: "Eldrin AI",
      image: "./images/trop.png",
      desc: "An autonomous agent framework that can perform multi-step tasks across different APIs. Used for business process automation and data collection.",
      tech: ["LangChain", "Node.js", "TypeScript"]
    },
    finance: {
      title: "Finance Dashboard",
      image: "./images/kite.jpg",
      desc: "A premium dashboard for tracking personal finance and investments with beautiful D3.js visualizations and real-time market data tickers.",
      tech: ["React", "D3.js", "Firebase"]
    },
    aiapps: {
      title: "AI Apps Suite",
      image: "./images/tajwar.jpg",
      desc: "A collection of micro-apps demonstrating different AI capabilities: image to text, PDF interaction, and code generation.",
      tech: ["Next.js", "OpenAI", "Vercel"]
    }
  };

  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-modal');
      const data = modalData[key];
      if (data) {
        modalContent.innerHTML = `
          <img src="${data.image}" style="width:100%; border-radius:10px; margin-bottom:20px;">
          <h2>${data.title}</h2>
          <div class="tech-badges" style="margin-bottom:20px;">
            ${data.tech.map(t => `<span class="badge">${t}</span>`).join('')}
          </div>
          <p style="margin-bottom:20px; line-height:1.8;">${data.desc}</p>
          <div class="project-links">
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-outline">GitHub</a>
          </div>
        `;
        modalBackdrop.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalClose?.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = "Sending message...";
    formStatus.style.color = "var(--primary)";

    const isInitialized = typeof emailjs !== 'undefined' && emailjs._publicKey && emailjs._publicKey !== "YOUR_PUBLIC_KEY";

    if (isInitialized) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
          formStatus.textContent = "Message sent successfully!";
          formStatus.style.color = "#27c93f";
          contactForm.reset();
        }, (error) => {
          formStatus.textContent = "Error: " + error.text;
          formStatus.style.color = "#ff5f56";
        });
    } else {
      setTimeout(() => {
        formStatus.textContent = "Message sent successfully! (Simulation)";
        formStatus.style.color = "#27c93f";
        contactForm.reset();
        setTimeout(() => { formStatus.textContent = ""; }, 5000);
      }, 1500);
    }
  });
});
