
import './App.css';
import MainFunc from './component/MainFunc';
import store from './features/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={ store }>
      <MainFunc />
      </Provider>
    </>
  );
}

export default App;
