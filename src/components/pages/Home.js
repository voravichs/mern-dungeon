import Project from '../Project';
import MoodyGamer from '../../images/moody-gamer.png'
import CampaignManager from '../../images/campaign-manager.PNG'
import CodeQuiz from '../../images/code-quiz.png'
import NoteTaker from '../../images/note-taker.PNG'
import WorkDay from '../../images/work-day.png'
import WeatherDash from '../../images/weather-dash.PNG'

const projects = [
  {
    id: 1,
    name: "Moody Gamer",
    deployLink: "https://voravichs.github.io/moody-gamer/",
    gitLink: "https://github.com/voravichs/moody-gamer",
    image: MoodyGamer
  },
  {
    id: 2,
    name: "Campaign Manager",
    deployLink: "https://vast-temple-92235.herokuapp.com/",
    gitLink: "https://github.com/voravichs/campaign-manager",
    image: CampaignManager
  },
  {
    id: 3,
    name: "Note Taker",
    deployLink: "https://note-taker-vs.herokuapp.com/",
    gitLink: "https://github.com/voravichs/note-taker",
    image: NoteTaker
  },
  {
    id: 4,
    name: "Code Quiz",
    deployLink: "https://voravichs.github.io/code-quiz",
    gitLink: "https://github.com/voravichs/code-quiz",
    image: CodeQuiz
  },
  {
    id: 5,
    name: "Weather Dashboard",
    deployLink: "https://voravichs.github.io/weather-dashboard/",
    gitLink: "https://github.com/voravichs/weather-dashboard",
    image: WeatherDash
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    deployLink: "https://voravichs.github.io/work-day-scheduler/",
    gitLink: "https://github.com/voravichs/work-day-scheduler",
    image: WorkDay
  },
]

const Home = () => {

  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Portfolio</h1>
      <ul className="grid grid-rows-6 lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 gap-16">
        {projects.map((project) =>
          <Project key={project.id} name={project.name} link={project.deployLink} gitLink={project.gitLink} image={project.image} />
        )}
      </ul>
    </div>
  );
};

export default Home;
