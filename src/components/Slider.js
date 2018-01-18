import React, { Component } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux';
import { getPhotos } from '../actions';
import axios from 'axios';
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const url = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent/"
const apiKey = "?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18"



function NextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{
            ...style,
            display: 'block',
            background: 'rgba(0,0,0,0.6)',
            paddingLeft: '30px',
            paddingRight: '50px',
            paddingTop: '30px',
            paddingBottom: '45px',
            margin: '10px',
            zIndex: '20',
            top: '25%'
        }}
        onClick={onClick}
      ></div>
    );
  }
  
  function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{
            ...style,
            display: 'block',
            background: 'rgba(0,0,0,0.6)',
            paddingLeft: '50px',
            paddingRight: '30px',
            paddingTop: '30px',
            paddingBottom: '45px',
            margin: '10px',
            zIndex: '20',
            top: '25%'
        }}
        onClick={onClick}
      ></div>
    );
  }



  

class OlaSlider extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        };

      }
    
      componentDidMount() {
        axios.get( url + apiKey )
          .then(res => {
            const posts = res.data.data._embedded.map(obj => obj.images.original);
            console.log(posts);
            this.setState({ posts });
          });
      }


      render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            swipeToSlide: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
          };

        
        return (
        
      <div id="flex-contain" > 
          <Slider  {...settings}>
            {/* <div id="flex-wrapper" > */}
              {this.state.posts.map(post =>
            <div key={post} id="slide-img">
                <img key={post} src={post} id="slide-img-main"/>
                <Modal trigger={<img key={post} src={post}/>}>
                    <Modal.Content image>
                        <Image fluid wrapped centered size='fullscreen' src={post} />
                    </Modal.Content>
                </Modal>
            </div>


              )}
          </Slider>


      </div> 
        
        );
    }

}
    



const mapStateToProps = (state) => {
    return {
        photos: state.photos
    };
};

export default connect(mapStateToProps, { getPhotos })(OlaSlider);