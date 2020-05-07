'use strict';
 
module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuasparepat);

    app.route('/tampil/:id')
        .get(jsonku.tampilsparepatberdasarkanid);

    app.route('/tampilmontir')
        .get(jsonku.tampilmontir);

    app.route('/tampilmontir/:id')
        .get(jsonku.tampilmontirberdasarkanid);   

    app.route('/tambah')
        .post(jsonku.tambahsparepat); 
    
    app.route('/tambahservis')
        .post(jsonku.tambahservisan);   
} 