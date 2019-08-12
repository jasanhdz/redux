import React from 'react';
import HomeLayout from '../components/home-layout.jsx';
import Categories from '../../categories/components/categories.jsx';
import Related from '../components/related.jsx';
import ModalContainer from '../../widgets/container/modal.jsx';
import Modal from '../../widgets/components/modal.jsx';
import HandleError from '../../error/containers/handle-error.jsx';
import VideoPlayer from '../../player/containers/video-player.jsx';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
  // state = {
  //   modalVisible: false,
  // }
  handleOpenModal = mediaId => {
    // this.setState({
    //   modalVisible: true,
    //   media: media
    // })
    this.props.actions.openModal(mediaId)
  }
  handleCloseModal = (event) => {
    // this.setState({
    //   modalVisible: false,
    // })
    this.props.actions.closeModal()
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
        <Related />
          <Categories 
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
          />
        {
          this.props.modal.get('visibility') &&
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
              <VideoPlayer 
                autoplay
                id={this.props.modal.get('mediaId')}
                // src={this.state.media.src}
                // title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
        }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map(categoryId => {
    return state.get('data').get('entities').get('category').get(categoryId);
  })
  let searchResults = list();
  const search = state.get('data').get('search');
  if(search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => {
      if (
        item.get('author').toLowerCase().includes(search.toLowerCase())
        ||
        item.get('title').toLowerCase().includes(search.toLowerCase())
      )
      return true;
    }).toList() 
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actiones, dispatch)
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);