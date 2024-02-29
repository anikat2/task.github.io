import task_bw from './task_bw.jpg';
import task_color from './task_color.jpg';
import man_eating from './man_eating.jpg';
import opening from './opening.jpg';
import cooks from './cooks.jpg';
import task_1 from './task_1.png'
import task_2 from './task_2.png'
import task_3 from './task_3.png'
import task_4 from './task_4.png'
import task_5 from './task_5.png'
import task_6 from './task_6.png'


import YoutubeEmbed from "./YoutubeEmbed";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './App.css';

function App() {
  return (
    <div className="App">
      <img src = {task_bw} alt = "TASK IMAGE" id = "task1logo" ></img>
      <button id = "topButton">Home</button>
      <button id = "topButton">Ways to Help</button>
      <button id = "topButton">Donate</button>

      <div class = "parent-container">
        <div class = "header">
          <img src = {task_color} alt = "TASK IMAGE" style ={
            {
              paddding:"10%", 
              opacity:0.3, 
              width:"80%",
              }
          }></img>
          <div class = "box">
            <h2 style ={{fontSize: "150%",}}>Join the Task Tableware Team!</h2>
            <h3 style = {{fontSize: "80%", paddingLeft:"2%", paddingRight: "2%", fontWeight: "lighter"}}>Package Utensils for our soup kitchen and recieve volunteer hours!</h3>
            <button style={
              {
                borderRadius: "0%", 
                width:"50%",
                backgroundColor: "black",
                color: "white",
                fontSize: "1.5vw",
                borderWidth: "0px",
                height: "10%"
              }
            }>Get Involved</button>
          </div> 
        </div> 
      </div> 

      <div class = "whatDoWeDo">
        <h2 style = {{fontWeight: "bold", paddingTop: "3%"}}>What do we do?</h2>
        <h4 style = {{fontWeight: "lighter",paddingTop: "3%", paddingBottom: "3%"}}>Learn more about our cause and why we do what we do</h4>
        <div class = "squares">
          <div class = "square" id = "squareOne">
            <img src = {opening} alt = "TASK OPENING" id = "squareImg" ></img>
            <h4 style={{fontWeight: "lighter"}}>Package utensils for the Trenton Area Soup Kitchen and help feed hundreds of people!</h4>
          </div>
          <div class = "square" id = "squareTwo">
            <img src = {cooks} alt = "TASK COOKS" id = "squareImg" ></img>
            <h4 style={{fontWeight: "lighter"}}>Inspire people to get involved in the community.</h4>
          </div>
          <div class = "square" id = "squareThree">
            <img src = {man_eating} alt = "TASK VISITOR EATING" id = "squareImg" ></img>
            <h4 style={{fontWeight: "lighter"}}>Be a part of something bigger and get volunteer hours for it!</h4>
          </div>
        </div>
      </div>

      <div class = "watchVideo">
        <h2 style = {{fontWeight: "bold", paddingTop: "3%", fontSize: "3.5vw", paddingBottom: "3%"}}>Watch this video to learn more</h2>
        <YoutubeEmbed embedId="5HcbieYt5c8" />
        <button style={
              {
                borderRadius: "0%", 
                width:"40%",
                backgroundColor: "black",
                color: "white",
                fontSize: "2vw",
                borderWidth: "0px",
                height: "4vw",
              }
            }>Youtube Channel</button>
      </div>

      <div class = "riseUp">
        <h2 style = {{fontWeight: "bold", color:"white", paddingTop: "3%", fontSize: "3.5vw"}}>Ready to Rise Up to the TASK?</h2>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= {task_1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {task_2}/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src= {task_3}/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src= {task_4}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {task_5}/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src= {task_6}/> 
        </SwiperSlide>
      </Swiper>
      </div>

      <div class = "contactSection">
        <div class = "horizontalBar"></div>
        <div class = "others">
          <h2>Contact Us:</h2>
          <div class = "contactInfo">
            <h3>Email: milanmendu@gmail.com</h3>
            <h3>Phone number: xxx-xxx-xxxx</h3>
          </div>
        </div>
      </div>

    </div>
  );
  
  
}

export default App;

