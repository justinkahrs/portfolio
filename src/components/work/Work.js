import React from 'react';
import { Col } from 'react-bootstrap';
import PromotionEntry from './PromotionEntry';
import './work.css';

const Work = () => (
  <Col className="workPage" lg={12}>
    <PromotionEntry
      mainTitle="Senior Front End Engineer"
      location="Ridecell - San Francisco, CA"
      entries={[
        {
          startDate: 'January 2018',
          endDate: 'present',
        },
      ]}
    >
      <ul>
        <li>
          Deliver enterprise level software to successful ride sharing and car sharing companies across the globe.
        </li>
        <li>Integrate with Electrify America to help create the nation's largest all electric car sharing fleet</li>
        <li>
          Create interactive maps for customers to track and maintain their international fleets (thousands of vehicles strong), while ensuring GDPR compliance.
        </li>
        <li>Migrate existing JQuery pages to React, and subsequently upgrade the large codebase to React 16</li>
        <li>Developed key features of the Operations Center that enabled the company to secure millions in extra funding.</li>
      </ul>
    </PromotionEntry>
    <PromotionEntry
      mainTitle="Senior Software Engineer"
      location="Indiana University - Bloomington, IN"
      entries={[
        {
          startDate: 'January 2017',
          endDate: 'January 2018',
        },
        {
          title: 'Software Engineer',
          startDate: 'May 2016',
          endDate: 'January 2017',
        },
        {
          title: 'Associate Software Engineer',
          startDate: 'July 2015',
          endDate: 'May 2016',
        },
      ]}
    >
      <ul>
        <li>
          Worked with an agile team to replace a legacy business intelligence reporting portal with one that used
          modern technologies, was more flexible to changes in business logic, and had a more visually appealing style.
        </li>
        <li>
          Integrated the React frontend with Denodo and Tableau servers in order to provide enterprise reports while
          ensuring users were HIPPA and FERPA compliant.
        </li>
        <li>
          Built the backend using Spring Boot, securing each endpoint with JWT and OAuth2 while working within the
          boundaries of the existing infrastructure (while prepping for Docker Datacenter to replace the Tomcat
          instances, in order to move to a node backend)
        </li>
        <li>
          Migrated a project to webpack (for build automation tasks) and React.
          Set up automated functional testing for the project using Nightwatch.js on Bamboo CI servers.
        </li>
        <li>
          Worked closely with the UX/Design team to fulfill the primary requirements, focusing heavily on usability for
          customers.
        </li>
      </ul>
    </PromotionEntry>
    <PromotionEntry
      mainTitle="Server Support Technician"
      location="Grand Valley State University - Allendale, MI"
      entries={[
        {
          startDate: 'March 2010',
          endDate: 'June 2015',
        },
      ]}
    >
      <ul>
        <li>
          Was responsible for the HP System Insight Manager server and entrusted to the well-being of every server in
          the Data Center. Added all of the HP servers to this system (300+) and expanded the system as the network
          grew.
        </li>
        <li>
          In charge of testing the security of the networks. Used BeyondTrust’s Retina Network Security Scanner, NMAP
          and other tools. Compiled detailed vulnerability reports and assessed threats starting with the most pertinent
          (at the time, Heartbleed/Shellshock exploits) while working directly with the system administrator to find the
          best course of remediation.
        </li>
        <li>
          Maintained servers in the private secured environment and ensured they were all compliant with DSS 3.0 in
          order to process credit card information. Acquired some practice with PII (Personally Identifying Information)
          scanning, which looked for personal information such as SSNs on the network shares to reduce risk of sensitive
          data loss.
        </li>
        <li>
          Controlled the primary security camera server, and worked with local law enforcement when necessary to obtain
          footage for evidence.
        </li>
        <li>
          Handled installation and provisioning of all new servers. Connected any necessary disk shelves. Installed
          RAID/Fiber Channel HBAs, and upgraded CPU/RAM when necessary.
        </li>
      </ul>
    </PromotionEntry>
  </Col>
);
export default Work;
