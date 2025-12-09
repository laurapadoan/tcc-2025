document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const formAgendamento = document.getElementById('formAgendamento'); // Seleciona o formulário pelo novo ID

    // ===================================
    // Lógica do Menu Hamburger (Mantida)
    // ===================================
    
    // Alterna a classe 'active' para exibir/ocultar o menu de navegação
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fecha o menu se o usuário clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Adiciona uma animação suave para o scroll (Mantida)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ===================================
    // Lógica de Submissão do Formulário (ATUALIZADA)
    // ===================================

    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // 1. Coleta e Validação (Mantida para garantir que os campos estejam preenchidos)
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;

            if (!nome || !telefone || !servico || !data || !hora) {
                alert("Por favor, preencha todos os campos obrigatórios antes de confirmar o agendamento.");
                return; // Para a execução
            }
            
            // *****************************************************************
            // ** AQUI ESTÁ A MUDANÇA PRINCIPAL: REDIRECIONAMENTO DIRETO **
            // *****************************************************************
            
            // Substitui o código de montagem e envio do WhatsApp.
            
            // Opcional: Você pode salvar os dados no localStorage aqui antes de redirecionar,
            // caso queira exibi-los na tela de confirmação (confirmado.html).
            
            // Redireciona para a tela de confirmação
            window.location.href = 'confirmado.html';

            // Nota: O this.reset() (limpar formulário) não é mais necessário,
            // pois o usuário será redirecionado para outra página.
        });
    }

});