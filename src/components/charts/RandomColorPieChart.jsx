import randomColor from 'randomcolor';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 },
];

const RandomColorPieChart = () => {
  const colors = data.map(() => randomColor());

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx='50%'
        cy='50%'
        outerRadius={120}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default RandomColorPieChart;
