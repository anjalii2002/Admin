import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Addoffer from './Addoffer';
import Viewoffer from './Viewoffer';




const Offer = () => {
  return (
    <Tabs
    defaultActiveKey="view"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="view" title="View">
      <Viewoffer />
    </Tab>
    <Tab eventKey="add" title="Add">
      <Addoffer />
      </Tab>
      </Tabs>
  )
}

export default Offer