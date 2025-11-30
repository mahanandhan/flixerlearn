import React from 'react'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './components/Main'
import WebDevelopment from './pages/WebDevelopment'
import CyberSecurity from './pages/CyberSecurity'
import Aiml from './pages/Aiml'
import Blockchain from './pages/Blockchain'
import DataScience from './pages/DataScience'
import CloudComputing from './pages/CloudComputing'
import Devops from './pages/Devops'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import GameDevelopment from './pages/GameDevelopment'
import UiUx from './pages/UiUx'
import EmbeddedSystem from './pages/EmbeddedSystem'
import Iot from './pages/Iot'
import DataAnalysis from './pages/DataAnalysis'
import ArVr from './pages/ArVr'
import SoftwareTesting from './pages/SoftwareTesting'
import EthicalHacking from './pages/EthicalHacking'
import FullStack from './pages/FullStack'
import Python from './pages/Python'
import Java from './pages/Java'
import SoftwareEngineer from './pages/SoftwareEngineer'
import AimlVl from './pages/vl/AimlVl'
import WebDevVl from './pages/vl/WebDevVl'
import BlockchainVl from './pages/vl/BlockchainVl'
import PythonVl from './pages/vl/PythonVl'
import JavaVl from './pages/vl/JavaVl'
import CyberSecurityVl from './pages/vl/CyberSecurityVl'
import DataScienceVl from './pages/vl/DataScienceVl'
import UiUxVl from './pages/vl/UiUxVl'
import ArVrVl from './pages/vl/ArVrVl'
import GameDevelopmentVl from './pages/vl/GameDevelopmentVl'
import MobileDev from './pages/vl/MobileDev'
import AimlIq from './pages/interview/AimlIq'
import BlockchainIq from './pages/interview/BlockchainIq'
import WebdevIq from './pages/interview/WebdevIq'
import CyberSecurityIq from './pages/interview/CyberSecurityIq'
import DataScienceIq from './pages/interview/DataScienceIq'
import MobileAppDevelopmentIq from './pages/interview/MobileAppDevelopmentIq'
import GameDevelopmentIq from './pages/interview/GameDevelopmentIq'
import UiUxIq from './pages/interview/Ui-UxIq'
import ArVrIq from './pages/interview/ArVrIq'
import PythonIq from './pages/interview/PythonIq'
import JavaIq from './pages/interview/JavaIq'
import About from './pages/About'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path='/cybersecurity' element={<CyberSecurity />} />
        <Route path='/ai-machinelearning' element={<Aiml />} />
        <Route path='/blockchain' element={<Blockchain />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/cloudcomputing' element={<CloudComputing />} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/mobileappdevelopment' element={<MobileAppDevelopment />} />
        <Route path='/gamedevelopment' element={<GameDevelopment />} />
        <Route path='/ui/uxdesign' element={<UiUx />} />
        <Route path='/embeddedsystems' element={<EmbeddedSystem />} />
        <Route path='/iot(internetofthings)' element={<Iot />} />
        <Route path='/bigdataanalytics' element={<DataAnalysis />} />
        <Route path='/ar-vrdevelopment' element={<ArVr />} />
        <Route path='/softwaretesting&qa' element={<SoftwareTesting />} />
        <Route path='/ethicalhacking' element={<EthicalHacking />} />
        <Route path='/full-stackdevelopment' element={<FullStack />} />
        <Route path='/pythonprogramming' element={<Python />} />
        <Route path='javaprogramming' element={<Java />} />
        <Route path='/softwareengineering' element={<SoftwareEngineer />} />
        <Route path='/aimlvl' element={<AimlVl />} />
        <Route path='/webdevvl' element={<WebDevVl />} />
        <Route path='/blockchainvl' element={<BlockchainVl />} />
        <Route path='/pythonvl' element={<PythonVl />} />
        <Route path='/javavl' element={<JavaVl />} />
        <Route path='/cybersecurityvl' element={<CyberSecurityVl />} />
        <Route path='/datasciencevl' element={<DataScienceVl />} />
        <Route path='/uiuxvl' element={<UiUxVl />} />
        <Route path='/arvrvl' element={<ArVrVl />} />
        <Route path='/gamedevvl' element={<GameDevelopmentVl />} />
        <Route path='/mobiledevVl' element={<MobileDev />} />
        <Route path='/aimliq' element={<AimlIq />} />
        <Route path='/blockchainiq' element={<BlockchainIq />} />
        <Route path='/webdeviq' element={<WebdevIq />} />
        <Route path='/CyberSecurityIq' element={<CyberSecurityIq />} />
        <Route path='/DataScienceIq' element={<DataScienceIq />} />
        <Route path='MobileAppDevelopmentIq' element={<MobileAppDevelopmentIq />} />
        <Route path='/GameDevelopmentIq' element={<GameDevelopmentIq />} />
        <Route path='/UiUxIq' element={<UiUxIq />} />
        <Route path='/ArVrIq' element={<ArVrIq />} />
        <Route path='/pythonIq' element={<PythonIq />} />
        <Route path='/javaiq' element={<JavaIq />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
