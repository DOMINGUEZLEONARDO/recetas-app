
import { RecipeProvider } from './provider/RecipeContext';
import { AppRoutes } from './routes/AppRoutes';
import './styles/App.css'

function App() {

  return (
    <RecipeProvider>
      <AppRoutes />
    </RecipeProvider>
  );
}

export default App;
