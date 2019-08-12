import React from 'react';
import Category from './category.jsx';
import './categories.css'
import Search from '../../widgets/container/search.jsx';
import Media from '../../playlist/components/Media.jsx';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function Categories(props) {
  return (
    <div className="Categories">
    <Search />
      {
        props.isLoading &&
        <div className="Spinner2">
          <p>Buscando tus videos videos favoritos...</p>
          <RingLoader 
            css={override}
            sizeUnit={"px"}
            size={90}
            color={'#123abc'}
            loading={props.isLoading}
          />
        </div>
      }
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