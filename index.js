require('dotenv').config()
const { request, response, json } = require('express')
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny', {
  skip: (req, res) => { return req.method === 'POST' }
}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body', {
  skip: (req, res) => { return req.method !== 'POST' }
}))

const errorHandler = (error, request, response, next) => {

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'Malformatted id' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }
  next(error)
}

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/api/persons', (request, response) => {
  Person.find({}).then(result => {
    response.json(result)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id)
    .then(result => {
      if (result) {
        response.json(result)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  const body = request.body
  const person = {
    number: body.number
  }
  Person.findByIdAndUpdate(id, person, { new: true, runValidators: true })
    .then(result => {
      if (!result) {
        response.status(404).send(`${id} not found`)
      }
      response.json(result)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findByIdAndRemove(id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if (body) {
    if ('name' in body && 'number' in body) {
      const person = new Person({
        name: body.name,
        number: body.number
      })
      person.save().then(result => {
        console.log(`Added ${person.name} number ${person.number} to phonebook`);
        response.json(person)
      })
      .catch(error => next(error))
    }
    else {
      response.status(400).json({ error: 'Missing name/number in body' })
    }
  }
  else {
    response.status(400).json({ error: 'Empty body' })
  }
})

app.get('/info', (request, response) => {
  Person.count({}).then(result => {
    response.send(
      `<div>
        <p>Phonebook has info for ${result} people</p>
        <p>${new Date()}
      </div>`
    )
  })
})

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})