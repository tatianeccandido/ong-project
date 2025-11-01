// ===== FUNÇÕES DE VALIDAÇÃO =====

// Validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    return true;
}

// Validar telefone
function validarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    return telefone.length === 11;
}

// Validar CEP
function validarCEP(cep) {
    cep = cep.replace(/\D/g, '');
    return cep.length === 8;
}

// ===== VALIDAÇÃO DO FORMULÁRIO COM ALERTS =====
function validarFormulario(event) {
    event.preventDefault();
    
    const form = event.target;
    let erros = [];
    
    // Validar nome
    const nome = form.querySelector('#nome');
    if (nome.value.trim().length < 3) {
        erros.push('Nome deve ter pelo menos 3 caracteres');
    }
    
    // Validar email
    const email = form.querySelector('#email');
    if (!email.value.includes('@')) {
        erros.push('Email inválido');
    }
    
    // Validar CPF
    const cpf = form.querySelector('#cpf');
    if (!validarCPF(cpf.value)) {
        erros.push('CPF inválido');
    }
    
    // Validar telefone
    const telefone = form.querySelector('#telefone');
    if (!validarTelefone(telefone.value)) {
        erros.push('Telefone deve ter 11 dígitos');
    }
    
    // Validar data de nascimento
    const dataNascimento = form.querySelector('#data-nascimento');
    if (!dataNascimento.value) {
        erros.push('Data de nascimento é obrigatória');
    }
    
    // Validar endereço
    const endereco = form.querySelector('#endereco');
    if (!endereco.value.trim()) {
        erros.push('Endereço é obrigatório');
    }
    
    // Validar CEP
    const cep = form.querySelector('#cep');
    if (!validarCEP(cep.value)) {
        erros.push('CEP deve ter 8 dígitos');
    }
    
    // Validar cidade
    const cidade = form.querySelector('#cidade');
    if (!cidade.value.trim()) {
        erros.push('Cidade é obrigatória');
    }
    
    // Validar estado
    const estado = form.querySelector('#estado');
    if (!estado.value) {
        erros.push('Estado é obrigatório');
    }
    
    // ===== DISPARA ALERT COM ERROS OU SUCESSO =====
    if (erros.length > 0) {
        // Alert mostrando todos os erros encontrados
        alert('❌ Erros encontrados:\n\n' + erros.join('\n'));
    } else {
        // Alert de sucesso
        alert('✅ Formulário enviado com sucesso!');
        form.reset();
    }
    
    return false;
}

// ===== MENU HAMBÚRGUER =====
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// ===== INICIALIZAÇÃO =====
// Adiciona evento de validação ao formulário quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        // Ao submeter o formulário, chama validarFormulario() que dispara os alerts
        form.addEventListener('submit', validarFormulario);
        console.log('Validação do formulário ativada!');
    }
});
