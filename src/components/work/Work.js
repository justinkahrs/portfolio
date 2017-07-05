import React from 'react';
import { Col } from 'react-bootstrap';
import Entry from './entry/Entry';
import PromotionEntry from './entry/PromotionEntry';

const styles = {
  title: {
    textAlign: 'center',
  },
};
const Work = () => (
  <Col lg={12}>
    <PromotionEntry
      mainTitle="Senior Software Engineer"
      location="Indiana University - Bloomington, IN"
      entries={
      [
        {
          title: 'Associate Software Engineer',
          startDate: 'July 2015',
          endDate: 'May 2016',
        },
        {
          title: 'Software Engineer',
          startDate: 'May 2016',
          endDate: 'January 2017',
        },
        {
          title: 'Senior Software Engineer',
          startDate: 'January 2017',
          endDate: 'present',
        },
      ]
      }
    >
      <p>
        I was brought on the team to help replace a legacy business intelligence
        reporting portal with one that used modern technologies, was more flexible to changes
        in business logic and had a more visually appealing style. Working within
        the boundaries of our existing infrastructure, we built the backend using Spring Boot securing
        each endpoint with JWT and OAuth2.
      </p>
      <p>
        For the frontend application, we used webpack for build automation tasks and React as 
        the interface. I set up automated functional testing for the project using a script to start up an
        xvfb instance (headless browser testing) with Nightwatch.js on our Bamboo CI servers.
      </p>
      <p>
        I worked closely with the UX/Design team to make sure we had all of the primary requirements
        nailed down, especially in terms of usability for customers, as there was a lot to be desired in the application
        we were replacing.
      </p>
    </PromotionEntry>
    <Entry
      location="Grand Valley State University - Allendale, MI"
      title="Server Support Technician"
      startDate="March 2010"
      endDate="June 2015"
    >
      <p>
        I handled the installation and provisioning of all new servers. I’d connect
        any necessary disk shelves, install RAID/Fiber Channel HBAs, and upgrade CPU/RAM if necessary.
      </p>
      <p>
        I was responsible for the HP System Insight Manager server, which meant I was entrusted to the well-being
        of every server in the Data Center. I added all of the HP servers to this system (300+) and expanded the
         system as the network grew.
      </p>
      <p>
        I was in charge of testing the security of the networks. I used BeyondTrust’s Retina Network Security Scanner,
        NMAP and other tools. I compiled detailed vulnerability reports and assessed threats starting with the most
        pertinent (at the time, Heartbleed/Shellshock exploits) while working directly with the system administrator
        to find the best course of remediation.
      </p>
      <p>
        I had to ensure that the servers in the private secured environment were all compliant with DSS 3.0
        in order to process credit card information. I also did some PII (Personally Identifying Information)
        scanning, which looked for personal information such as SSNs on the network shares to reduce risk of
        sensitive data loss.
      </p>
    </Entry>

  </Col>
);
export default Work;
