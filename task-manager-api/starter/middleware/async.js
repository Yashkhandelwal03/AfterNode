//Purpose is to have clean code
const asyncWrapper = (fn) => {
    return async (req,res,next) =>{
        try {
          await fn(req,res,next)
        } catch (error) {
            //Pass the error to default built in one
            next(error)
        }
    }
}

module.exports = asyncWrapper