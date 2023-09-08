import { Suspense, use, cache, useState } from 'react';

const FetchData = () => {
  const data = use(
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json()
    )
  );

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

const fetchUser = cache((id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) =>
    response.json()
  )
);

// eslint-disable-next-line react/prop-types
const FetchDataWithCache = ({ id }) => {
  const data = use(fetchUser(id));

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

const fetchUsers = cache(() => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
});

const FetchDataConditionally = () => {
  let data;
  const [active, setActive] = useState(false);

  if (active) {
    data = use(fetchUsers());
  }

  return (
    <>
      <button onClick={() => setActive(!active)}>
        Active: {String(active)}
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

const UseExample = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <FetchData />
    </Suspense>
  );
};

const UseExampleWithCache = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <div style={{ display: 'flex', gap: 10 }}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((id) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            style={{
              background: active === id ? 'purple' : 'white',
              color: active === id ? 'white' : 'black',
            }}
          >
            Load User: {id}
          </button>
        ))}
      </div>
      <Suspense fallback={<>Loading...</>}>
        <FetchDataWithCache id={active} />
      </Suspense>
    </>
  );
};

export { UseExample, UseExampleWithCache, FetchDataConditionally };
