import '../css/Charts.css';
import { VictoryPie, VictoryLegend } from 'victory';

function PieChart({chartTitle, filteredArray}) {
  return (
    <>
    <h2>{chartTitle}</h2>
    
    <div className='pie_chart'>
        <VictoryPie
        innerRadius={70}
        data={filteredArray}
        colorScale="qualitative"
        labels={({ datum }) => `${datum.y}%`}
        />
        <VictoryLegend x={125} y={50}
        title="Legend"
        centerTitle
        itemsPerRow={2}
        orientation="horizontal"
        style={{ title: {fontSize: 20 } }}
        data={filteredArray.map(item => ({'name': `${item.x} (${item.y}%)`}))}
        colorScale="qualitative"
        height={400}
        width={550}
        />
    </div>
    </>
  );
}

export default PieChart;