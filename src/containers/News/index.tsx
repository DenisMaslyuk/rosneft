import React from 'react'
import { NewsType } from '../../shared/rowNews'

const News = ({ newsPage }: { newsPage: NewsType }) => {
  return (
    <div>
      <h1>{newsPage.title}</h1>
      <h6>{newsPage.date}</h6>
      <p>{newsPage.description}</p>
    </div>
  )
}

export default News
