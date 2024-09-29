import React, {useRef} from 'react';
import { PropsWithChildren } from 'react';
import './App.css';
import Header from './init_page/header.jsx'
import Introduction from './init_page/introduction.jsx';
import InfoSection from './init_page/InfoSection.jsx'
import DynamicDrawingCharts from './init_page/graph.jsx'
import AIIntroduction from './init_page/AI.jsx';
import Footer from './init_page/footer.jsx'
import EmailSignUp from './init_page/email.jsx'

function App() {
  const introRef = useRef(null);
  const emailSignUpRef = useRef(null);
  return (
    <div className="app">
      <Header introRef={introRef}/>
        <main className='bg-background_color'>
          <div ref={introRef}><Introduction emailSignUpRef={emailSignUpRef}/></div>
          <DynamicDrawingCharts />
          <InfoSection />
          <AIIntroduction />
          <div ref={emailSignUpRef} ><EmailSignUp /></div>
        </main>
      <Footer />
    </div>
  );
}


export default App;
