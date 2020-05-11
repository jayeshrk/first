import React from 'react';
import Person from './Person/Person';
const persons = props => (
    props.persons.map((person, index) =>
        <Person
            key={person.id}
            click={props.clicked.bind(this, index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.changed(event, index)} />
    )
);

export default persons;