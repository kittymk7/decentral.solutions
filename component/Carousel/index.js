import React, {Component} from 'react'
import Slider from 'react-slick'
import FontAwesome from 'react-fontawesome';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.play = this.play.bind(this);
    this.state = {
      current: this.props.first || 0,
      playing: false
    };
    this.settings = {
      arrows: false,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '0px',
      infinite: true,
      slidesToShow: 3,
      speed: 300,
      afterChange: function (index) {
        this.setState({playing: false, current: index});
      }.bind(this)
    };
  }

  play() {
    this.setState({playing: true})
  }

  next() {
    this.slider.slickNext()
  }

  previous() {
    this.slider.slickPrev()
  }

  render() {
    const {slides} = this.props;
    let $slides = slides.map((slide, index) => {
      let slideStyle = {
        backgroundImage: `url(${slide.thumbnailUrl})`
      };
      return <div key={`slide-${index}`}><h3 className={Carousel.classes_.slidesSlideContent} style={slideStyle}/></div>
    });
    const slide = slides[this.state.current];
    let slideStyle = {
      backgroundImage: `url(${slide.thumbnailUrl})`
    };

    return (
        <div className={Carousel.classes_.carousel}>
          <div className={Carousel.classes_.slides}>
            <div className={Carousel.classes_.slidesContainer}>
              <Slider ref={c => this.slider = c} {...this.settings}>
                {$slides}
              </Slider>
            </div>
          </div>
          <div className={Carousel.classes_.footer}>
          </div>
          <div className={Carousel.classes_.slide}>
            <div className={Carousel.classes_.slideContent}>
              <i className={Carousel.classes_.slideArrow + ' fa fa-arrow-circle-left'} onClick={this.previous}/>
              <div className={Carousel.classes_.slideContentMain}>
                <h3 className={Carousel.classes_.slideContentTitle}>
                  {slide.title}
                </h3>
                <p className={Carousel.classes_.slideContentDesc}>
                  {slide.description}
                </p>
              </div>
              <i className={Carousel.classes_.slideArrow + ' fa fa-arrow-circle-right'} onClick={this.next}/>
            </div>
            <div className={Carousel.classes_.slideVideo} style={slideStyle}>
              <FontAwesome className={`${Carousel.classes_.slideVideoButton} ${this.state.playing ? 'hidden' : ''}`}
                           onClick={this.play} name='play'/>
              <iframe className={this.state.playing ? '' : ' hidden'}
                      width="100%" height="100%" src={slide.videoUrl} frameBorder="0" allowFullScreen/>
            </div>
          </div>
        </div>
    );
  }
}

Carousel.classes_ = {
  carousel: `ds-ui-carousel`,
  slidesContainer: `ds-ui-carousel-slides-container`,
  slides: `ds-ui-carousel-slides`,
  slidesSlideContent: `ds-ui-carousel-slides-slide-content`,
  footer: `ds-ui-carousel-footer`,
  slide: `ds-ui-carousel-slide`,
  slideArrow: `ds-ui-carousel-slide-arrow`,
  slideContent: `ds-ui-carousel-slide-content`,
  slideContentMain: `ds-ui-carousel-slide-content-main`,
  slideContentTitle: `ds-ui-carousel-slide-content-title`,
  slideContentDesc: `ds-ui-carousel-slide-content-desc`,
  slideVideo: `ds-ui-carousel-slide-video`,
  slideVideoButton: `ds-ui-carousel-slide-video-button`
};

Carousel.propTypes = {
  slides: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    thumbnailUrl: React.PropTypes.string.isRequired,
    videoUrl: React.PropTypes.string.isRequired
  }))
};
