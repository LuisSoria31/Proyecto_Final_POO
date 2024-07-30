// Registrarse el usuario
// Iniciar sesion
//Cerrar sesion
//Obtener informacion del usuario
//Crear transacciones
//Pedir prestamos
//Borrar cuenta
//Actualizar

import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClasss.js";
import ManagerCard from "./CardClass.js";

class ManagerUser{
    constructor(email,
        phone,
        name,
        lastName,
        isInSession,
        isAdmin,
        password
    ){
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }

    async register(){
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastname: this.lastname,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                pasword: this.pasword,
    
            });
            const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id,"16 digitos al azar","debito",
            "De la fecha actual sumar 3 años","Generar codigos de 3 cifras","active");
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al registrar usuario: ${error}`);
        }
     
    }
    async Login(email,password){
        try {
            const user = await UserModel.findOne({email: email});
            if(!user){
                throw new Error("Usuario no registrado")
            }
            if(user.password !== password){
                throw new Error("Coontraseña incorresta!")
            }
            return "Succeede";
        } catch (error) {
            throw new Error(`Error al registrar usuario: ${error}`);
        }
    }

    async getUserInfo(id){
        try {
            const user = await UserModel.finById(id);
            return user;
        } catch (error) {
            throw new Error(`Error al registrar usuario: ${error}`);
        }
    }
    async updateEmail(id,email,){
        try {
            if(!email){
                throw  new Error("Correo invalido");
            }
            await UserModel.finByIdAndUpdate(id,{
                $set:{email}
            })
            return "Ok"
        } catch (error) {
            throw new Error(`Error al actualizar el correo: ${error}`);
        }
    }

    async updatePhone(id,phone){
    try {
        if(!phone){
            throw  new Error("Numero Telefonico invalido");
        }
        await UserModel.finByIdAndUpdate(id,{
            $set:{phone}
        })
        return "Ok"
    } catch (error) {
        throw new Error(`Error al actualizar el numero telefonico: ${error}`);
       }
    }

    async updatePhone(id,password){
    try {
        if(!phone){
            throw  new Error("Numero Telefonico invalido");
        }
        await UserModel.finByIdAndUpdate(id,{
            $set:{phone}
        })
        return "Ok"
    } catch (error) {
        throw new Error(`Error al actualizar el numero telefonico: ${error}`);
       }
    }

    // Pendienre eliminar usuario
}

export default ManagerUser;