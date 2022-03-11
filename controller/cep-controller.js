const axios = require("axios");

class CepController{
    async Index(req,res){
        res.render("index", {
            error: ""
        });
    }
   async Search(req,res){
        let {search} = req.body;
        let filtered_value = search.replace(/[^a-z0-9]/gi, '');
        try {
            if(isNaN(filtered_value)){
                res.render("index", {
                    error: "CEP invalido!"
                }) 
            }
            let {data} = await axios.get(`https://viacep.com.br/ws/${search}/json/`);

            if(data.cep !== undefined){

                res.render("dataView",{
                    cep: data.cep,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                    ibge: data.ibge,
                    gia: data.gia,
                    ddd: data.ddd,
                    siafi: data.siafi
                })

            return;
            }
            else{

                //service call
                let {search} = req.body;
                let data = await financial_service.search(search);
                res.json(data);
            }
    } catch (error) {
        res.render("index", {
            error: "CEP não encontrado!"
        })        
    }
    }

   
}

module.exports = new CepController();