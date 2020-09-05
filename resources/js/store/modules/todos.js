import Axios from "axios";

const state = {
    todos: []
};



const getters = {
    alltodos: state => {
        return state.todos;
    }
};



const actions = {
    async fetchTodos({ commit }) {
        await axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                commit("SET_TODOS", res.data);
            });
    },
    async addTodo({commit},title){
        await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
                    .then(res =>{
                        commit('ADD_TODO',res.data)
                    })
    },
    async deleteTodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('DELETE_TODO',id)
    },
    async filterTodo({commit},event){
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
        await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                    .then(res => {
                        commit('FILTER_TODO',res.data)
                    })
    },
    async updateTodo({commit},updTodo){
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo)
        .then(res =>{
            console.log(res.data)
            commit('UPDATE_TODO',res.data)
        })
    }
};



const mutations = {
    SET_TODOS:(state, todos) => {
        state.todos = todos
    },
    ADD_TODO:(state,todo)=>{
        state.todos.unshift(todo)
    },
    DELETE_TODO:(state,id)=>{
        state.todos = state.todos.filter(todo =>{
            return todo.id !== id
        })
    },
    FILTER_TODO:(state,fdata)=>{
        state.todos=fdata
    },
    UPDATE_TODO:(state,updTodo)=>{
        const index = state.todos.findIndex(todo=>{
            return todo.id === updTodo.id
        })
        if(index !== -1){
            state.todos.splice(index,1,updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
