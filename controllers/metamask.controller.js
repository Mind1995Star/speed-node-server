const MetamaskModel = require("../models/MetamaskAddress.model");

exports.addAddress = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    MetamaskModel.findOne({ address: walletAddress }).then((data) => {
      if (data) {
        console.log("Address already exists");
        return res.status(200).send({
          flag: 1,
        });
      } else {
        const newAddress = new MetamaskModel({
          address: walletAddress,
        }).save();
        console.log("Success Address add");
        return res.status(200).send({
          flag: 2,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.send(500).send({
      flag: 3,
    });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const addressData = await MetamaskModel.find({
      body: req.body.address,
    });
    // console.log("address", { addressData });
    return res.status(200).send({ addressData });
  } catch (err) {
    console.log(err);
  }
};
