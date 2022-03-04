//Checking username and password,if available then create a new JWT
//if there error exists send back to front-end
//Set-up authentication in a way that userr an access the dashboard if jwt is created

const errorHandlerMiddleware = require("../middleware/error-handler");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new errorHandlerMiddleware("Please provide name and password", 400);
  }
  
  
  //just for demo, normally provided by DB!!!!
  const id = new Date().getDate();


  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{
    expiresIn: '30d'
  })
  res.status(200).json({ msg: "user created",token});
};


const dashboard = async (req, res) => {
    //After providing token through postman
    const authHeader = req.headers.authorization;

    if((!authHeader) || (!authHeader.startsWith('Bearer '))){
      throw new errorHandlerMiddleware("No token provided");
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      // console.log(decoded);
      const luckyNumber = Math.floor(Math.random() * 100)
  
      res.status(200).json({
        msg: `Hello, ${decoded.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      })
      
    } catch (error) {
      throw new CustomAPIError("No match availableF");
    }
  
}

module.exports = { login, dashboard };
