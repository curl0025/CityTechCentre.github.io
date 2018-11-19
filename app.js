const STORAGE_KEY = 'todo-storage';
const app = new Vue({
  el: '#app',
  data: {
    title: 'City Tech Centre',
    newClient: '',
    newLaptop: '',
    newIssue: '',
    newSolution: '',
    todos: [],
    laptops: [],
    issues: [],
    solutions: []


  },


  // Lifecycle hook to retrieve items every time the applciation is loaded
  created() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },


  methods: {
    addTodo() {
      this.todos.push({
        client: this.newTodo,
        laptop: this.newLaptop,
        issue: this.newIssue,
        solution: this.newSolution,
        done: false,
      });


        this.newTodo = '',
        this.newLaptop = '',
        this.newIssue = '',
        this.newSolution = '';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },




    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },


  }
});