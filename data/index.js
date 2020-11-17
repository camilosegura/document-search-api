const fs = require('fs');
const history = require('./001-history.pdf.results.json');
const rxRequest = require('./002-rx-request.pdf.results.json');
const metabolicPanel = require('./003-metabolic-panel.pdf.results.json');

function base64Encode(file) {
    const bitmap = fs.readFileSync(file);

    return new Buffer.from(bitmap).toString('base64');
}

function setImages(data) {
  const localData = [...data];

  localData.forEach((element) => {
    element.files.forEach((file, index) => {
      const base64Encoded = base64Encode(`${__basedir}/faxes/${file}`);

      element.files[index] = `data:image/png;base64,${base64Encoded}`;
    });

    Object.keys(element).forEach((key) => {
      if (Array.isArray(element[key])) {
        element[key].forEach((arrayElement) => {
          const file = arrayElement.file;

          if (file) {
            const base64Encoded = base64Encode(`${__basedir}/faxes/${file}`);

            arrayElement.file = `data:image/png;base64,${base64Encoded}`;
          }
        });
      }
    });
  });

  return localData;
}

let data = [
  history,
  rxRequest,
  metabolicPanel,
];

data = setImages(data);

module.exports = data;
