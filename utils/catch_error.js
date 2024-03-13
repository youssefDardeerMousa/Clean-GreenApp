export const CatchError=(controller)=>{
return (req,res,next)=>{
return controller(req,res,next).catch((error)=>{
return next(error)
});
}
}
