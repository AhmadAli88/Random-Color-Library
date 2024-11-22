import './App.css';
import UserList from './components/avatar/UserList';
import Calendar from './components/calendar/Calendar';
import RandomColorPieChart from './components/charts/RandomColorPieChart';
import ColorPalette from './components/color-pallete/ColorPalette';
import RandomColorComponent from './components/colorWithJS/HexadecimalRandomColorComponent';
import RandomHslColorComponent from './components/colorWithJS/RandomHslColorComponent';
import RandomRgbColorComponent from './components/colorWithJS/RandomRgbColorComponent';
import ColorMemoryGame from './components/game/ColorMemoryGame';
import RandomBackground from './components/random-background/RandomBackground';
import AnimatedRandomColor from './components/random-color/AnimatedRandomColor';
import OriginalRandomColorComponent from './components/random-color/RandomColorComponent';
import TagList from './components/tag/TagList';

function App() {
  const users = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
  const tags = [
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'Node.js',
    'Express',
    'MongoDB',
  ];
  return (
    <div>
      <RandomColorComponent />
      <RandomRgbColorComponent />
      <RandomHslColorComponent />
      <OriginalRandomColorComponent />
      <AnimatedRandomColor />
      <RandomColorPieChart />
      <div style={{ padding: '20px' }}>
        <h1>User List with Random Color Avatars</h1>
        <UserList users={users} />
      </div>
      <RandomBackground />
      <ColorPalette />
      <ColorMemoryGame />
      <div style={{ padding: '20px' }}>
        <h1>Tag List with Random Colors</h1>
        <TagList tags={tags} />
      </div>
      <Calendar/>
    </div>
  );
}

export default App;
