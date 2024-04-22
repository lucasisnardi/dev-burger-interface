import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />

      <Carousel itemsToShow={4}>
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
