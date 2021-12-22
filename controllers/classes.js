const Claseses = require('../models/class')


// get all classes
exports.getAllclasses = async(req,res,next)=>{
     try {
         const data = await  Claseses.find()
         return res.status(200).json(data)

     } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
        next(err);
     }
}

// create classes
exports.createClasses = async(req,res,next)=>{
    try {
        const data = req.body
        const updatedClass = new Claseses(data)
        await updatedClass.save()
        return res.status(200).json({ message: 'Class created!', updatedClass})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}

// update classes
exports.updateClasses = async(req,res,next)=>{
    try {
        const data = req.body
        const updatedClass = new Claseses(data)
        await updatedClass.save()
        return res.status(200).json({ message: 'Class updated!'})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}

// delete classes
exports.deleteClasses = async(req,res,next)=>{
    try {
        await Claseses.findByIdAndDelete(req.query['id'])
        return res.status(200).json({ message: 'Class deleted!'})

    } catch (err) {
       if (!err.statusCode) {
           err.statusCode = 500;
         }
       next(err);
    }
}



