'use strict';

for (let i = 0; i < productos.length; i++) {
    $('#productos').append(
        '<div class="col-6 col-md-4">' +
            '<div class="sc-product-item product-container">' +
                '<img class="img-fluid rounded-circle" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +  // Agregamos la clase "rounded-circle"
                '<h4 data-name="product_name" style="color: white;">'+ productos[i]['Nombre'] +'</h4>' +
                '<p data-name="product_desc" style="color: white;">'+ productos[i]['Descripcion'] +'</p>' +
                '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                '<div style="color: white;">$ '+ productos[i]['Precio'] +'</div>' +
                '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
            '</div>' +
        '</div>'
    );
}

$('#smartcard').smartCart({
    cartItemTemplate: '<div class="d-flex">' +
        //'<img class="img-fluid" src="{product_image}" />' +
        '<h3 class="h5 list-group-item-heading" style="color: white;">{product_name}</h3>' +
    '</div>',
  lang: {
        cartTitle: '<span style="color: white;">Mis productos</span>',
        checkout: 'Hacer pedido',
        clear: 'Borrar',
        subtotal: '<span style="color: white;">Subtotal:</span>',
        cartRemove: '×',
        cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir',
    }
});
