const rp = require('request-promise');
const { mockAPI } = require('../config/mockData');

exports.searchLicenses = async ({licenseNumber, licenseType, state}) => {
    // return mockAPI;

    const requestOptions = {
        method: 'GET',
        uri: `${process.env.CLOUDHUB_API_URL}/api/nurseLookup`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "LicenseNumber": licenseNumber,
            "Jurisdiction": state,
            "LicenseType": licenseType
        },
        json: true
    };

    const response = await rp(requestOptions);
    console.log(response);

    return response;
};
