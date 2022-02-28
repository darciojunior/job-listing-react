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
      const filteredJobs = data.filter(function (data) {
        const concatTags = [data.level, data.role, ...data.languages, ...data.tools]
        return filterTags.every(value => concatTags.includes(value))
      })
      return filteredJobs.map(data => <JobContainer data={data} key={data.id} filterUseState={{ filterTags, setFilterTags }} />)
    }
  }

  return (
    <div className="App">
      <Header filterUseState={{ filterTags, setFilterTags }} />
      <div style={filterTags.length > 0 ? { marginTop: 80 } : { marginTop: 0 }} >
        {renderJobContainers()}
      </div>
    </div>
  );
}

export default App;
