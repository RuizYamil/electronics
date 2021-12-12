// Show and hide - Shipping
$('#btn-tariff').click(()=>{
    $('section.tariff-addresses').toggle()
})

$('#btn-package').click(()=>{
    $('section.follow-shipping').toggle()
})

// Tariff and Addresses
const areaCode = document.getElementById('area-code')
const address = document.getElementById('addresses')

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('form-tariff').addEventListener('submit', validationTariff)
});

function validationTariff(e){
    e.preventDefault();
    let msg = document.getElementsByClassName('msg-tariff')[0];
    msg.innerText = '';
    if(areaCode.value == '' && address.value == ''){
        msg.style.color = 'red'
        areaCode.style.border = '2px solid red';
        address.style.border = '2px solid red';
        msg.innerText = 'Debes completar los campos obligatorios';
    }else if(areaCode.value == ''){
        areaCode.style.border = '2px solid red';
        address.style.border = '1px solid #ccc';
        msg.innerText = 'Debes ingresar el código postal';
    }else if(address.value == ''){
        address.style.border = '2px solid red';
        areaCode.style.border = '1px solid #ccc';
        msg.innerText = 'Debes ingresar la dirección';
    }else{
        msg.innerText = 'El formulario se envió correctamente';
        msg.style.color = 'green'
        clean();
    }
}

// Follow Shipping
const deliveryNumber = document.getElementById('delivery-number')

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('form-follow-shipping').addEventListener('submit', validationDeliveryNumber)
});

function validationDeliveryNumber(e){
    e.preventDefault();
    let msg = document.getElementsByClassName('msg-delivery-number')[0];
    msg.innerText = '';
    if(deliveryNumber.value == ''){
        msg.style.color = 'red'
        deliveryNumber.style.border = '2px solid red';
        msg.innerText = 'Debes completar el número de envío';
    }else{
        msg.innerText = 'El formulario se envió correctamente';
        msg.style.color = 'green'
        clean();
    }
}