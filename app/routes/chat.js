

module.exports = function (application) {
    
    var { check, validationResult } = require('express-validator')
    
    application.post('/chat',[
        check('apelido').not().isEmpty().withMessage('O apelido é Obrigatório!').isLength(3,5).withMessage('tamanho inválido')
        ], function (req, res) {
                
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render('index.ejs',{validacao : errors.array()})
            return;   
        }
        
        application.app.controllers.chat.iniciaChat(application, req, res);
    })

    application.get('/chat', function (req, res) {
        application.app.controllers.chat.iniciaChat(application, req, res);
    })
}







    
 
    