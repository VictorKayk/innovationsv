import {model, Schema} from 'mongoose';

const schema = new Schema({
  cityId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});
export const CityModel = model('City', schema);
