import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Leaders } from './components/Leaders';
import { Institutions } from './components/Institutions';
import { Courses } from './components/Courses';
import { Pyramid } from './components/Pyramid';
import { DTFivePillars } from './components/DTFivePillars';


import { DTPhases } from './components/DTPhases';
import { DTEngineDiagram } from './components/DTEngineDiagram';
import { DTFramework } from './components/DTFramework';
import { InnovationAreas } from './components/InnovationAreas';
import { CourseFacilitators } from './components/CourseFacilitators';
import { InnovationHubLabs } from './components/InnovationHubLabs';
import { DTEnabledFacilities } from './components/DTEnabledFacilities';
import { OurPartners } from './components/OurPartners';
import { MangoClubs } from './components/MangoClubs';
import { ProminentRecruiters } from './components/ProminentRecruiters';
import { Infrastructure } from './components/Infrastructure';
import { Differentiators } from './components/Differentiators';
import { Footer } from './components/Footer';
// Imports removed

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <Header /> */}
        <main className="flex-grow">
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="leaders">
            <Leaders />
          </div>
          <div id="institutions">
            <Institutions />
          </div>
          <div id="courses">
            <Courses />
          </div>
          <div id="pyramid">
            <Pyramid />
          </div>
          <div id="infrastructure">
            <Infrastructure />
          </div>
          <div id="differentiators">
            <Differentiators />
          </div>
          <div id="five-pillars">
            <DTFivePillars />
          </div>
          <div id="mango-clubs">
            <MangoClubs />
          </div>


          <div id="dt-phases">
            <DTPhases />
          </div>
          <div id="dt-engine-diagram">
            <DTEngineDiagram />
          </div>
          <div id="dt-framework">
            <DTFramework />
          </div>
          <div id="innovation-areas">
            <InnovationAreas />
          </div>
          <div id="course-facilitators">
            <CourseFacilitators />
          </div>
          <div id="innovation-hub-labs">
            <InnovationHubLabs />
          </div>
          <div id="dt-enabled-facilities">
            <DTEnabledFacilities />
          </div>
          <div id="our-partners">
            <OurPartners />
          </div>

          <div id="prominent-recruiters">
            <ProminentRecruiters />
          </div>
        </main>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;