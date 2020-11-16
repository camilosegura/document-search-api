const data = require(`${__basedir}/data`);

function getAllInformation() {
  return data;
}

function getBySearch(search) {
  return data;
}

module.exports = {
  getAllInformation,
  getBySearch,
}
