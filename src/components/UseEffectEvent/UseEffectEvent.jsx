import { Tabs } from 'antd';
import { UseEffectEventInfo } from './UseEffectEventInfo';
import { Problem, Solution } from './Problem';

const UseEffectEvent = () => {
  return (
    <Tabs
      items={[
        {
          label: 'Info',
          key: 1,
          children: <UseEffectEventInfo />,
        },
        {
          label: 'The Problem',
          key: 2,
          children: <Problem />,
        },
        {
          label: (
            <>
              The Solution - <code>useEffectEvent</code>
            </>
          ),
          key: 3,
          children: <Solution />,
        },
        {
          label: 'Custom Implementation',
          key: 4,
          children: (
            <pre>
              {`function useEffectEvent(cb) {
  const cbRef = useRef(cb);

  useLayoutEffect(() => {
    cbRef.current = cb;
  });

  return cbRef.current;
}`}
            </pre>
          ),
        },
      ]}
    />
  );
};

export { UseEffectEvent };
