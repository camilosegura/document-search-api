const { getAllInformation, getInformationBySearch } = require(`${__basedir}/managers/medical.manager`);

function getInformation(req, res) {
  const { search = '' } = req.query;
  let data = [];

  if (search) {
    data = getInformationBySearch(search);
  } else {
    data = getAllInformation();
  }

  res.send(data);
}

module.exports = {
  getInformation,
};
