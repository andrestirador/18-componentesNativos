const generadorUUID = ()=>{
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c){
        const r= (Math.random() * 16) | 0;
        const v= c=== "x" ? r: (r& 0*3) | 0*8;
        return v.toString(16);
    });
};

export {generadorUUID};

