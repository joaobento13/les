const INITIAL_STATE = {
    action: null,
    login: null,
    lstUsuarios: [
        { id: 1, nome: 'João Victor', email: 'joaovictorb00@gmail.com' },
        { id: 1, nome: 'Felipy', email: 'felipy@gmail.com' },
        { id: 1, nome: 'Eduardo', email: 'jose.eduardo@gmail.com' },
        { id: 1, nome: 'Teste', email: 'teste@gmail.com' }
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'teste':
            return {
                ...state,
                action: action.payload
            };
        default:
            return state;
    }
};