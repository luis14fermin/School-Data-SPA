import '../css/App.css';
import {useState, useEffect} from 'react';
import SchoolInfo from './SchoolInfo';
import Buttons from './Buttons';
import Charts from './Charts';
import Header from './Header';

function App() {

  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
      const fetchSchoolData = () => {
      fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setSchoolData(data.results[0]);
      })
    }

    fetchSchoolData();
  }, [])
  
  return (
    <>
    {schoolData &&
      <>
        <Header
        name={schoolData.school.name}
        alias={schoolData.school.alias}
        />
        
        <SchoolInfo 
        school_url={schoolData.school.school_url}
        city={schoolData.school.city}
        state={schoolData.school.state}
        zip={schoolData.school.zip}
        students_total={schoolData.latest.student.size}
        />

        <Charts 
        programData={schoolData.latest.academics.program_percentage}
        raceData={schoolData.latest.student.demographics.race_ethnicity}
        tuitionData={schoolData.latest.cost.tuition}
        />

        <Buttons schoolData={schoolData}/>   
      </>
    }
    </>
  );
}

export default App;
