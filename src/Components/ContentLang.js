import React from 'react'
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react'
import {LanguageContext} from './LanguageContext'
import './home.css'
import data from './dataLange'
import BtnLang from './BtnLang'

export default function ContentLang() {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

  const {lang} = useContext(LanguageContext)

  return (
    <div className='container-home'>
      <BtnLang />
      <h1 style={{fontWeight:'bolder'}} className={theme ? ' text-white' : 'text-secondary'}>{data[lang].title}</h1>
      <p className='fw-bold'>{data[lang].txt}<span className='text-info fw-bold'>{data[lang].mot}</span></p>
    </div>
  )
}
