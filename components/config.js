// Shared Tailwind Configuration
window.MEDIC_CONFIG = {
  tailwind: {
    theme: {
      extend: {
        colors: {
          "medic-pink": "#FFB4D6",
          "medic-hot-pink": "#FF3F9F",
          "medic-light-pink": "#FF96CB",
          "medic-yellow": "#FFF898",
          "medic-dark-bg": "rgb(27, 0, 12.24)",
          "medic-dark-nav": "rgb(63, 0, 31.5)",
          "medic-dark-menu": "rgb(150, 0, 75.7142857143)",
          "medic-dark-yellow": "rgb(101, 94.1359223301, 0)",
          "medic-dark-img": "rgb(255, 27, 130.36)",
        },
        fontFamily: {
          epunda: ["Epunda Slab", "serif"],
          sharetechmono: ["Share Tech Mono", "monospace"],
        },
      },
    },
  },
  site: {
    title: "The Medic Zone",
    logo: "pics/marianne gagnamagnid.png",
    logoAlt: "pics/marianne-gagnamagnid.png",
    ga_id: "G-RTS1Z5XYJ4"
  }
};

// Apply Tailwind configuration if Tailwind is loaded
if (typeof tailwind !== 'undefined') {
  tailwind.config = window.MEDIC_CONFIG.tailwind;
}
