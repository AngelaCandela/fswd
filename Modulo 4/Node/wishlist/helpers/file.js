const fs = require("fs");

const createWishlist = (name, data) => {
    return new Promise((resolve, reject) => {

        let newData = "";
        for (let i = 0; i < data.length; i++) {
            newData += `- ${data[i]}\n`;            
        }

        fs.writeFile(`./wishlists/${name}-list.txt`, newData, (error) => {
            if (error) reject(error);
            resolve(`El fichero ${name}-list.txt ha sido guardado`);
        });
    })    
};

const readWishlist = (name) => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(`./wishlists/${name}-list.txt`)) {
            fs.readFile(`./wishlists/${name}-list.txt`, "utf-8", (error, data) => {
                if (error) reject(error);
                resolve(data);
            });        
        } else {
            reject("El fichero no existe");
        }        
    })
      
};

const deleteWishlist = (name) => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(`./wishlists/${name}-list.txt`)) {
            fs.rmSync(`./wishlists/${name}-list.txt`);
            resolve("El fichero ha sido eliminado con éxito");       
        } else {
            reject("El fichero no existe");
        }        
    })
      
};

module.exports = {
    createWishlist,
    readWishlist,
    deleteWishlist
};