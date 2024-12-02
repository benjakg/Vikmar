// Inicializa el carrito
var cart = {
    econ: { name: "Económico", price: 16, quantity: 0 },
    cuarto: { name: "Cuarto", price: 26, quantity: 0 },
    medio: { name: "Medio", price: 49, quantity: 0 },
    entero: { name: "Entero", price: 92, quantity: 0 },
    'costilla-personal': { name: "Costilla de cerdo (Personal)", price: 25, quantity: 0 },
    'costilla-medio': { name: "Costilla de cerdo (Medio)", price: 45, quantity: 0 },
    'costilla-entero': { name: "Costillas de cerdo (Entero)", price: 85, quantity: 0 }
  };
  
  // Función para incrementar la cantidad
  function increment(productId) {
    if (cart[productId]) {
      cart[productId].quantity++;
      document.getElementById(productId + '-count').innerText = cart[productId].quantity;
      console.log(`Incrementado: ${productId}, cantidad: ${cart[productId].quantity}`);
    }
  }
  
  // Función para decrementar la cantidad
  function decrement(productId) {
    if (cart[productId] && cart[productId].quantity > 0) {
      cart[productId].quantity--;
      document.getElementById(productId + '-count').innerText = cart[productId].quantity;
      console.log(`Decrementado: ${productId}, cantidad: ${cart[productId].quantity}`);
    }
  }
  
  // Función para finalizar la compra y mostrar el resumen
  function finalizePurchase() {
    var summaryContent = "";
    var total = 0;
  
    // Genera el contenido del resumen de la compra
    for (var key in cart) {
      if (cart[key].quantity > 0) {
        summaryContent += `<p>${cart[key].name}: ${cart[key].quantity} x ${cart[key].price} Bs. = ${cart[key].quantity * cart[key].price} Bs.</p>`;
        total += cart[key].quantity * cart[key].price;
      }
    }
  
    if (summaryContent === "") {
      summaryContent = "<p>No hay productos en el carrito.</p>";
    } else {
      summaryContent += `<hr><p>Total: ${total} Bs.</p>`;
    }
  
    // Muestra el contenido en el modal
    document.getElementById('purchaseSummaryContent').innerHTML = summaryContent;
  }
  
  // Función para confirmar la compra y enviar el mensaje 
  function confirmPurchase() { 
    // Obtener la sucursal seleccionada
    var branch = document.getElementById('branchSelect').value;
     // Definir los números de teléfono para cada sucursal
      var phoneNumbers = { sucursal1: 'https://wa.me/59165242305', // Reemplaza con el número de teléfono de la sucursal 1 
                           sucursal2: 'https://wa.me/59165242305' // Reemplaza con el número de teléfono de la sucursal 2 
    };
    // Genera el resumen de la compra
    var message = "Gracias por tu compra. Aquí está el resumen de tu pedido:\n";
    var total = 0;

    for (var key in cart) {
        if (cart[key].quantity > 0) {
            message += `${cart[key].name}: ${cart[key].quantity} x ${cart[key].price} Bs. = ${cart[key].quantity * cart[key].price} Bs.\n`;
            total += cart[key].quantity * cart[key].price;
        }
    }

    if (total > 0) {
        message += `\nTotal: ${total} Bs.\n`;
    } else {
        message += "\nNo hay productos en el carrito.";
    }

    // URL de WhatsApp
    var whatsappUrl = `https://wa.me/${65242305}?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, "_blank");
    console.log("Mensaje enviado a WhatsApp:", message);
}

 // Escucha el evento cuando el modal se cierra
$('#purchaseSummaryModal').on('hidden.bs.modal', function () {
    // Reinicia las cantidades del carrito
    for (var key in cart) {
        cart[key].quantity = 0; // Reinicia la cantidad en el carrito
        document.getElementById(key + '-count').innerText = "0"; // Actualiza el contador visible
    }
});


  