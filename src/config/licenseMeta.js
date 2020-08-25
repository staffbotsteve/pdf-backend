const licenseTypes = [
    {
        label: 'RN',
        value: 'RN'
    },
    {
        label: 'PN',
        value: 'PN'
    },
    {
        label: 'CNP',
        value: 'CNP'
    },
    {
        label: 'CNS',
        value: 'CNS'
    },
    {
        label: 'CNM',
        value: 'CNM'
    },
    {
        label: 'CNM',
        value: 'CRNA'
    },
];
const nlcMemberStates = [
    { name: 'Alabama', compact: true },
    { name: 'Alaska', compact: false },
    { name: 'Arizona', compact: true },
    { name: 'Arkansas', compact: true },
    { name: 'California', compact: false },
    { name: 'Colorado', compact: true },
    { name: 'Connecticut', compact: false },
    { name: 'Delaware', compact: true },
    { name: 'District of Columbia', compact: false },
    { name: 'Florida', compact: true },
    { name: 'Georgia', compact: true },
    { name: 'Hawaii', compact: false },
    { name: 'Idaho', compact: true },
    { name: 'Illinois', compact: false },
    { name: 'Indiana', compact: true },
    { name: 'Iowa', compact: true },
    { name: 'Kansas', compact: true },
    { name: 'Kentucky', compact: true },
    { name: 'Louisiana', compact: true },
    { name: 'Maine', compact: true },
    { name: 'Maryland', compact: true },
    { name: 'Massachusetts', compact: false },
    { name: 'Michigan', compact: false },
    { name: 'Minnesota', compact: false },
    { name: 'Mississippi', compact: true },
    { name: 'Missouri', compact: true },
    { name: 'Montana', compact: true },
    { name: 'Nebraska', compact: true },
    { name: 'Nevada', compact: false },
    { name: 'New Hampshire', compact: true },
    { name: 'New Jersey', compact: false },
    { name: 'New Mexico', compact: true },
    { name: 'New York', compact: false },
    { name: 'North Carolina', compact: true },
    { name: 'North Dakota', compact: true },
    { name: 'Ohio', compact: false },
    { name: 'Oklahoma', compact: true },
    { name: 'Oregon', compact: false },
    { name: 'Pennsylvania', compact: false },
    { name: 'Rhode Island', compact: false },
    { name: 'Puerto Rico', compact: false },
    { name: 'South Carolina', compact: true },
    { name: 'South Dakota', compact: true },
    { name: 'Tennessee', compact: true },
    { name: 'Texas', compact: true },
    { name: 'Utah', compact: true },
    { name: 'Vermont', compact: false },
    { name: 'Virginia', compact: true },
    { name: 'Washington', compact: false },
    { name: 'West Virginia', compact: true },
    { name: 'Wisconsin', compact: true },
    { name: 'Wyoming', compact: true }
];
const states = [
    {
        label: 'Alabama',
        value: 'AL',
    },
    {
        label: 'Alaska',
        value: 'AK',
    },
    {
        label: 'Arizona',
        value: 'AZ',
    },
    {
        label: 'Arkansas',
        value: 'AR',
    },
    {
        label: 'California',
        value: 'CA',
    },
    {
        label: 'Colorado',
        value: 'CO',
    },
    {
        label: 'Connecticut',
        value: 'CT',
    },
    {
        label: 'Delaware',
        value: 'DE',
    },
    {
        label: 'District of Columbia',
        value: 'DC',
    },
    {
        label: 'Florida',
        value: 'FL',
    },
    {
        label: 'Georgia',
        value: 'GA',
    },
    {
        label: 'Hawaii',
        value: 'HI',
    },
    {
        label: 'Idaho',
        value: 'ID',
    },
    {
        label: 'Illinois',
        value: 'IL',
    },
    {
        label: 'Indiana',
        value: 'IN',
    },
    {
        label: 'Iowa',
        value: 'IA',
    },
    {
        label: 'Kansas',
        value: 'KS',
    },
    {
        label: 'Kentucky',
        value: 'KY',
    },
    {
        label: 'Louisiana',
        value: 'LA',
    },
    {
        label: 'Maine',
        value: 'ME',
    },
    {
        label: 'Maryland',
        value: 'MD',
    },
    {
        label: 'Massachusetts',
        value: 'MA',
    },
    {
        label: 'Michigan',
        value: 'MI',
    },
    {
        label: 'Minnesota',
        value: 'MN',
    },
    {
        label: 'Mississippi',
        value: 'MS',
    },
    {
        label: 'Missouri',
        value: 'MO',
    },
    {
        label: 'Montana',
        value: 'MT',
    },
    {
        label: 'Nebraska',
        value: 'NE',
    },
    {
        label: 'Nevada',
        value: 'NV',
    },
    {
        label: 'New Hampshire',
        value: 'NH',
    },
    {
        label: 'New Jersey',
        value: 'NJ',
    },
    {
        label: 'New Mexico',
        value: 'NM',
    },
    {
        label: 'New York',
        value: 'NY',
    },
    {
        label: 'North Carolina',
        value: 'NC',
    },
    {
        label: 'North Dakota',
        value: 'ND',
    },
    {
        label: 'Ohio',
        value: 'OH',
    },
    {
        label: 'Oklahoma',
        value: 'OK',
    },
    {
        label: 'Oregon',
        value: 'OR',
    },
    {
        label: 'Pennsylvania',
        value: 'PA',
    },
    {
        label: 'Puerto Rico',
        value: 'PR',
    },
    {
        label: 'Rhode Island',
        value: 'RI',
    },
    {
        label: 'South Carolina',
        value: 'SC',
    },
    {
        label: 'South Dakota',
        value: 'SD',
    },
    {
        label: 'Tennessee',
        value: 'TN',
    },
    {
        label: 'Texas',
        value: 'TX',
    },
    {
        label: 'Utah',
        value: 'UT',
    },
    {
        label: 'Vermont',
        value: 'VT',
    },
    {
        label: 'Virginia',
        value: 'VA',
    },
    {
        label: 'Washington',
        value: 'WA',
    },
    {
        label: 'West Virginia',
        value: 'WV',
    },
    {
        label: 'Wisconsin',
        value: 'WI',
    },
    {
        label: 'Wyoming',
        value: 'WY',
    },
];

module.exports = {
    licenseTypes,
    nlcMemberStates,
    states
};
