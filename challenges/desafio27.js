// usar insertOne - Insere um documento em uma coleção - site consultado
// usar findOne - Retorna um documento que satisfaz os critérios de consulta especificados na coleção ou visualização
// https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/
db.resumoVoos.insertOne(
    { empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count(),
    },
  );
  
  db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
