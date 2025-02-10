import { createContext, useState } from "react";

export const UserContext = createContext({
    userId: 1,
});

export const UserContextProvider = ({ children }) => {
    // состояние для контекста
	const [userId, setUserId] = useState(1);

    return <UserContext.Provider value={{userId, setUserId}}>
        {children}
    </UserContext.Provider>
}

/*
не замена пропсам для конфигурации компонента
не следует использовать для соседних компонентов
    + большая цепочка тогда контекст
    + несвязанные компоненты одной цепочкой тогда контекст
не оптимизировать для частых изменений
*/ 