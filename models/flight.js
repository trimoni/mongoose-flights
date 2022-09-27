import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  },
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: oneYearFromNow()
  },
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
  tickets: [ticketSchema]
})

function oneYearFromNow(){
  const today = new Date()
  console.log('today', today.getFullYear()+1)
  today.setFullYear(today.getFullYear()+1)
  console.log(today)
  return today
}

oneYearFromNow()

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}