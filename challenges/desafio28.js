// usar insertOne - Insere um documento em uma coleção - site consultado
// usar findOne - Retorna um documento que satisfaz os critérios de consulta especificados na coleção ou visualização
// https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/
// https://docs.mongodb.com/manual/reference/method/db.collection.findtOne/

// precisei criar uma constante para a empresa, paea ser usanda na query
const empresaVoo = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
    { empresa: empresaVoo,
totalVoosDomesticos: db.voos.find(
        { "empresa.nome": empresaVoo, natureza: "Doméstica" },
).count(),
},
);

db.resumoVoos.findOne({ empresa: empresaVoo }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
