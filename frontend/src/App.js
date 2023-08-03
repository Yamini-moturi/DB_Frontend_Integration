import logo from './logo.svg';
import './App.css';
import { PlantList } from './PlantList';


function App(){
  return(
    <div className="App">
      <body>
      <div class="container mt-5">
        <div class="text-center">
          <h1><strong>Plant Deatils</strong></h1>
        </div>
          <br></br>

        <div class="grid text-center">
          <div class="g-col-6">
            <div class="col-12">
              <button class="btn btn-success btn-lg" type="submit">House Plants</button>
            </div>
            <br></br>
            <PlantList/>
          </div>

          <div class="g-col-6">
            <div class="col-12">
              <button class="btn btn-success btn-lg" type="submit">Flower Plants</button>
            </div>
            <br></br>
            <PlantList/>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
