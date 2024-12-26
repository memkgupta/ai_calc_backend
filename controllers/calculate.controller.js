import User from "../models/user.model.js";
import ImageAnalyzer from "../utils/index.js";

export const calculate = async(req,res)=>{
    if (!req.file) {
        return res.status(400).json({ message: 'No Image uploaded.' });
      }
const _user = req.user;
const user = await User.findById(_user.userId);
if(!user){
    res.status(200).json({success:false,message:"Invalid session , please login again"})
}
const {dict} = req.body;
const analyzer = ImageAnalyzer.getInstance();
const buffer = req.file.buffer;
try {
    console.log(dict)
    const dictParsed = JSON.parse(dict||{})
    const resp =await analyzer.analyzeImage(buffer,dictParsed);
   res.status(200).json({success:true,data:resp});
} catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Some error occured"})
}


}