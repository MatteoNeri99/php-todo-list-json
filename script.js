const { createApp } = Vue

createApp({
  data() {
    return {
      todoList:[],
    }
  },methods:{

    getTodoList(){
      axios.get('./index.php', {
        params: {
          
        }
      })
      .then((response) => {
        console.log(response);
        this.todoList=response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });  

      }

  },
  created(){
    this.getTodoList();
  }
}).mount('#app')