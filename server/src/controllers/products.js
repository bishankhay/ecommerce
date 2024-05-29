const getListOfProducts= function (req, res) {
    res.send(['bikram','ram', 'hari', 'gopal']);
  };
  const postProduct = function (req, res) {
    res.send("About this wiki");
  };
  const deleteProduct = function (req, res) {
    res.send("About this wiki");
  };
  const putProduct = function (req, res) {
    res.send("About this wiki");
  };

  module.exports= {getListOfProducts, postProduct, deleteProduct, putProduct}