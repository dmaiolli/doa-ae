export const validar = (entityName, description, email, whatsapp, cnpj, uf, city, number, street) => {
    if (!entityName.trim()) {
        alert('O nome não pode ser vazio')
        return false;
    }
    if (!email.trim()) {
        alert('O email não pode ser vazio');
        return false;
    }
    if (!description.trim()) {
        alert('A descrição não pode ser vazia');
        return false;
    }
    if (!whatsapp.trim()) {
        alert('O número de whatsapp não pode ser vazio');
        return false;
    }
    if (!cnpj.trim()) {
        alert('O CNPJ não pode ser vazio');
        return false;
    }
    if (!number.trim()) {
        alert('O número da ONG não pode ser vazio');
        return false;
    }
    if (!street.trim()) {
        alert('A rua da ONG nã pode ser vazia');
        return false;
    }
    if (!city.trim()) {
        alert('A cidade da ONG não pode ser vazia');
        return false;
    }
    if (!uf.trim()) {
        alert('O estado não pode ser vazio');
        return false;
    }
    if (whatsapp.length != 9) {
        alert('Preencha o campo whatsapp corretamente');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Este não é um email válido');
        return false;
    }
    return true;
}

export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email));
}