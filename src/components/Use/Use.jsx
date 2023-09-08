import { Tabs } from 'antd';
import {
  FetchDataConditionally,
  UseExample,
  UseExampleWithCache,
} from './UseExample';
import { UseInfo } from './UseInfo';

const Use = () => {
  return (
    <Tabs
      destroyInactiveTabPane
      items={[
        {
          label: 'Info',
          key: 1,
          children: <UseInfo />,
        },
        {
          label: (
            <>
              <code>use</code> hook example
            </>
          ),
          key: 2,
          children: <UseExample />,
        },
        {
          label: (
            <>
              <code>use</code> hook with <code>cache</code>
            </>
          ),
          key: 3,
          children: <UseExampleWithCache />,
        },
        {
          label: (
            <>
              <code>use</code> hook conditionally
            </>
          ),
          key: 4,
          children: <FetchDataConditionally />,
        },
      ]}
    />
  );
};

export { Use };
