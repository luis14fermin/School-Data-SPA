import '../css/Charts.css';
import PieChart from './PieChart'
import BarChart from './BarChart'

function Charts({programData, raceData, tuitionData}) {

    const programsArray = Object.keys(programData).map(program => ({'x': program.replaceAll('_', ' '), 'y': Math.floor(programData[program]*100)}))
    const filteredProgramsArray = programsArray.filter(item => item.y !== 0);

    const raceArray = Object.keys(raceData).map(race => ({'x': race.replaceAll('_', ' '), 'y': Math.floor(raceData[race]*100)}))
    const filteredRaceArray = raceArray.filter(item => item.y !== 0);

    const tuitionArray = Object.keys(tuitionData).map(tuition => ({'x': tuition.replaceAll('_', ' '), 'y': tuitionData[tuition]}))
    const filteredTuitionArray = tuitionArray.filter(item => item.y !== null);

  return (
    <section id='charts'>
        <PieChart
        chartTitle='Majors of Enrolled Students' 
        filteredArray={filteredProgramsArray}
        />

        <PieChart
        chartTitle='Racial Demographics'  
        filteredArray={filteredRaceArray}
        />

        <BarChart
        chartTitle='Tuition'  
        filteredArray={filteredTuitionArray}
        />
    </section>
  );
}

export default Charts;