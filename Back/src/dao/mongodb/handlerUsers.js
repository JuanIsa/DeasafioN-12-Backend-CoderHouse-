import mongoose from 'mongoose';
import userModel from './models/modelUsers.js';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Sharvelion:nauj7895214@clusterdepruebajts.ysnbgix.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Conectado a base de datos mongo atlas usuarios.'))
    .catch(e => console.log(e));

class Users { 
    async createUser(user) {
        const { email, password } = user;
        const createData = await userModel.create({email,password})
            .then(data => data)
            .catch(e => {
                return ({ Error: e })
            });
        return createData;
    }
    
    async readUser(user) {
        const createData = await userModel.findOne({
            email: user['email'],
            password: user['password']
        })
            .then(data => data)
            .catch(e => {
                return ({ Error: e })
            });
        return createData;
    }
}

export default Users;