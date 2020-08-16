import { TECH_TYPE } from './consts';

export const techCards = [
  { imageSrc: 'html-5.svg', text: 'HTML', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'css-3.svg', text: 'CSS', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'javascript.svg', text: 'Javascript', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'java.svg', text: 'Java', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'python.svg', text: 'Python', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'sql.svg', text: 'SQL', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'c.svg', text: 'C Language', type: TECH_TYPE.LANGUAGES },
  { imageSrc: 'react.svg', text: 'React.js', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'redux.svg', text: 'Redux', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'scss.svg', text: 'SCSS', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'css-in-js.png', text: 'CSS in JS', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'next-js.svg', text: 'Next.js', type: TECH_TYPE.FRONTEND },
  { imageSrc: 'spring.svg', text: 'Spring Boot', type: TECH_TYPE.BACKEND },
  { imageSrc: 'nodejs.svg', text: 'Node.js', type: TECH_TYPE.BACKEND },
  { imageSrc: 'express.png', text: 'Express', type: TECH_TYPE.BACKEND },
  { imageSrc: 'docker.svg', text: 'Docker', type: TECH_TYPE.BACKEND },
  { imageSrc: 'mysql.svg', text: 'MySQL', type: TECH_TYPE.DATABASE },
  { imageSrc: 'mongodb.png', text: 'Mongo DB', type: TECH_TYPE.DATABASE },
  { imageSrc: 'vertica.svg', text: 'Vertica', type: TECH_TYPE.DATABASE },
  { imageSrc: 'firebase.svg', text: 'FireStore', type: TECH_TYPE.DATABASE },
  { imageSrc: 'selenium.svg', text: 'Selenium', type: TECH_TYPE.TESTING },
  { imageSrc: 'junit.png', text: 'Junit', type: TECH_TYPE.TESTING },
  { imageSrc: 'jest.svg', text: 'Jest', type: TECH_TYPE.TESTING },
  { imageSrc: 'rest-assured.png', text: 'Rest Assured', type: TECH_TYPE.TESTING },
  { imageSrc: 'puppeteer.svg', text: 'Puppeteer', type: TECH_TYPE.TESTING },
  { imageSrc: 'git.svg', text: 'Git', type: TECH_TYPE.TOOLS },
  { imageSrc: 'jenkins.webp', text: 'Jenkins', type: TECH_TYPE.TOOLS },
  { imageSrc: 'jira.svg', text: 'Jira', type: TECH_TYPE.TOOLS },
  { imageSrc: 'npm.svg', text: 'NPM', type: TECH_TYPE.TOOLS },
  { imageSrc: 'eslint.svg', text: 'ESlint', type: TECH_TYPE.TOOLS },
];

export const animatedCards = [
  { title: 'Clean Code', text: "We spend most of our time reading code, let's make it readable and enjoyable.", imgSrc: 'clean-code.svg' },
  { title: 'Performance', text: 'Studies have shown the negative impact poor performance can have on business goals.', imgSrc: 'performance.svg' },
  { title: 'Testing', text: 'Less bugs leads to maintainable && flexible system which delivers a high quality product.', imgSrc: 'testing.svg' },
];

export const projects = [
  {
    title: 'FLIXTIME',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat',
    sliderImages: [
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
    ],
    keyFeatures: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
    ],
    techUsedIcons: [
      { iconSrc: '/devIcons/next-js.svg', iconTitle: 'Next.js' },
      { iconSrc: '/devIcons/react.svg', iconTitle: 'React' },
      { iconSrc: '/devIcons/css-in-js.png', iconTitle: 'CSS-in-JS' },
    ],
    sourceCodeLink: 'https://github.com/Icohen007',
    liveDemoLink: 'https://flixtime.now.sh',
  },
  {
    title: 'FLIXTIME',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat',
    sliderImages: [
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
    ],
    keyFeatures: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
    ],
    techUsedIcons: [
      { iconSrc: '/devIcons/next-js.svg', iconTitle: 'Next.js' },
      { iconSrc: '/devIcons/react.svg', iconTitle: 'React' },
      { iconSrc: '/devIcons/css-in-js.png', iconTitle: 'CSS-in-JS' },
    ],
    sourceCodeLink: 'https://github.com/Icohen007',
    liveDemoLink: 'https://flixtime.now.sh',
  },
  {
    title: 'FLIXTIME',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat',
    sliderImages: [
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
    ],
    keyFeatures: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
    ],
    techUsedIcons: [
      { iconSrc: '/devIcons/next-js.svg', iconTitle: 'Next.js' },
      { iconSrc: '/devIcons/react.svg', iconTitle: 'React' },
      { iconSrc: '/devIcons/css-in-js.png', iconTitle: 'CSS-in-JS' },
    ],
    sourceCodeLink: 'https://github.com/Icohen007',
    liveDemoLink: 'https://flixtime.now.sh',
  },
  {
    title: 'FLIXTIME',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat',
    sliderImages: [
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-devices.webp', imgAlt: 'screenshot1' },
      { imgSrc: '/projects/flixtime-showcase.webp', imgAlt: 'screenshot1' },
    ],
    keyFeatures: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos earum excepturi, expedita hic labore maiores quidem quo quos repudiandae similique unde vel. Laboriosam, placeat.',
    ],
    techUsedIcons: [
      { iconSrc: '/devIcons/next-js.svg', iconTitle: 'Next.js' },
      { iconSrc: '/devIcons/react.svg', iconTitle: 'React' },
      { iconSrc: '/devIcons/css-in-js.png', iconTitle: 'CSS-in-JS' },
    ],
    sourceCodeLink: 'https://github.com/Icohen007',
    liveDemoLink: 'https://flixtime.now.sh',
  },
];
