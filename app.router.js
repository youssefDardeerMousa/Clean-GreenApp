import dotenv from 'dotenv'

import authRouter from './src/modules/user/user.router.js'
import categoryRouter from './src/modules/category/category.router.js'
import subcategoryRouter from './src/modules/subcategory/subcategory.router.js'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './src/modules/product/product.router.js'
import CartRouter from './src/modules/cart/cart.router.js'
import CouponRouter from './src/modules/coupon/coupon.router.js'
import OrderRouter from './src/modules/order/order.router.js'
import bestsellerRouter from "./src/modules/bestseller/bestseller.router.js"
dotenv.config()

export const appRouter=(app,express)=>{
    //Global MiddleWare
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
//Router
//authentication
app.use("/auth",authRouter)
// Category Router
app.use("/category",categoryRouter)
//subcategory
app.use("/subcategory",subcategoryRouter)
//  Product
app.use("/product",productRouter)

// cart
app.use("/cart",CartRouter)
// coupon
app.use("/coupon",CouponRouter)
// order  
app.use("/order",OrderRouter)
// best seller
app.use("/bestseller",bestsellerRouter)


const Port=process.env.port
app.listen(Port,()=>{
    console.log(`Server Is Running On Port ${Port}`);
})
//Not Found Page Router
app.all("*",(req, res, next)=>{
    return next(new Error("Not Found Page ! ",{causs:404}))
})
// Global Error Handler
app.use((error,req, res, next)=>{
   const statuscode= error.cause || 500
    return res.status(error.cause || 500).json({success:false,status:statuscode,message:error.message,stack:error.stack})
})

}