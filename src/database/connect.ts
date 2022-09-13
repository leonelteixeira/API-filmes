import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://leonel:1234567890@cluster0.kspkpl5.mongodb.net/?retryWrites=true&w=majority').then(() =>
  console.log('📦 Sucessfully connected with database')
)
