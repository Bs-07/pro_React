import Card from './components/card';
import './App.css';

function App() {
  let myObj = {
    username: 'Carolina',
    bio: 'Passionate programmer turning coffee into code since 2022. By day, I’m a world-class problem solver, and by night, a coding ninja. Obsessed with pushing the boundaries of technology, I create digital symphonies with the stroke of my keyboard. Dreaming in binary and making magic happen with lines of code, I’m in a committed relationship with my keyboard and compiler, crushing bugs and taking names along the way',
  };

  let myArr = [1, 2, 3];

  return (
    <>
      <h1 className="text-2xl font-bold md-6 p-2">Namaskaram 🙏</h1>
      <div className="flex gap-x-4">
        <Card username="Carolina" someObj={myObj} />
        <Card username="Senorita" someObj={myObj} />
      </div>
    </>
  );
}

export default App;
