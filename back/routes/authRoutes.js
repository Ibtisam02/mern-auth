const express=require("express")
const routes = express.Router()
const cors=require("cors")

routes.use(express.json())
routes.use(cors())
const {create,userLogin,getProfile} = require('../contorollars/auth_cont')

routes.post('/register',create)
routes.post('/login',userLogin)
routes.get('/profile',getProfile)

module.exports = routes