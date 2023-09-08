/* eslint-disable no-unused-vars */
import {
  useCallback,
  useState,
  experimental_useEffectEvent as useEffectEvent,
  useEffect,
} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const logCount = useCallback(() => {
    console.log('count :', count);
  }, [count]);

  return (
    <>
      <h2>
        <code>useCallback</code> fundamentals
      </h2>
      <h3>Count: {count}</h3>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={increment}>Increment</button>
        <button onClick={logCount}>Log Count</button>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const FetchData = ({ url, loggerOptions }) => {
  function onSuccess(data) {
    console.log('data :', data);
  }

  useEffect(() => {
    if (!url) return;

    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      onSuccess(data);
    })();
  }, [url]);

  return null;
};

const Problem = () => {
  return (
    <>
      <Counter />
      <h3>
        See <code>FetchData</code> component
      </h3>
      <FetchData />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const FetchDataWithEffectEvent = ({ url, loggerOptions }) => {
  const onSuccess = useEffectEvent((data) => {
    console.log('data :', data);
  });

  useEffect(() => {
    if (!url) return;

    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      onSuccess(data);
    })();
  }, [url]);

  return (
    <>
      <h2>
        Solution: <code>useEffectEvent</code>
      </h2>
      <h3>
        See <code>FetchDataWithEffectEvent</code>
      </h3>
    </>
  );
};

const Solution = () => {
  return (
    <>
      <FetchDataWithEffectEvent />
    </>
  );
};

export { Problem, Solution };
