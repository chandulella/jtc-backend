const mongoose = require('mongoose')

mongoose.connect('mongodb://chandulella23:Chandu3$@ds217671.mlab.com:17671/jtc-test', {
    useNewUrlParser: true
},
    (err, db) => {
        if (!err) {
            console.log('Database connected successfully');
        } else {
            console.log('mongoose connection failed')
        }
    });
mongoose.set('debug', true);
