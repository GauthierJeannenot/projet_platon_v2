
import React from 'react';


// const cities = ['paris', 'abidjan', 'monaco', 'istanbul', 'phoenix'];


  export class App extends React.Component {

    state = // le state est l'etat de notre composant (donnees surveillees par React)
    {
      cities :[], 
      city:'',
      suggestion:''
      
    };

    componentDidMount()
    {
      window.fetch('api_data')
      .then(function(response)
      {
          return response.json();
      }) 
      .then(function(villes)
        {
            this.setState({ cities: villes});
      
        });
    }


    onChangeInput = (event) =>{
      // console.log(event.target.value)

      let suggestions = [];

      if(event.target.value === '')
      {
        this.setState({
          city: event.target.value, suggestions:''
         
        });
        return;
      }
      //Parcours de toutes les villes a la recherche de la saisie
      for (let city of this.state.cities)
      {
        // Est-ce que la ville contient la saisie
        if (city.includes(event.target.value.toLowerCase()))
        {
          //oui, enregistrement de la ville dans les suggestions
          suggestions.push(city);
        }
        
      }

     
      console.table(suggestions)

       this.setState({
          city: event.target.value,
          suggestion: suggestions.join()
        });
    }



    render(){

      return (
        <div className="App">
          <header className="App-header">

          <label htmlFor="city">Quelle ville</label>        
          <input type="text" id="city" value={this.state.city} onChange={ this.onChangeInput }/>

          <p>{this.state.suggestion}</p>


          
          </header>
        </div>
      );
    }
    }


    export default App;
