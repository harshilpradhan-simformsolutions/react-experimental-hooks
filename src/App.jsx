import { Tabs } from 'antd';
import { Use } from './components/Use/Use';
import { UseEffectEvent } from './components/UseEffectEvent/UseEffectEvent';

function App() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        destroyInactiveTabPane
        items={[
          {
            label: (
              <>
                <code>use</code> hook and <code>cache</code>
              </>
            ),
            key: 1,
            children: <Use />,
          },
          {
            label: (
              <>
                <code>useEffectEvent</code>
              </>
            ),
            key: 2,
            children: <UseEffectEvent />,
          },
        ]}
      />
    </>
  );
}

export default App;
