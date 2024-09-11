import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';
import StudentResult from './Classes/StudentResult';

function App() {
  let Kavitha = new StudentResult("Kavitha","Nagaraju",77,88,99,9,67,56);
  let Kumari = new StudentResult("Kumaari","Uppala",90,89,91,95,78,98)
  Kumari.calculateResult();

  let Sirisha = new StudentResult("Sirisha","Potla",89,90,98,76,56,13);
  Sirisha.socMarks=89;
  Sirisha.calculateResult();
  
  return (
    <div className="App">
  <MarkSheet img="./images/ajinkya.webp" name="Ajinkya" telMarks="89" engMarks="80" hinMarks="78" mathMarks="67" sciMarks="56" socMarks="89"></MarkSheet>
  <MarkSheet img="./images/devon.webp" name="Devin" telMarks="89" engMarks="80" hinMarks="78" mathMarks="67" sciMarks="56" socMarks="89"></MarkSheet>
  <MarkSheet img="./images/dhoni.webp" name="Dhoni" telMarks="89" engMarks="80" hinMarks="78" mathMarks="67" sciMarks="56" socMarks="89"></MarkSheet>
  <div className='cricket'>
    <img src="./images/image.webp" alt=''></img>
    <h3 >Name:Ruthuraj</h3>
    <h4> Telugu:70</h4>
    <h4> English:89</h4>
    <h4> Hindhi:78</h4>
    <h4 >Maths:78</h4>
    <h4 >Science:90</h4>
    <h4 >Social:90</h4>
  </div>
    </div>
  );
}

export default App;
