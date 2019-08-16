import { Maybe } from 'pratica'

Maybe(data)
  .map(people => people.filter(person => person.cool))
  .map(people => people[0])
  .map(person => person.name)
  .map(name => name.toUpperCase())
  .cata({
    Just: data => console.log(data), // JASON
    Nothing: () => console.log('No data available')
  })
