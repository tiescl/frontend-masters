import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  };

  handleIndexClick(e) {
    this.setState({
      active: e.target.dataset.index
    });
  }

  render() {
    var { active } = this.state;
    var { images } = this.props;

    return (
      <div className='carousel'>
        <img src={images[active]} alt='animal' />
        <div className='carousel-smaller'>
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index == active ? 'active' : ''}
              data-index={index}
              onClick={(e) => this.handleIndexClick(e)}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
