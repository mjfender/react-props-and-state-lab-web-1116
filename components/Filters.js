const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    value: props.filters.type
    };

  }

  handleButton(event){
    this.props.onFindPetsClick(event)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
    this.props.onChangeType(event.target.value)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleButton.bind(this)}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
