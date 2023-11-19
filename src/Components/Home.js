import React from 'react'
import ContentLang from './ContentLang'
import LanguageContextProvider from './LanguageContext'

export default function Home() {
  return (
    <div>
      <LanguageContextProvider >
      <ContentLang />
      </LanguageContextProvider>
    </div>
  )
}
