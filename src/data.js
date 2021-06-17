import MentorsInt from './assets/mentorsInt-thumbnail.svg';
import MentorMe from './assets/mentorMe-thumbnail.svg';
import HandyApp from './assets/handy-app-thumbnail.svg';
import TheShoppies from './assets/the-shoppies-app-thumbnail.svg';
import Landr from './assets/landr-app-thumbnail.svg';
import PayAPI from './assets/payapi-app-thumbnail.svg';
import Designo from './assets/designo-thumbnail.png';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Designo',
    image: Designo,
    alt: 'landr-thumbnail',
    techs: ['React', 'TypeScript', 'React-router', 'Tailwindcss'],
    github: 'https://github.com/guillsav/designo',
    liveProject: 'https://dsgno.netlify.app/',
    summary: `Device mangement system application.`,
    description: [
      `Mockups provided by Frontend Mentors.`,
      `Implemented the design with React and Tailwindcss.`
    ]
  },
  {
    id: 2,
    title: 'Landr',
    image: Landr,
    alt: 'landr-thumbnail',
    techs: ['React', 'Context', 'Hooks', 'auth0-react', 'NodeJs', 'Express'],
    summary: `Device mangement system application.`,
    description: [
      `Application in progress`,
      `Designed layout with Sketch.`,
      `Implemented the design with React and styled Components.`,
      `State management done with Context API from React.`,
      `Use of hooks like useReducer, useContext.`,
      `Authentication done using auth0-react`
    ]
  },
  {
    id: 3,
    title: 'The Shoppies',
    image: TheShoppies,
    alt: 'the-shoppies-thumbnail',
    techs: ['React', 'Context', 'Hooks'],
    github: 'https://github.com/guillsav/the-shoppies',
    liveProject: 'https://the-shoppies-awards.netlify.app/',
    summary: `The Shoppies is an application where users can search for movies based on their title and nominate up to 5 movies for awards.`,
    description: [
      `Designed layout with Sketch.`,
      `Implemented the design with React and styled Components.`,
      `State management done with Context API from React.`,
      `Use of hooks like useReducer, useContext.`
    ]
  },
  {
    id: 4,
    title: 'Handy App',
    image: HandyApp,
    alt: 'handy-app-thumbnail',
    techs: ['React', 'Redux', 'Nodejs', 'PostgreSQL', 'Auth0', 'Stripe'],
    github: 'https://github.com/labs13-handy-app',
    liveProject: 'http://gethandyapp.com/',
    summary: `A platform that connects homeowners and service providers
        (handymen) by allowing homeowners to post a project and receive bids from service providers.`,
    description: [
      `Developed on a team of 3 developers over a 6-weeks course.`,
      `Completed all MVP functionalities in one month.`,
      `Used NodeJS and Express to create CRUD REST API.`,
      `Implemented database with Postgres and KnexJS.`,
      `Built API endpoints to process and receive payments using Stripe API technology.`,
      `State management done with React and Redux.`,
      `Implemented all asynchronous actions to manipulate the data from the backend with Redux-Thunk.`,
      `Used Auth0 for authentication implementation.`
    ]
  },
  {
    id: 5,
    title: 'Mentor Me',
    image: MentorMe,
    alt: 'mentor-me-thumbnail',
    techs: ['React', 'Redux', 'Nodejs', 'PostgreSQL', 'Bcrypt'],
    github:
      'https://github.com/buildweek-mentor-me/mentor-me-FE/tree/guillaume-savy',
    liveProject: 'https://getmentor.netlify.com/',
    summary: `An app that allows you to lend your business skills to entrepreneurs by answering their questions on various topics.`,
    description: [
      `Developed on a team of 3 developers over a 1-week course.`,
      `Completed data modeling and Core MVP functionalities
            within 5 days.`,
      `Built web app front-end using React and LESS.`,
      `Implemented authentication with JWT and Bcrypt.`,
      `Deployed backend API using Heroku CLI.`,
      `Deployed front-end client on Netlify.`
    ]
  },
  {
    id: 6,
    title: 'Mentors International Scheduler',
    image: MentorsInt,
    alt: 'mentors-international-scheduler-thumbnail',
    techs: ['HTML', 'CSS', 'LESS', 'Javascript'],
    github:
      'https://github.com/mentors-international-schedule/client/tree/guillaume_savy',
    liveProject: 'https://mentors-int-sched.herokuapp.com/',
    summary: `Project completed during first build week at Lambda School. Contributed by creating a responsive marketing page for Mentor International. Also utilized OOP JS knowledge to create a vanilla Javascript component.`,
    description: [
      `Designed layout with Sketch.`,
      `Implemented the design with HTML, LESS and Javascript.`,
      `Created a carousel component with Vanilla JS.`,
      `Implemented responsive design with the use of media queries.`
    ]
  },
  {
    id: 7,
    title: 'PayAPI',
    image: PayAPI,
    alt: 'payapi-international-scheduler-thumbnail',
    techs: ['HTML', 'CSS', 'LESS', 'Javascript'],
    github: 'https://github.com/guillsav/payapi',
    liveProject: 'https://payapi.netlify.app/',
    summary: `UI development project from Frontend Mentors.`,
    description: [
      `Gathered assets from Sketch.`,
      `Implemented the design with HTML, LESS and Javascript.`,
      `Implemented responsive design with the use of media queries.`
    ]
  }
];

export default PROJECTS_DATA;
