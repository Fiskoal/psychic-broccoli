import styles from '../../styles/Lists.module.css'
import Link from 'next/link'

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

function completedClick () {
  console.log('completed')
};
function incompletedClick () {
  console.log('incompleted')
};

const Lists = ({ todos, completed }) => {
  return ( 
    <div>
      <h1>Lists</h1>
      <a className='incompletedTab' onClick={incompletedClick}>Incompleted </a>
      <a className='completedTab' onClick={completedClick}>Completed</a>
      <div className='incompletedList'>
        {todos.map(todo => (
            <Link href={`/lists/` + todo.id} key={todo.id}>
              <a className={styles.single}>
                <h3>{todo.title}</h3>
              </a>
            </Link>
        ))}
      </div>
      <div className='completedList'>
        {completed.map(todo => (
            <Link href={`/lists/` + todo.id} key={todo.id}>
              <a className={styles.single}>
                <h3>{todo.title}</h3>
              </a>
            </Link>
        ))}
      </div>
    </div>
   )
}
 
export default Lists;