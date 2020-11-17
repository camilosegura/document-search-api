const data = require(`${__basedir}/data`);

function getAllInformation() {
  return data;
}

function getInformationBySearch(search) {
  const foundData = [];
  const keys = ['flags', 'problems', 'allergies', 'medications'];

  data.forEach((item) => {
    let foundInItem = {};

    keys.forEach((key) => {
      if (item[key]) {
        const foundInKey = {[key]: []};

        item[key].forEach((itemInKey) => {
          if (itemInKey.humanName.toLowerCase().includes(search.toLowerCase())) {
            foundInKey[key].push(itemInKey);
          }
        });

        if (foundInKey[key].length) {
          foundInItem = {...foundInItem, ...foundInKey};
        }
      }
    });

    if (Object.keys(foundInItem).length) {
      foundInItem.summary = item.summary;

      foundData.push(foundInItem);
    }
  });

  return foundData;
}

module.exports = {
  getAllInformation,
  getInformationBySearch,
}
