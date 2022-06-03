import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
app.use(bodyParser.json({limit: '30mb', extened: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extened: true}))