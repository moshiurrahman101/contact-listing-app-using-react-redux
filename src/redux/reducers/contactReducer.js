const initialState = [
    {
        id: 0,
        name: "Rahman Chowdhury",
        number: 145223364,
    },
    {
        id: 1,
        name: "Md Moshiur Rahman",
        number: 987456321,
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default contactReducer;
