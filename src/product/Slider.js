import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Container = styled.div`
  /*overflow:hidden;*/
  width: 600px;
  align-content: center;
  display: inline-block;
  padding: 0px
`;

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
    align-content: center;
    padding: 0px
  }
`;

const ImageContainer = styled.div`
  margin: 0px;
  padding: 0px;
`;

const Image = styled.img`
  align-content: center;
  width: 300px;
`;

/*const imgUrl = ""

const items = [
    { id: 1, url: imgUrl },
    { id: 2, url: imgUrl },
    { id: 3, url: imgUrl },
    { id: 4, url: imgUrl },
    { id: 5, url: imgUrl },
    { id: 6, url: imgUrl },
    { id: 7, url: imgUrl },
    { id: 8, url: imgUrl },
    { id: 9, url: imgUrl },
    { id: 10, url: imgUrl },
];*/


export default class SimpleSlider extends Component {
    render() {
        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            autoplay: true,
            centerPadding : '0px',
            adaptiveHeight : true,
            arrows: true,
            touchMove : true,
            variableWidth : true

        };
        return (
            <Container>
                <StyledSlider {...settings}
                >
                    {this.props.images.length ?
                        (
                            this.props.images.map(image =>
                            {
                            return (
                                <div key={image}>
                                    <ImageContainer>
                                        <Image src={image} />
                                    </ImageContainer>
                                </div>
                              );
                        }))
                        : (<div>
                            <ImageContainer>
                                <Image src="http://www.hanawaterjet.com/app/dubu_board/docs/imgs/n/lg_n15287811543531_%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC%EC%A4%80%EB%B9%84%EC%A4%91%EC%9E%85%EB%8B%88%EB%8B%A4.jpg" />
                            </ImageContainer>
                        </div>)
                    }

                   {/* {items.map(item => {
                        return (
                            <div key={item.id}>
                                <ImageContainer>
                                    <Image src={item.url} />
                                </ImageContainer>
                            </div>
                        );
                    })}*/}
                </StyledSlider>
            </Container>
        );
    }
}