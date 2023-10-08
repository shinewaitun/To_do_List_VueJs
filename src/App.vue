<template>
  <div id="app">
    <div id="myDIV" class="header">
      <h2>My To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Add new task..."
        v-model="newTask"
        v-on:keydown.enter="addTask"
      />
      <span class="addBtn" v-on:click="addTask">Add</span>
    </div>

    <ul id="myUL">
      <li v-for="(task, index) in tasks" :key="index" class="flex-container" v-on:click="toggleTask(index)" :class="{checked : task.checked}">
        <span class="flex-item">{{ task.text }}</span>
        <span class="flex-item"
          ><button v-on:click="removeTask(index)" v-button >&#10006;</button></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;
      let newTask = {text: this.newTask, checked: false}
      this.tasks.push(newTask);
      console.log(this.tasks);
      this.newTask = "";
    },
    toggleTask(index){
      this.tasks[index].checked = !this.tasks[index].checked;
      console.log(this.tasks[index].checked);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ul li:nth-child(odd) {
  background: #f9f9f9;
}

ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-content: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.flex-item:nth-child(1) {
  -webkit-order: 0;
  order: 0;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: auto;
  align-self: auto;
}
.flex-item:nth-child(2) {
  -webkit-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  align-self: auto;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #008a65;
  color: white;
}

.header {
  background-color: #008a65;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
