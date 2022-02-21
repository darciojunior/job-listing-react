import './App.css';
import Header from './components/Header';
import JobContainer from './components/JobContainer';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Header />
      {data.map(data => <JobContainer data={data} key={data.id} />)}
    </div>
  );
}

export default App;
