import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run only once.');
  }, []); // [] 빈 array는 지켜볼 게 없으니까 처음 한 번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); //keyword를 지켜보니까 변화할 때마다 코드가 항상 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword and counter change');
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
