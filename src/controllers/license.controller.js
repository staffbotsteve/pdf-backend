const { exportToPDF } = require('../services/exportPDF');
const { searchLicenses } = require('../services/searchLicense');

const { licenseTypes, states } = require('../config/licenseMeta');

const Nurse = require('../models/Nurse');

const mapLicense = license => ({
  ncsbnId: license.NCSBNID,
  nurseLicenses: license.NurseLicenses.map(item => ({
    jurisdiction: item.Jurisdiction,
    licenseNumber: item.LicenseNumber,
    licenseType: item.LicenseType,
    firstName: item.FirstName,
    lastName: item.LastName,
    compactStatus: item.CompactStatus,
    active: item.Active,
    originalIssueDate: item.OriginalIssueDate,
    expirationDate: item.ExpirationDate,
    licenseStatus: item.LicenseStatus,
    messages: item.Messages,
  })),
  rnAuthorizationToPractices: license.RNAuthorizationToPractices.map(item => ({
    jurisdiction: item.Jurisdiction,
    stateAbbreviation: item.StateAbbreviation,
    stateDescription: item.StateDescription,
    authorizationToPracticeCode: item.AuthorizationToPracticeCode,
    authorizationToPracticeDescription: item.AuthorizationToPracticeDescription,
    authorizationToPracticeNarrative: item.AuthorizationToPracticeNarrative,
  }))
});

exports.search = async (req, res, next) => {
  try {
    const {licenseNumber, licenseType, state} = req.body;

    const result = await searchLicenses({ licenseNumber, licenseType, state });

    if (!result.NCSBNID) {
        return res.status(404).json({message: 'No license data for the search criteria'});
    }

    const license = mapLicense(result);

    let nurse = await Nurse.findOne({ ncsbnId: license.ncsbnId });
    if (!nurse) {
      nurse = new Nurse(license);
    }

    await exportToPDF(nurse.toJSON());

    nurse.filename = license.ncsbnId;
    await nurse.save();

    res.json({
      nurse,
      url: `/${nurse.filename}.pdf`
    });
  } catch (error) {
    console.log(`Error search: \n${error}`);
    next(error);
  }
};

exports.getLicenseTypes = async (req, res, next) => {
  try {
    res.json({ licenseTypes });
  } catch (error) {
    console.log(`Error getLicenseTypes: \n${error}`);
    next(error);
  }
};

exports.getStates = async (req, res, next) => {
  try {
    res.json({ states });
  } catch (error) {
    console.log(`Error getStates: \n${error}`);
    next(error);
  }
};
