const mongoose = require('mongoose');

const FacilitySchema = mongoose.Schema({
    facility_name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.Facility || mongoose.model('Facility', FacilitySchema);