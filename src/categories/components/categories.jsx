import React from 'react';
import Category from './category.jsx';
import './categories.css'
import Search from '../../widgets/container/search.jsx';
import Media from '../../playlist/components/Media.jsx';
function Categories(props) {
  return (
    <div className="Categories">
    <Search />
      {
        props.search.map((item) => {
          return <Media {...item} key={item.id}/>
        })
      }
      {
        props.categories.map((item) => {
          return (
            <Category 
              key={item.id} 
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
} 

export default Categories;