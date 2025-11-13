// Component Loader - Dynamically loads navigation and footer components
(function () {
  // Determine the base path relative to the current page
  function getBasePath() {
    const depth = window.location.pathname.split('/').filter(p => p).length - 1;
    return depth === 0 ? './' : '../'.repeat(depth);
  }

  const basePath = getBasePath();

  // Route configuration
  const routes = {
    home: basePath,
    about: basePath + 'about_me/',
    projects: basePath + 'projects/',
    creatives: basePath + 'creatives/',
    blog: basePath + 'blog/'
  };

  // Update navigation links based on current page
  function updateNavigationLinks() {
    const logo = document.getElementById('nav-logo');
    if (logo) {
      logo.src = basePath + 'pics/marianne gagnamagnid.png';
    }

    // Update desktop navigation
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navProjects = document.getElementById('nav-projects');
    const navCreatives = document.getElementById('nav-creatives');
    const navBlog = document.getElementById('nav-blog');

    if (navHome) navHome.href = routes.home;
    if (navAbout) navAbout.href = routes.about;
    if (navProjects) navProjects.href = routes.projects;
    if (navCreatives) navCreatives.href = routes.creatives;
    if (navBlog) navBlog.href = routes.blog;

    // Update mobile navigation
    const mobileNavHome = document.getElementById('mobile-nav-home');
    const mobileNavAbout = document.getElementById('mobile-nav-about');
    const mobileNavProjects = document.getElementById('mobile-nav-projects');
    const mobileNavCreatives = document.getElementById('mobile-nav-creatives');
    const mobileNavBlog = document.getElementById('mobile-nav-blog');

    if (mobileNavHome) mobileNavHome.href = routes.home;
    if (mobileNavAbout) mobileNavAbout.href = routes.about;
    if (mobileNavProjects) mobileNavProjects.href = routes.projects;
    if (mobileNavCreatives) mobileNavCreatives.href = routes.creatives;
    if (mobileNavBlog) mobileNavBlog.href = routes.blog;

    // Highlight current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navMenu a, #mobileMenu a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href) && href !== './') {
        link.classList.add('bg-medic-light-pink', 'dark:bg-medic-hot-pink');
      } else if (href === routes.home && currentPath === '/') {
        link.classList.add('bg-medic-light-pink', 'dark:bg-medic-hot-pink');
      }
    });
  }

  // Update footer links
  function updateFooterLinks() {
    const footerHome = document.getElementById('footer-home');
    const footerAbout = document.getElementById('footer-about');
    const footerProjects = document.getElementById('footer-projects');
    const footerCreatives = document.getElementById('footer-creatives');
    const footerBlog = document.getElementById('footer-blog');

    if (footerHome) footerHome.href = routes.home;
    if (footerAbout) footerAbout.href = routes.about;
    if (footerProjects) footerProjects.href = routes.projects;
    if (footerCreatives) footerCreatives.href = routes.creatives;
    if (footerBlog) footerBlog.href = routes.blog;
  }

  // Setup mobile menu toggle
  function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
      });
    }

    if (closeMobileMenu && mobileMenu) {
      closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
      });
    }

    // Close menu when clicking a link
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu) {
          mobileMenu.classList.add('translate-x-full');
        }
      });
    });
  }

  // Load component HTML
  async function loadComponent(elementId, componentPath) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
      const html = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error loading component:', error);
      return false;
    }
  }

  // Initialize components
  async function initComponents() {
    const componentsPath = basePath + 'components/';

    // Load navigation
    const navLoaded = await loadComponent('nav-placeholder', componentsPath + 'navigation.html');
    if (navLoaded) {
      updateNavigationLinks();
      setupMobileMenu();
    }

    // Load footer
    const footerLoaded = await loadComponent('footer-placeholder', componentsPath + 'footer.html');
    if (footerLoaded) {
      updateFooterLinks();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Export for use in other scripts
  window.MedicComponents = {
    basePath,
    routes,
    updateNavigationLinks,
    updateFooterLinks,
    setupMobileMenu
  };
})();
