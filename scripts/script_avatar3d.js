document.addEventListener('DOMContentLoaded', function() {
    let textArea1 = document.getElementById('textArea01');
    let textArea2 = document.getElementById('textArea02');
    // var modal = new bootstrap.Modal(document.getElementById('autoShowModal'));
    // modal.show();

    textArea1.addEventListener('input', function() {
        textArea2.innerText = textArea1.value;
    });

});


