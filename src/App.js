
import { useContext } from 'react';
import './styles/App.css'

import { RecetaCard } from './components/RecetaCard';
import { RecetasContext } from './Provider/RecetasContext';
import { Link } from 'react-router-dom';
import { RecetasView } from './views/RecetasView';

function App() {

  const { notas, tags } = useContext(RecetasContext);

  return (
    <RecetasView />

  );
}

export default App;
