class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = (Math.random() * 1000).toString();
  }
}

export default Todo;
