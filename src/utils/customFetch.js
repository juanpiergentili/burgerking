import { Productos } from "../components/Main/Productos";

export const getItemId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {                                               
            resolve(Productos.find(o => o.id === id))   
        }, 2000);
    })
}

export const getItemsList= (parametro) => {
    return new Promise(resolve => {
        if(parametro !== undefined){
            setTimeout(() => {                                              
                resolve(Productos.filter(Productos => Productos.cat === parametro)) 
            }, 2000);
        }
        else{
            setTimeout(()=>{
                resolve(Productos);        
            });
        }
    }
)}
