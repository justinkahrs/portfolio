import React from 'react';
import { Col } from 'react-bootstrap';
import Entry from './entry/Entry';
import PromotionEntry from './entry/PromotionEntry';

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
		<ul>
			<li>Work with agile team to replace a legacy business intelligence
        reporting portal with one that uses modern technologies, is more flexible to changes
        in business logic, and has a more visually appealing style. Build the backend using Spring Boot securing
        each endpoint with JWT and OAuth2Work within the boundaries of our existing infrastructure.</li>

			<li>Implement webpack for build automation tasks and React as
        the interface for the frontend application. Set up automated functional testing for the project using a script to start up an xvfb instance (headless browser testing) with Nightwatch.js on Bamboo CI servers.</li>

			<li>Work closely with the UX/Design team to fulfill the primary requirements, especially in terms of usability for customers.</li>
		</ul>
	  </p>
    </PromotionEntry>
    <Entry
      location="Grand Valley State University - Allendale, MI"
      title="Server Support Technician"
      startDate="March 2010"
      endDate="June 2015"
    >
      <p>
		<ul>
			<li>Handled installation and provisioning of all new servers. Connected
        any necessary disk shelves. Installed RAID/Fiber Channel HBAs, and upgraded CPU/RAM when necessary.</li>
		
			<li>Responsible for the HP System Insight Manager server and entrusted to the well-being
        of every server in the Data Center. Added all of the HP servers to this system (300+) and expanded the
         system as the network grew.</li>

			<li>In charge of testing the security of the networks. Used BeyondTrust’s Retina Network Security Scanner,
        NMAP and other tools. Compiled detailed vulnerability reports and assessed threats starting with the most
        pertinent (at the time, Heartbleed/Shellshock exploits) while working directly with the system administrator
        to find the best course of remediation.</li>
		
			<li>Maintained servers in the private secured environment and ensured they were all compliant with DSS 3.0
        in order to process credit card information. Acquired some practice with PII (Personally Identifying Information)
        scanning, which looked for personal information such as SSNs on the network shares to reduce risk of
        sensitive data loss.</li>
		</ul>
      </p>
    </Entry>
  </Col>
);
export default Work;
