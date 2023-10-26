document.addEventListener('DOMContentLoaded', function() {

    let textAreaLibras = document.getElementById('textAreaLibras');
    let textAreaPortugues = document.getElementById('textAreaPortugues');

    textAreaPortugues.addEventListener('input', function() {
        textAreaLibras.value = removeSpecialCharactersAndAccents(textAreaPortugues.value);
    });

});

function removeSpecialCharactersAndAccents(str) {
    const accentMap = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'â': 'a', 'ê': 'e', 'ô': 'o', 'ã': 'a', 'õ': 'o',
        'ü': 'u', 'ç': 'c', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Â': 'A', 'Ê': 'E', 'Ô': 'O',
        'Ã': 'A', 'Õ': 'O', 'Ü': 'U', 'Ç': 'C'
    };

    str = str.replace(/[^A-Za-z0-9 ]/g, function(match) {
        return accentMap[match] || '';
    });

    return str;
}
