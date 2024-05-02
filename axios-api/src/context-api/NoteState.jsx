import NoteContext from "./NoteContext";

const NoteState=(props)=>{ 
    const state={
        "name":"Dhananjay",
        "age":23
    }
    return(
        <NoteContext.Provider value={state}>
        {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;