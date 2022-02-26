import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import JobContainer from './components/JobContainer';
import data from './data.json'

function App() {
  const [filterTags, setFilterTags] = useState([])

  function renderJobContainers() {
    if (filterTags.length === 0) return data.map(data => <JobContainer data={data} key={data.id} filterUseState={{ filterTags, setFilterTags }} />)
    else {
      const filteredArr = data.filter(data => filterTags.includes(data.level) || filterTags.includes(data.role) || filterTags.includes(data.tools))
      console.log(filteredArr)
      return filteredArr.map(data => <JobContainer data={data} key={data.id} filterUseState={{ filterTags, setFilterTags }} />)
    }
  }

  // Ver como fazer pra filtrar as tools já que estão em outro array

  return (
    <div className="App">
      <Header filterUseState={{ filterTags, setFilterTags }} />
      {renderJobContainers()}
    </div>
  );
}

export default App;
