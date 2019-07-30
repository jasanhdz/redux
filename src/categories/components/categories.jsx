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
          return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')}/>
        })
      }
      {
        props.categories.map((item) => {
          return (
            <Category 
              key={item.get('id')} 
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
} 

export default Categories;