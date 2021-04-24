import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
function SlideShow() {
  return ( 
    <div className='section' >
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },

        
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={5}
    slidesToShow={5}
    scrollOnDevice={true}
    
  >
   <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51WxQyFZWnL._SL500_.jpg'
      />
      <h4 className='slide__name'>Republic of pirates</h4>
      <h5 className='slide__by'>By: Colin Woodard</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51af4LVf08L._SL320_.jpg'
      />
      <h4 className='slide__name'>Switch</h4>
      <h5 className='slide__by'>By: Dan Heath</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/61KPcEw+96L._SL320_.jpg'
      />
       <h4 className='slide__name'>Leading change</h4>
      <h5 className='slide__by'>By: John P.Kotter</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51-c3cHHpTL._SL320_.jpg'
      />
       <h4 className='slide__name'>The Now Habit</h4>
      <h5 className='slide__by'>By: Neil Fiore Ph.D</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/41kgNrPdDfL._SL320_.jpg'
      />
       <h4 className='slide__name'>Overcoming the Five</h4>
      <h5 className='slide__by'>By: Patrick Lencioni</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/510ia6Jt8wL._SL320_.jpg'
      />
       <h4 className='slide__name'>The Introvert advantage</h4>
      <h5 className='slide__by'>By: Marti Olsen Laney</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/61KPcEw+96L._SL320_.jpg'
      />
       <h4 className='slide__name'>Book Summary</h4>
      <h5 className='slide__by'>By: Executive Reads</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51XqmrgU-3L._SL320_.jpg'
      />
       <h4 className='slide__name'>The first 90 days</h4>
      <h5 className='slide__by'>By: Michael Watkins</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/618NxdQZocL._SL320_.jpg'
      />
       <h4 className='slide__name'>Crucial Conversation</h4>
      <h5 className='slide__by'>By: Ketty Patterson</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/514D3+IEDxL._SL500_.jpg'
      />
       <h4 className='slide__name'>Unf--K Your Brain</h4>
      <h5 className='slide__by'>By: Faith G. Harper PhD LPC-S ACS ACN</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51DpMHxASrL._SL500_.jpg'
      />
       <h4 className='slide__name'>Amusing Ourselves to Death</h4>
      <h5 className='slide__by'>By: Neil Postman</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51dFNtIkQUL._SL500_.jpg'
      />
       <h4 className='slide__name'>What If?</h4>
      <h5 className='slide__by'>By: Randall Munroe</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/51tWfxdkzSL._SL500_.jpg'
      />
       <h4 className='slide__name'>The Mindful Athlete</h4>
      <h5 className='slide__by'>By: George Mumford, Phil Jackson - Foreword</h5>
    </div>
    <div className='slide__section'>
      <img
        alt=''
        src='https://m.media-amazon.com/images/I/41QNn+uS3mL._SL500_.jpg'
      />
       <h4 className='slide__name'>Caffeine</h4>
      <h5 className='slide__by'>By: Michael Pollan</h5>
    </div>

  </InfiniteCarousel>
  </div>
  );
}

export default SlideShow;