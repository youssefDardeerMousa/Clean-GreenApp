export const IsValidObjectId = (value, helper) => {
    return Types.ObjectId.isValid(value)
      ? true
      : helper.message("Invalid objectId!");
  };
  
  

export const isValid=(schema)=>{
   
return (req,res,next)=>{
    const copyReq={...req.body,...req.params,...req.query}
   
    const validationResult=schema.validate(copyReq,{abortEarly:false})
if(validationResult.error){
    const message=validationResult.error.details.map((error)=>error.message)
    return next(new Error(message,{cause:400}))
}
return next()
}

}