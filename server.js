    
    const express = require("express");
    const axios = require('axios');
    const app = express();

    app.get('/',(req,res)=>{
    res.send("funcionando")     
    });

    app.get('/pokemon',async(req,res)=>{
       
         const valor = req.query.id || req.query.name ;
        
            if(!valor ){
                 return res.status(400).send("Informe o nome ou ID do Pokémon");
               
            }
        try{
        
            const response=await axios.get(
                
                `https://pokeapi.co/api/v2/pokemon/${valor}`
        );
        const data=response.data;
    
    const resultado = {
    nome: data.name,
    tipo: data.types?.[0]?.type?.name,
    habilidade: data.abilities?.[0]?.ability?.name,
    altura: data.height,
    peso: data.weight
    };
    res.status(200).json(resultado);
   
        }
  

       catch (erro) {
    if (erro.response?.status === 404) {
        return res.status(404).json({ erro: "Pokémon não encontrado" });
    }

    res.status(500).json({ erro: "Erro ao buscar dados do Pokemon" });
}
    });
 
    app.listen(3000,()=>{
    console.log("rodando");
    })
 