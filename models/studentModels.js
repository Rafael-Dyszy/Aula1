import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      // validate if that note is minus of 0
      if (value < 0)
        throw new Error('Valor negativo para nota nao e permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
