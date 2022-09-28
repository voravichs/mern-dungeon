import DugeonContainer from './components/DugeonContainer';
import { Helmet } from 'react-helmet';


export default function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <DugeonContainer />
    </div>
  )
}