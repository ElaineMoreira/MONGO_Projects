db.voos.deleteMany(
    { $and: [{ "empresa.nome": { $eq: "GOL" } }, 
    { "passageiros.pagos": { $lte: 10, $gte: 5 } }] },
    );
