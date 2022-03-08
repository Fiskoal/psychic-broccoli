export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/` + id);
  const data = await res.json();
  return {
    props: {data: data}
  }
};

const Details = ({ data }) => {
  return ( 
    <div>
      <h1>{ data.id }: { data.title }</h1>
      
    </div>
   );
}
 
export default Details;