export class UserClass {
  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}
