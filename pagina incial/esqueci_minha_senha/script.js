const inputCpf = document.getElementById('cpfInput');

// Função de Máscara de CPF com trava de segurança
inputCpf.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

    // Trava física: limita a 11 números, mesmo que o usuário insista
    if (value.length > 11) {
        value = value.substring(0, 11);
    }

    // Aplica a formatação 000.000.000-00
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = value;
});

// Lógica de envio do formulário
document.getElementById('formRecuperacao').addEventListener('submit', function (event) {
    event.preventDefault();

    const cpf = inputCpf.value.replace(/\D/g, ""); // Pega apenas os números para validar

    if (cpf.length !== 11) {
        alert("CPF incompleto. Por favor, digite os 11 dígitos.");
        return;
    }

    const form = document.getElementById('area-recuperacao');
    const msgSucesso = document.getElementById('mensagemSucesso');
    const btn = document.getElementById('btnSubmit');
    const backLink = document.querySelector('.back-link');

    btn.innerText = "Enviando...";
    btn.disabled = true;

    // Simulação de tempo de resposta
    setTimeout(() => {
        form.style.display = 'none';
        msgSucesso.style.display = 'block';
        backLink.innerText = "Ir para a página de Login";
    }, 1500);
});