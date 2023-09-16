import { useReducer,useEffect,createContext } from "react";


const counterReducer =(state,action)=> {
    switch (action.type){
        case "INCREMENT":
            return {count: state.count+1};
        case "DECREMENT":
            return {count: state.count-1};
    }
};

export const CounterContext= createContext();

const CounterProvider =({children})=>{

    const initialState={count: parseInt(localStorage.getItem("count")) || 0 }

    const [state, dispatch] = useReducer(counterReducer,initialState);

    useEffect(()=>{
        localStorage.setItem("count",state.count.toString());
    },[state.count]);
    
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
};

export default CounterProvider;
