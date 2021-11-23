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


      <div className="section4">
            <h3 className="h3s4">Noticias</h3>
            <p className="ps4">
              ¡Enetérate de lo que está pasando!
            </p>

            <div className="Posts4">

              <div className="cardbg">
                <div className="cards4">
                  <div className="imgcards4">
                    Soy una imagen
                  </div>
                  <h4 className="h4card">Post</h4>
                  <p className="pcard">
                  This is placeholder text that our web designers put here to make sure words appear properly on your website. 
                  </p>

                </div>

              </div>





              <div className="cardbg">
                <div className="cards4">
                  <div className="imgcards4">
                    Soy una imagen
                  </div>
                  <h4 className="h4card">Post</h4>
                  <p className="pcard">
                  This is placeholder text that our web designers put here to make sure words appear properly on your website. 
                  </p>

                </div>

              </div>






              <div className="cardbg">
                <div className="cards4">
                  <div className="imgcards4">
                    Soy una imagen
                  </div>
                  <h4 className="h4card">Post</h4>
                  <p className="pcard">
                  This is placeholder text that our web designers put here to make sure words appear properly on your website. 
                  </p>

                </div>

              </div>


            </div>

          </div>







          <div className="metrics5">

            <div className="items">
              <p className="ps5">
                +1000
              </p>
              <h4 className="hs5">
                Usuarios Registrados
              </h4>

            </div>



            <div className="items">
              <p className="ps5">
                +1000
              </p>
              <h4 className="hs5">
                Usuarios Registrados
              </h4>

            </div>



            <div className="items">
              <p className="ps5">
                +1000
              </p>
              <h4 className="hs5">
                Usuarios Registrados
              </h4>

            </div>

            


          </div>



          <div className="section6">
         

          <p className="contents3">Una app creada por estudiantes para estudiantes que tambien realizaron el mismo examen de ingreso a la universidad.<br/> Estudia con nosotros de la forma más practica y accesible desde cualquier lugar, Ponte en forma con nuestro banco de preguntas estudiando cuando quieras... </p>

          <img src={Marcian} className="marcian" alt=""/>

          




          </div>














    
    </div>
  );
}

export default App;
