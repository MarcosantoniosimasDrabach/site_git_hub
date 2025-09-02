// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Seleciona o botão
    const botao = document.getElementById('meuBotao');
    
    // Adiciona evento de clique
    if (botao) {
        botao.addEventListener('click', function() {
            alert('Botão clicado! Arquivos externos funcionando!');
            
            // Muda a cor de fundo do botão
            this.style.backgroundColor = '#27ae60';
            
            // Adiciona uma classe CSS
            this.classList.add('clicado');
        });
    }
    
    // Função para fazer uma requisição (exemplo)
    function fetchData() {
        fetch('https://api.github.com/users/seu-usuario')
            .then(response => response.json())
            .then(data => {
                console.log('Dados do GitHub:', data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }
    
    // Chama a função (opcional)
    // fetchData();
});

// Funções adicionais
function mostrarMensagem(mensagem) {
    console.log(mensagem);
}

function validarFormulario() {
    // Lógica de validação aqui
    return true;
}

// Exportando funções para uso global (se necessário)
window.minhasFuncoes = {
    mostrarMensagem,
    validarFormulario
};