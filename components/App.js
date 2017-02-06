const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
  }


  onAdoptPet(id){
    const newAdoptedPets = []
    newAdoptedPets.push(id)
    this.setState({adoptedPets: newAdoptedPets})
  }

  onChangeType(newType){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: newType,
      })
    })
  }

  onFindPetsClick(event) {
    const type = this.state.filters.type
    const apiURL = this.findAPIpath(type)
    fetch(apiURL)
    .then( (response) => { 
      return response.json() })
    .then( (data) => {
      this.setState({
      pets: data})
      })
  }

  findAPIpath(type){
    switch (type) {
      case "all":
      return "/api/pets"
      break; 

      case "cat":
      return "/api/pets?type=cat"
      break;

      case "dog":
      return "/api/pets?type=dog"
      break;


      case "micropig":
      return "/api/pets?type=micropig"
      break;

    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} filters={this.state.filters} onAdoptPet= {this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
