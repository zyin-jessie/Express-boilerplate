import mongoose from 'mongoose';
import kleur from 'kleur';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log(`${kleur.green('✓')} Connected`);
    return { connection: true };
  } catch (error) {
    console.log(`${kleur.red('✗')} Connection failed: ${error.message}`);
    return { connection: false };
  }
};

export default dbConnection;
