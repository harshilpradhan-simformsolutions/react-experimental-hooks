const UseEffectEventInfo = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <code>useCallback</code> without dependency
          </li>
          <li>
            It lets you create memoized callbacks without requiring to add used
            variables to dependency.
          </li>
          <li>
            Inspired by{' '}
            <a
              href="https://epicreact.dev/the-latest-ref-pattern-in-react"
              target="_blank"
              rel="noreferrer"
            >
              latest ref pattern
            </a>
          </li>
          <li>
            RFC:{' '}
            <a href="https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md">
              https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
            </a>
          </li>
          <li>
            Docs:{' '}
            <a href="https://react.dev/reference/react/experimental_useEffectEvent">
              https://react.dev/reference/react/experimental_useEffectEvent
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Limitations:</h2>
        <ul>
          <li>
            We cannot use callbacks created by <code>useEffectEvent</code>{' '}
            directly in render phase. Doing so will lead to stale closures.
          </li>
        </ul>
      </div>
    </>
  );
};

export { UseEffectEventInfo };
