const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
  ncsbnId: {
    type: String,
    unique: true,
  },
  filename: String,
  nurseLicenses: [{
    jurisdiction: String,
    licenseNumber: String,
    licenseType: String,
    firstName: String,
    lastName: String,
    compactStatus: String,
    active: String,
    originalIssueDate: Date,
    expirationDate: Date,
    licenseStatus: String,
    messages: Object
  }],
  rnAuthorizationToPractices: [{
    jurisdiction: String,
    stateAbbreviation: String,
    stateDescription: String,
    authorizationToPracticeCode: String,
    authorizationToPracticeDescription: String,
    authorizationToPracticeNarrative: String,
  }]
}, {timestamps: true});

const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
