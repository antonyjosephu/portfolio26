/* ==========================================================================
   PORTFOLIO DATA
   Edit everything here — your name, bio, projects, contact info.
   The page (index.html) reads this file and builds itself from it, so you
   never need to touch the HTML to update your content.

   TO ADD YOUR OWN IMAGES: drop files into /assets/images/ and change the
   matching "image" or "photo" path below from the picsum.photos URL to
   e.g. "assets/images/project1.jpg".
========================================================================== */

const PORTFOLIO = {

  person: {
    name: "Antony Joseph",
    role: "Wordpress Developer & AI Video Creator",
    tagline: "I create Responsive websites, AI avatar videos and Product ads.",
    photo: "assets/images/pro_pic.jpg",
    resumeUrl: "assets/Antony_Joseph_CV.pdf", // link to your CV PDF
  },

  about: "I'm Antony Joseph, a WordPress Developer with professional experience building responsive, user-friendly websites for businesses and clients. I have worked with Elementor, WPBakery, Astra, Divi and WooCommerce, and have delivered 10+ web projects involving theme customization, responsive design, plugins and custom functionality. Alongside web development, I also create AI-powered videos, avatar content and product advertisements, combining scripting, prompt engineering, AI generation and video editing.",

  // Floating stat cards shown near the hero photo — edit freely
  statCards: [
    { value: "10+", label: "WordPress sites shipped" },
    { value: "20+", label: "projects completed" },
  ],
personalInfo: [
  { label: "Domain", value: "WordPress Development" },
  { label: "Birthday", value: "19-06-1994" },

  {
    label: "Phone",
    value: "+91 9746004463",
    link: "https://wa.me/919746004463"
  },

  { label: "City", value: "Thrissur, Kerala, India" },

  {
    label: "Email",
    value: "antonyukken94@gmail.com",
    link: "mailto:antonyukken94@gmail.com"
  },

  { label: "Education", value: "BA, MBA, MSc" },
],
  skills: ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "Firebase", "Responsive Design", "Git"],
  

  // Projects grouped by category — shown as filterable tabs
  projects: {
    wordpress: [
      { name: "Thattekkadagro", desc: "Organic farm produce brand site.", image: "assets/images/thattekkadagro.png", url:"https://www.thattekkadagro.com/" },
      { name: "Nellippalaka", desc: "Natural wellness & lifestyle solutions.", image: "assets/images/nellippalaka.png", url:"https://nellippalaka.com/" },
      { name: "Gracecare247", desc: "24/7 home care services.", image: "assets/images/gracecare247.png", url: "https://gracecare247.com/" },
      { name: "Metropolitan Cancer Research", desc: "Healthcare & research institute site.", image: "assets/images/metropolitan cancer research.png", url: "https://palegreen-mink-448073.hostingersite.com/" },
      { name: "Milkycattlefeeds", desc: "Cattle feed manufacturer.", image: "assets/images/milkycattlefeeds.png", url: "https://milkycattlefeeds.com/" },
      { name: "RVS Insurance Group", desc: "Insurance coverage & policies.", image: "assets/images/rvsinsurancegroup.png", url: "https://rvsinsurancegroup.com/" },
      { name: "Eximfashions", desc: "Fashion e-commerce storefront.", image: "assets/images/eximfashions.png", url: "https://eximfashions.com/" },
      { name: "St:Alphonsa Shrine", desc: "Shrine & pilgrim information site.", image: "assets/images/stalphonsashrinecanteenandfoodcourt.png", url: "https://stalphonsashrinecanteenandfoodcourt.com/" },
      { name: "Flyhalf", desc: "Apparel brand landing page.", image: "assets/images/flyhalf.png", url: "https://flyhalf.in/" },
      { name: "NIAC", desc: "Cultural association website.", image: "assets/images/NIAC.png", url: "https://newryindianartsclub.co.uk/" },
      { name: "Nirmala Organic Farm", desc: "Farm-to-table produce brand.", image: "assets/images/nirmala.png", url: "https://nirmalaorganicfarm.com/" },
      { name: "Viva Ventures", desc: "Adventure & cycling tours.", image: "assets/images/viva ventures.png", url: "https://vivaventures.in/" },
      { name: "Crown Nest", desc: "Coffee & agri-produce brand.", image: "assets/images/crown nest.png", url: "https://crownnestllc.com/" },
      { name: "Bluewarm Holidays", desc: "Travel & holidays booking site.", image: "assets/images/bluewarm.png", url: "https://bluewarmholidays.com/" },
      { name: "Dr P. Susheela", desc: "Personal / professional profile site.", image: "assets/images/Dr P. Susheela.png", url: "https://drpsuseela.com/" },
      { name: "Simons International", desc: "Corporate travel & logistics.", image: "assets/images/simons.png", url: "https://seashell-aardvark-878708.hostingersite.com/" },
    ],
    javascript: [
      { name: "Digital Clock", desc: "Live clock built with vanilla JS.", image: "assets/images/Clock.png", url: "#" },
      { name: "Weather App", desc: "Live weather lookup by city.", image: "assets/images/Weather App.png", url: "#" },
      { name: "Rock Paper Scissors", desc: "Classic game vs. the computer.", image: "assets/images/Game.png", url: "#" },
      { name: "Image Slider", desc: "Auto-rotating carousel component.", image: "assets/images/Image Slider.png", url: "#" },
    ],
    react: [
      { name: "Netflix Clone", desc: "Responsive streaming platform UI, hosted on Firebase.", image: "assets/images/NetflixClone.png", url: "#" },
      { name: "E-commerce Fashion Store", desc: "Modern shopping front-end, hosted on Firebase.", image: "assets/images/Shopper.png", url: "#" },
    ],
    
  },

  contact: {
    phone: "+91 9746004463",
    email: "antonyukken94@gmail.com",
    formEndpoint: "https://formspree.io/f/xdekwrgq", // sign up free at formspree.io
socials: {
  facebook: "https://www.facebook.com/antonyju",
  youtube: "https://www.youtube.com/channel/UCURqSZ3O9dagM1wOwEY8jkg",
  instagram: "https://www.instagram.com/_antonyjoseph_/",
  linkedin: "https://www.linkedin.com/in/antony-joseph-830b731a3/"
},
  },
};
