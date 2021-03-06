import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './homeStyle.scss'
import {
  ArrowButtonLeftIcon,
  ArrowButtonRightIcon,
  ArrowForwardIcon,
  ChatIcon,
  LikeIcon,
} from '@@webapp/icons'
import { NewsType } from '../../shared/rowNews'

type HomePropsType = {
  news: NewsType[]
  setNewsPage: React.Dispatch<React.SetStateAction<NewsType>>
}

const Home: React.FC<HomePropsType> = ({
  news,
  setNewsPage,
}: HomePropsType) => {
  const [currentNews, setCurrentNews] = useState(news.slice(0, 2))
  const [page, setPage] = useState(1)
  const maxPage = Math.floor(news.length / 2)
  const [count, setCount] = useState(currentNews.map((el) => el.likesCount))
  const cards = useRef<Array<HTMLDivElement | null>>([])

  const onClickHandler = (id: number) => {
    const newLikesCount = [...count]
    if (count[id] === currentNews[id].likesCount) {
      newLikesCount[id] += 1
    } else {
      newLikesCount[id] -= 1
    }
    setCount(newLikesCount)
  }

  const onClickLeftHandler = () => {
    if (page - 1 === 0) {
      setPage(maxPage)
    } else {
      setPage(page - 1)
    }
    cards.current.map((el) => {
      el?.classList.remove('rightSlider')
      el?.classList.remove('leftSlider')
      window.requestAnimationFrame(() => {
        el?.classList.add('leftSlider')
      })
    })
  }

  const onClickRightHandler = () => {
    if (page + 1 > maxPage) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
    cards.current.map((el) => {
      el?.classList.remove('rightSlider')
      el?.classList.remove('leftSlider')
      window.requestAnimationFrame(() => {
        el?.classList.add('rightSlider')
      })
    })
  }

  useEffect(() => {
    const temp = news.slice((page - 1) * 2, (page - 1) * 2 + 2)
    setCurrentNews(temp)
    setCount(temp.map((el) => el.likesCount))
  }, [page])

  useEffect(() => {
    cards.current = cards.current.slice(0, currentNews.length)
  }, [currentNews])

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">
          <Link to="/">
            <h3>
              ?????????????? <ArrowForwardIcon />
            </h3>
          </Link>
          <div className="page">
            <button onClick={onClickLeftHandler}>
              <ArrowButtonLeftIcon />
            </button>
            <h6>{page}</h6>
            <button onClick={onClickRightHandler}>
              <ArrowButtonRightIcon />
            </button>
          </div>
        </div>
        <div className="body">
          {currentNews.map((el, index) => {
            return (
              <div
                ref={(el) => (cards.current[index] = el)}
                className="card"
                key={index}
              >
                {el.imgUrl && <img src={el.imgUrl} alt="" />}
                <div className="cardContainer">
                  <div className="text">
                    <Link to="/news" onClick={() => setNewsPage(el)}>
                      <h4>{el.title}</h4>
                    </Link>
                    <h6>{el.date}</h6>
                    <div className="description">{el.description}</div>
                  </div>
                  <div className="bottom">
                    <button
                      className="like"
                      onClick={() => onClickHandler(index)}
                    >
                      <LikeIcon
                        className={
                          el.likesCount === count[index] ? '' : 'active'
                        }
                      />
                      {count[index]}
                    </button>
                    <Link
                      to="/news"
                      onClick={() => setNewsPage(el)}
                      className="chat"
                    >
                      <ChatIcon />
                      {el.commentsCount}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
