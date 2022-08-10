const MetamaskModel = require("../models/MetamaskAddress.model");

exports.addAddress = async (req, res) => {
  try {
    const { walletAddress } = req.body;
    // console.log("metamask address:", req.body);
    MetamaskModel.findOne({ address: walletAddress }).then((data) => {
      if (data) {
        console.log("Address already exists");
        // errors.address = "Address already exists";
        return res.status(200).send("Address already exists");
      } else {
        const newAddress = new MetamaskModel({
          address: walletAddress,
        }).save();
        console.log("Success Address add");
        // const data = await new MetamaskModel({ address: walletAddress }).save();
        return res.status(200).send("Registered in the database");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// exports.getAddress = async (req, res) => {
//   try {
//     const addressData = await MetamaskModel.find({
//       address: req.body.address,
//     });
//     console.log({ data: addressData });
//     // return res.status(200).send({ data: workOrderData });
//   } catch (err) {
//     console.log(err);
//   }
// };
