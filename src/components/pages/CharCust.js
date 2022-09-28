import MoodyGamer from '../../images/moody-gamer.png'
import CampaignManager from '../../images/campaign-manager.PNG'
import CodeQuiz from '../../images/code-quiz.png'
import NoteTaker from '../../images/note-taker.PNG'
import WorkDay from '../../images/work-day.png'
import WeatherDash from '../../images/weather-dash.PNG'

const Characters = [
  {
    id: 1,
    name: "Moody Gamer",
    image: MoodyGamer
  },
  {
    id: 2,
    name: "Campaign Manager",
    image: CampaignManager
  },
  {
    id: 3,
    name: "Note Taker",
    image: NoteTaker
  },
  {
    id: 4,
    name: "Code Quiz",
    image: CodeQuiz
  },
  {
    id: 5,
    name: "Weather Dashboard",
    image: WeatherDash
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    image: WorkDay
  },
]

const CharCust = () => {

  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Character Custimazation</h1>
      
    </div>
  );
};

export default CharCust;
