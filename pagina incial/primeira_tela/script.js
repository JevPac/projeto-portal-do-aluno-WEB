document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const toggleSenha = document.getElementById('toggleSenha');
    const btnEntrar = document.querySelector('.btn-entrar');
    const lembrarCheckbox = document.getElementById('lembrar');

    // --- FUNÇÃO DE MÁSCARA ---
    const aplicarMascaraCpf = (valor) => {
        let v = valor.replace(/\D/g, '');
        if (v.length > 11) v = v.substring(0, 11);
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return v;
    };

    // --- 1. CARREGAR DADOS SALVOS ---
    const cpfSalvo = localStorage.getItem('cpfSalvo');
    if (cpfSalvo) {
        cpfInput.value = aplicarMascaraCpf(cpfSalvo);
        lembrarCheckbox.checked = true;
    }

    // --- 2. MÁSCARA NO INPUT ---
    cpfInput.addEventListener('input', (e) => {
        e.target.value = aplicarMascaraCpf(e.target.value);
        validateFields();
    });

    // --- 3. TOGGLE DE SENHA ---
    toggleSenha.addEventListener('click', () => {
        const isPassword = senhaInput.type === 'password';
        senhaInput.type = isPassword ? 'text' : 'password';
    });

    // --- 4. VALIDAÇÃO E ESTADO DO BOTÃO ---
    const validateFields = () => {
        const isCpfValid = cpfInput.value.length === 14;
        const isSenhaValid = senhaInput.value.length >= 6;
        if (btnEntrar) {
            btnEntrar.disabled = !(isCpfValid && isSenhaValid);
        }
    };

    senhaInput.addEventListener('input', validateFields);

    // Validação inicial ao carregar a página
    validateFields();

    // --- 5. SUBMIT E SALVAMENTO ---
    // --- 5. SUBMIT E REDIRECIONAMENTO ---
    // --- 5. SUBMIT E REDIRECIONAMENTO ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (lembrarCheckbox.checked) {
            const cpfLimpo = cpfInput.value.replace(/\D/g, '');
            localStorage.setItem('cpfSalvo', cpfLimpo);
        } else {
            localStorage.removeItem('cpfSalvo');
        }

        // Tente usar o caminho relativo simples. 
        // Se o arquivo está na MESMA pasta, basta o nome.
        // O "./" diz para o navegador olhar na pasta atual onde o script está
        window.location.href = './menu.html';
    });
});