import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const uri = process.env.DB_URI; 
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(uri, options);
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToDatabase;
