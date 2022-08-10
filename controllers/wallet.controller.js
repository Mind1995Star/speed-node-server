const WalletModel = require("../models/WalletAddress.model");

exports.addAddress = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    WalletModel.findOne({ address: walletAddress }).then((data) => {
      if (data) {
        console.log("Address already exists");
        return res.status(200).send("Address already exists");
      } else {
        const newAddress = new WalletModel({
          address: walletAddress,
        }).save();
        console.log("Success Address add");
        return res.status(200).send("Registered in the database");
      }
    });
  } catch (err) {
    console.log(err);
  }
};
