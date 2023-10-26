document.addEventListener('DOMContentLoaded', function() {

    let display = document.getElementById('display');
    let numbers = document.querySelectorAll('.num');
    let operators = document.querySelectorAll('.op');
    let equals = document.getElementById('equals');
    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');
    let operation = '';
    let clear = document.getElementById('clear');

    // Adicionar evento de clique para os números
    numbers.forEach(function(button) {
        button.addEventListener('click', function(e) {
            display.value += e.target.innerText;
        });
    });

    // Adicionar evento de clique para os operadores
    operators.forEach(function(button) {
        button.addEventListener('click', function(e) {
            operation += display.value + ' ' + e.target.innerText + ' ';
            display.value = '';
        });
    });

    // Adicionar evento de clique para o botão de igual
    equals.addEventListener('click', function() {
        operation += display.value;
        try {
            display.value = eval(operation.replace(',', '.'));
            output1.value = operation + " = " + display.value;
            output2.value = operation + " = " + display.value;
        } catch (e) {
            display.value = 'Erro';
            output2.value = 'Erro';
        }
        operation = '';
    });
});

clear.addEventListener('click', function() {
    display.value = ''; 
    output1.value = '';
    output2.value = '';
    operation = '';
});