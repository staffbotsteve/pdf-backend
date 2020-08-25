const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');
const handlebars = require('handlebars');
const HTML5ToPDF = require('html5-to-pdf/lib');
const { states } = require('../config/licenseMeta');

exports.exportToPDF = async (data) => {
  const html = fs.readFileSync('src/templates/pdf.html', {encoding: 'utf-8'});
  const template = handlebars.compile(html);

  const week = moment.weekdays(moment(data.createdAt)
    .weekday());
  const month = moment.months(moment(data.createdAt)
    .month());
  const pm = moment(data.createdAt).hours() > 12 ? 'PM' : 'AM';
  const nurseLicense = data.nurseLicenses[0];
  let htmlToExport = template({
    name: nurseLicense ? `${nurseLicense.firstName} ${nurseLicense.lastName}` : '',
    ncsbnId: data.ncsbnId,
    createTime: `${week} ${month} ${moment(data.createdAt)
      .format('DD YYYY hh:mm:ss')} ${pm}`
  });

  const nurseLicenses = data.nurseLicenses.map((item) => {
    const nurseState = states.find(state => state.value === item.jurisdiction);
    return {
      ...item,
      jurisdiction: nurseState ? nurseState.label : item.jurisdiction
    };
  });

  const licensesHtml = nurseLicenses.map(item => `
      <div class="border-wrapper">
          <table>
              <thead>
                  <tr>
                      <th>Name on License</th>
                      <th>Type</th>
                      <th>License State</th>
                      <th>License</th>
                      <th>Active</th>
                      <th>License Status</th>
                      <th>License Original Issue Date</th>
                      <th>License Expiration Date</th>
                      <th>Compact Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>${item.firstName} ${item.lastName}</td>
                      <td>${item.licenseType}</td>
                      <td>${item.jurisdiction}</td>
                      <td>${item.licenseNumber}</td>
                      <td>${item.active}</td>
                      <td>${item.licenseStatus}</td>
                      <td>${moment(item.originalIssueDate).format("MM/DD/YYYY")}</td>
                      <td>${moment(item.expirationDate).format("MM/DD/YYYY")}</td>
                      <td>${item.compactStatus}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  `);
  const statesHtml = data.rnAuthorizationToPractices.map(item => `<span>${item.stateDescription} (RN)</span>`);
  htmlToExport = htmlToExport.replace(new RegExp("@@#Licenses#@@", 'g'), licensesHtml.join(''));
  htmlToExport = htmlToExport.replace(new RegExp("@@#States#@@", 'g'), `
    <div class="type-wrapper" style='min-height: ${20 * Math.ceil(data.rnAuthorizationToPractices.length / 3)}px;'>
      ${statesHtml.join('')}
    </div>`);

  const outputPath = path.join(`output/${data.ncsbnId}.pdf`);
  const htmL5ToPDF = await new HTML5ToPDF({
    inputBody: htmlToExport,
    outputPath,
    templatePath: path.join('public'),
    options: {
      pageSize: '',
      printBackground: true,
      launchOptions: {
        width: 800,
        height: 3000
      }
    }
  });
  await htmL5ToPDF.start();
  await htmL5ToPDF.build();
  await htmL5ToPDF.close();
  return outputPath;
};
