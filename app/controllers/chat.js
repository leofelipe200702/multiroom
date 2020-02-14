module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;
    application.get('io').emit('msgCliente',{apelido: dadosForm.apelido, msg: 'Acabou de entrar no chat.'});
    res.render('chat',{dadosForm: dadosForm});
}