const history = require('./001-history.pdf.results.json');
const rxRequest = require('./002-rx-request.pdf.results.json');
const metabolicPanel = require('./003-metabolic-panel.pdf.results.json');

const data = [
  history,
  rxRequest,
  metabolicPanel,
];

module.exports = data;
