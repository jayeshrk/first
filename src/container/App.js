import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '12', name: 'Jayesh', age: '24' },
      { id: '120', name: 'om', age: '14' },
      { id: '01', name: 'swami', age: '7' }
    ],
    showPersons: true
  }

  nameChangedHandler = (event, index) => {

    const person = {
      ...this.state.persons[index]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  toggle = () => {
    const show = this.state.showPersons
    this.setState({
      showPersons: !show
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.toggle} />
        {persons}
      </div>
    );
  }
}

export default App;
