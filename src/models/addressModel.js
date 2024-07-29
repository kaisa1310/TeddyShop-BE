const mongoose = require('mongoose')

var addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    fullName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10
    },
    location: {
      type: String,
      required: true
    },
    addressCity: {
      //  Tỉnh - Thành phố
      type: String,
      required: true
    },
    addressDistrict: {
      // Quận - huyện
      type: String,
      required: true
    },
    addressWard: {
      // Phường - xã
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

//Export the model
module.exports = mongoose.model('Address', addressSchema)
