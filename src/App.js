import Marcian from "./marcian.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Hero1">

        <p className="pvalor">
          La mejor forma de prepararte para la Universidad de tus sueños
        </p>
        <h1 className="title1">
        Estudiar nunca fue <br/> tan divertido
        </h1>

      </div>


      <div className="Hero2">
        <div className="item1">1</div>
        <div className="item2">2 aqui va mock up de app <br/> jojojoj
        <h2>Hola</h2>
        </div>
        <div className="item3">6</div>
        <div className="item4">3</div>
        <div className="item5">5kjsdhfjkdshk</div>
        <div className="item6">4</div>
        <div className="item6">4</div>


      </div>

      <div className="section3">

        <img src={Marcian} className="marcian" alt=""/>


        <div className="contents3">
          <h3>
            Uniquiz
          </h3>
          <p>Una app creada por estudiantes para estudiantes que tambien realizaron el mismo examen de ingreso a la universidad.<br/> Estudia con nosotros de la forma más practica y accesible desde cualquier lugar, Ponte en forma con nuestro banco de preguntas estudiando cuando quieras... </p>

          <button class="bubbly-button">Quizate!</button>
          
        </div>





      </div>





    
    </div>
  );
}

export default App;
