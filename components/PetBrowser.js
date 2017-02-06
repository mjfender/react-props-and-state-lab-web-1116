const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor() {
   super()
  }

  makePets() {
    const petsArray = this.props.pets.map( (pet, i) =>  {
      return <Pet pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} key={i}/>
    })
    return petsArray
  }

  render() {
    const petElements = this.makePets()

    return (
      <div className="ui cards">
        {petElements}
      </div>
    );
  }
}

module.exports = PetBrowser;
