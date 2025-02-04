export const INITIAL_STATE = {
    isValid: {
        text: true,
        title: true,
        date: true,
    },
    values: {
        text: "",
        title: "",
        date: "",
        tag: "",
    },
    // готова ли форма к отправке
    isFormReadyToSubmit: false,
};

// state - предыдущие состояние
// action - то что надо зделать (имеет свой тип)
export function formReducer(state, action) {
    switch (action.type) {
        // универсальная для всех input
        // Установка значения
        case "SET_VALUE":
            return { ...state, values: { ...state.values, ...action.payload } };
        // Очистка формы
        case "CLEAR":
            return { ...state, values: INITIAL_STATE.values };
        // перечисление всех доступных типов
        // Вброс валидностей
        case "RESET_VALIDITY":
            // аернуть состояние и валидацию обновить
            return { ...state, isValid: INITIAL_STATE.isValid };
        case "SUBMIT": {
            const textValidity = state.values.text?.trim().length;
            const titleValidity = state.values.title?.trim().length;
            const dateValidity = state.values.date;
            return {
                ...state,
                isValid: {
                    text: textValidity,
                    title: titleValidity,
                    date: dateValidity,
                },
                isFormReadyToSubmit:
                    titleValidity && textValidity && dateValidity,
            };
        }
    }
}
