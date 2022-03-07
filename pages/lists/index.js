import styles from '../../styles/Lists.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const rawData = await res.json();
  let completed = [];
  const data = rawData.filter(item => {
    if(!item.completed){
      return item;
    } else {
      completed.push(item)
    }
  });
  return {
    props: { todos: data, completed }
  }
};

const Lists = ({ todos }) => {
  return ( 
    <div>
      <h1>Lists</h1>
      {todos.map(todo => (
          <div key={todo.id}>
            <a className={styles.single}>
              <h3>{todo.id}: {todo.title}</h3>
            </a>
          </div>
      ))}
    </div>
   )
}
 
export default Lists;