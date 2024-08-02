    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.form-inline');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que o formulário seja enviado

            const filtro = document.getElementById('filtro').value.toLowerCase();
            const cards = document.querySelectorAll('.col-md-4');

            cards.forEach(card => {
                const nomeProduto = card.getAttribute('data-nome').toLowerCase();
                if (nomeProduto.includes(filtro)) {
                    card.style.display = 'block'; // Mostra o card que corresponde à busca
                } else {
                    card.style.display = 'none'; // Oculta os cards que não correspondem à busca
                }
            });
        });
    });
