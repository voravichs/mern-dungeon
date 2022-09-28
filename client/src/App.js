import DungeonContainer from './components/DungeonContainer';
import { Helmet } from 'react-helmet';


export default function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <DungeonContainer />
    </div>
  )
}