import { TaskClass } from './task.js';
import { UserClass } from './user.js';

const task = new TaskClass('Произвольное сообщение');
const user = new UserClass(task);
user.do();
