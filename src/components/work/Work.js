import React from 'react';
import { Col } from 'react-bootstrap';
import Entry from './entry/Entry';

const styles = {
  title: {
    textAlign: 'center',
  },
};
const Work = () => (
  <Col lg={12}>
    <h1 style={styles.title}>Work History</h1>
    <Entry
      location="Indiana University - Bloomington, IN"
      title="Senior Software Engineer"
      startDate="July 2015"
      endDate="present"
    >
      <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
        velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
        Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
        facilisi. Ut fringilla.  </p>
    </Entry>
    <Entry
      location="Grand Valley State University - Allendale, MI"
      title="Server Support Technician"
      startDate="March 2010"
      endDate="June 2015"
    >
      <p>Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia
        sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
        venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean
        laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>
    </Entry>

  </Col>
);
export default Work;
