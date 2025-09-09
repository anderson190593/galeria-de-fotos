document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões de filtro
    const filterButtons = document.querySelectorAll('[data-filter]');

    // Seleciona todos os cards de imagem
    const imageCards = document.querySelectorAll('[data-category]');

    // Adiciona um evento de clique para cada botão de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove a classe "active" de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe "active" apenas no botão clicado
            e.target.classList.add('active');

            // Obtém a categoria do filtro clicado
            const filterValue = e.target.getAttribute('data-filter');

            // Itera sobre todos os cards de imagem para mostrar ou esconder
            imageCards.forEach(card => {
                // Remove a classe 'd-none' para garantir que os cards estejam visíveis por padrão
                card.classList.remove('d-none');
                
                // Se o filtro não for 'all' e a categoria do card não corresponder ao filtro, esconde o card
                if (filterValue !== 'all' && card.getAttribute('data-category') !== filterValue) {
                    card.classList.add('d-none');
                }
            });
        });
    });

    // Define o botão 'Todas' como ativo por padrão na primeira carga da página
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
});