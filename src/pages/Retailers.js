import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Viewretailer from './Viewretailer';
import Addretailer from './Addretailer'




const Retailers = () => {
  return (
    <Tabs
    defaultActiveKey="view"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="view" title="View">
      <Viewretailer />
    </Tab>
    <Tab eventKey="add" title="Add">
      <Addretailer />
      </Tab>
      </Tabs>
  )
}

export default Retailers