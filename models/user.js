const mongoose = requite('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    typr: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);
