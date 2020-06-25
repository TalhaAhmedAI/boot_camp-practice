const get_data = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
  const json = await data.json();
  console.log(json);
};

get_data();

const post_data
