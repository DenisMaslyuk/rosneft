import React, { useState } from 'react'
import './shared/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './containers/Home'
import News from './containers/News'

import { rowNews } from './shared/rowNews'

export const App = () => {
  const news = rowNews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [newsPage, setNewsPage] = useState(news[0])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home news={news} setNewsPage={setNewsPage} />}
        />
        <Route path="/news" element={<News newsPage={newsPage} />} />
      </Routes>
    </BrowserRouter>
  )
}
