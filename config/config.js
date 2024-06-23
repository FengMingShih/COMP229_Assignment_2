const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    //mongoUri: process.env.MONGODB_URI ||"mongodb+srv://Blessji:YnyCGmxrHFVGCBeI@cluster0.g4uvc4e.mongodb.net/skeleton?retryWrites=true&w=majority"||
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://fengmingshih:12345@cluster0.0bmdvpq.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Cluster0"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   