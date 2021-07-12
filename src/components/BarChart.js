import '../css/Charts.css';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryAxis} from 'victory';

function BarChart({chartTitle, filteredArray}) {
  return (
    <>
    <h2 className='bar_chart_title'>{chartTitle}</h2>
    
    <div className='bar_chart'>
        <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={50}
        padding={{top: 0, bottom: 40, left: 0, right: 0}}
        height={200}
        width={200}
        >
            <VictoryBar
            style={{ data: { fill: "#014469" }, labels: { fill: "black" }}}
            data={filteredArray}
            labels={({ datum }) => `$${datum.y}`}
            />
            <VictoryAxis
            style={{
              grid: { stroke: 'none'}, 
              axis: {stroke: 'black'}, 
              tickLabels: {fill: 'black'},
              ticks: {stroke: 'none'}
            }}
            />
        </VictoryChart>
    </div>
    </>
  );
}

export default BarChart;