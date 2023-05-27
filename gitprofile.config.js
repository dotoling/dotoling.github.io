// gitprofile.config.js

const config = {
  github: {
    username: 'Dotoling', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: 'hegnut',
    instagram: 'kkwak_do',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://scg.skku.ac.kr/',
    phone: '010-8490-7667',
    email: 'hegnut5859@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/17MABvonPmhZlg6szCya2QeXB3WbMXxex/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'Kotlin',
    'Java',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'Next.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
  ],
  /*
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  */
  certifications: [
    {
      name: '광학 암호통신 시스템의 광학 암호통신 방법',
      body: 'METHOD OF CRYPTOGRAPHIC COMMUNICATION USING OPTICAL ELEMENT BY CRYPTOGRAPHIC COMMUNICATION SYSTEM USING OPTICAL ELEMENT',
      year: 'August 2020',
      link: 'https://drive.google.com/file/d/1XZqF5jv49Y1UpljekGKkjeaVQ2HWfJ7g/view?usp=sharing'
    },
  ], 
  education: [
    {
      institution: 'Chungbuk Science High School',
      degree: 'Degree',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'Sungkyunkwan University',
      degree: 'Degree',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Sungkyunkwan University CS Homepage',
      description:
        'Sungkyunkwan University Official Computer Science page',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://cs.skku.edu/ko/',
    },
    {
      title: 'S-top Home page',
      description:
        'Sungkyunkwan University Official S-top page',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://s-top.cs.skku.edu/s-top/6',
    },
  ],
  /*
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  */
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
