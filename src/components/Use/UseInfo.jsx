const UseInfo = () => {
  return (
    <>
      <ul>
        <li>
          use is a React function that accepts and handles a promise returned by
          a function.
        </li>
        <li>This is the only hook which can be called conditionally.</li>
        <li>Eliminates managing states for loading, error and data.</li>
        <li>
          Loading state is tracked with <code>Suspense</code>
        </li>
        <li>
          Errors can be tracked with <code>ErrorBoundary</code>
        </li>
        <li>
          Data can be cached with React <code>cache</code> function
        </li>
        <li>
          RFC:{' '}
          <a href="https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#usepromise">
            https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#usepromise
          </a>
        </li>
      </ul>
      <div>
        <h2>Limitations:</h2>
        <ul>
          <li>
            Wrapping fetch in use is currently not recommended in Client
            Components and may trigger multiple re-renders.
          </li>
          <li>
            Not a complete solution for handling asynchronus state.
            <ul>
              <li>Does not support query / promise cancellation.</li>
              <li>
                Request deduping, Invalidating queries, refetching at interval
                etc are not supported.
              </li>
            </ul>
          </li>
          <li>As of now, it is not supported in React Devtools.</li>
          <li>
            Loading, Error states requires handling in parent rather than same
            component.
          </li>
          <li>We do not get access to loading, error variables explicitly.</li>
        </ul>
      </div>
    </>
  );
};

export { UseInfo };
