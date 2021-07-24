import React, { Component } from "react";
import Slider from "react-slick";
import SlideContent from "./SlideContent";
import styled from "styled-components";

const Slide = ({data}) => { //부모 컴포넌트에서 받은 state와 method

    //settings 부분, 슬라이더의 기능을 조정할 수 있다.
    const settings = {
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        speed: 500,
        slidesToShow: 4, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1200, // 화면 사이즈 1200px
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <Wrap>
            <Slider {...settings}> //Slider 태그, 위에서 설정한 슬라이더가 나옴
                {data.map((data) => {
                    return <SlideContent data={data} />;
                })} //Slider 안에 들어가는 내용(콘텐츠)
            </Slider>
        </Wrap>
    );
};

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }

`;

export default Slide;