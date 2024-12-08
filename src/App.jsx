import TabButton from '../components/TabButton'
import Tab from '../components/Tab'
import languages from '../languages'
import tabStyle from '../components/Tabs.module.css'
import { useState } from 'react'

function App() {

  const [currentLangIndex, setCurrentLangIndex] = useState(0)


  return (
    <>
      <main>
        <section className='languages'>
          <div className='container'>
            <h1>Learn Web developement</h1>
          </div>
          <div className='container'>
            <div className={tabStyle.tabs}>
              <div className={tabStyle.tasti}>
                {languages.map((lang,i) => (
                  <TabButton className={i === currentLangIndex ? tabStyle.active : ''} key={lang.id} item={lang} callback={() => 
                  setCurrentLangIndex(i)}></TabButton>
                ))}
              </div>
              <Tab item={languages[currentLangIndex]}></Tab>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
