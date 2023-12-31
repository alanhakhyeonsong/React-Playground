import { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}

const TodoHeader = ({ children }: GlobalLayoutProps) => {
  return <div id="myDiv" className="header">
    <h2>Ramos의 Todo list</h2>
    <div className="content">{children}</div>
  </div>
};

export default TodoHeader;