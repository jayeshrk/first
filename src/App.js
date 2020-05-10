import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, index)} />
          )}
        </div>
      )
      style.backgroundColor = 'red';
    }
    const classes = [];
    if (this.state.persons.length <= 2)
      classes.push('red');
    if (this.state.persons.length <= 1)
      classes.push('bold');

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>It is working</p>
        <button style={style} onClick={this.toggle}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
