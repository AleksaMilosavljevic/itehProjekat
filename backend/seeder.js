import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import Category from './models/categoryModel.js'
import connectDB from './config/db.js';


dotenv.config()

connectDB()

const importData = async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

       //import users
        const createdUsers = await User.insertMany(users)

        //create category
        const category = new Category({name:'Telefoni'})
        await category.save()
        const category2 = new Category({name:'Lapotopovi'})
        await category2.save()
        const category3 = new Category({name:'Tableti'})
        await category3.save()
        const category4 = new Category({name:''})
        await category4.save()
        
        //get admin id
        const adminUser = createdUsers[0]._id
        
        //insert admin id in each product
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser, category:category}
        })

        //import products
        await Product.insertMany(sampleProducts)

        console.log('Data imported!'.green.inverse)
        process.exit()

    } catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

// using "-d" as a arg will delete all data from db
if(process.argv[2] === '-d') {
    destroyData()
}else {
    importData()
};
