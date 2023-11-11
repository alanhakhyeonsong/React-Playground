const TodoListItem = () => {
  return <div>
    <ul id="myUL">
    <li>TypeScript 공부하기<span className="close">x</span></li>
    <li className="checked">React로 todolist 만들기<span className="close">x</span></li>
    <li>Effective Java 스터디 준비<span className="close">x</span></li>
    <li>운동하기<span className="close">x</span></li>
    <li>밤이랑 놀기<span className="close">x</span></li>
    </ul>
  </div>
}

export default TodoListItem;