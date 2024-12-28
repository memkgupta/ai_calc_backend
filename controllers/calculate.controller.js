import User from "../models/user.model.js";
import ImageAnalyzer from "../utils/index.js";

export const calculate = async(req,res)=>{

const {dict} = req.body;
const analyzer = ImageAnalyzer.getInstance();
const buffer = req.body.image.split(',')[1];
const image = Buffer.from(buffer,'base64');
try {
    console.log(dict)
   
    const resp =await analyzer.analyzeImage(image,dict);
   res.status(200).json({success:true,data:resp});
} catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Some error occured"})
}


}