// Interfaces
import ITodo from './todo';

export default interface IUser {
  id: number;
  email: string;
  name: string;
  avatar: string;
  todos: Array<ITodo>;
}
