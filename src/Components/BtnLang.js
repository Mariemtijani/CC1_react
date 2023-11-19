import React, {useContext} from 'react'
import FrenchFlag from './icon/france.svg'
import EnglishFlag from './icon/united-kingdom.svg'
import './btnLnag.css'
import {LanguageContext} from './LanguageContext'



export default function BtnLang() {

    const {lang,setLang} = useContext(LanguageContext)
  return (
    <div className='container-langs'>
            
    <img onClick={() => setLang('FR')} src={FrenchFlag} />
    <img onClick={() => setLang('EN')} src={EnglishFlag} />

</div>
  )
}
