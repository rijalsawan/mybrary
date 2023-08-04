import connectDb from "../../middleware/mongoose.js";
import User from "../../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";


const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (user){
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
    const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        if (req.body.email === user.email && req.body.password == decryptedPass) {
          const token = jwt.sign({success: true, email:user.email}, process.env.JWT_SECRET);
          res.status(200).json({success: true, token, email: user.email});
        }
        else {
        res.status(400).json({success: false, error: "Invalid Credentials"});
        }
    }
    else {
      res.status(400).json({success:false, error: "Please Register First and Login" });
    }
  } 
};

export default connectDb(handler);