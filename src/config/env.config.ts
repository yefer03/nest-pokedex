import { mongo } from "mongoose";



export const EnvConfiguration = () => ({

    enviornment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 10   

})
