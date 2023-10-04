import './globals.css'
import './body.css'
import React, { useState, useRef } from 'react';

const Crowd = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  return (
      <div className='page-content'>
    <div className="relative [background:radial-gradient(50%_50%_at_50%_50%,_#fff,_#cae9ff)] w-full h-[66rem] overflow-hidden text-left text-[1.44rem] text-darkslategray ">
      
      <div className="absolute top-[-1rem] left-[0rem] w-[24.29rem] overflow-hidden flex flex-col items-center justify-end py-[0rem] px-[0rem] box-border">
        <div className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-end pt-[3.56rem] pb-[2.75rem] pr-[2.19rem] pl-[2.44rem] gap-[1.94rem]">
          <div className="self-stretch relative rounded-xl bg-white shadow-[0px_5px_8px_rgba(0,_0,_0,_0.25)] h-[21rem] overflow-hidden shrink-0">
            <div className="font-poppins absolute top-[7.13rem] left-[1.88rem] flex items-center w-[17.88rem] h-[2.31rem]">
              Crime and Violence
            </div>
            <div className="font-poppins absolute top-[11.44rem] left-[1.88rem] flex items-center w-[17.88rem] h-[2.31rem]">
              Accidents
            </div>
            <div className="font-poppins absolute top-[15.69rem] left-[1.88rem] flex items-center w-[17.88rem] h-[2.31rem]">
              Reports and Alerts
            </div>
            <div className="absolute top-[1.94rem] left-[0.88rem] rounded-8xs bg-aliceblue w-[17.94rem] h-[4.25rem]" />
            <div className="font-poppins absolute top-[2.88rem] left-[1.88rem] flex items-center w-[17.88rem] h-[2.31rem]">
              Crowd Analysis
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-steelblue shadow-[0px_5px_8px_rgba(0,_0,_0,_0.25)] h-[40.56rem] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[2.81rem] px-[0rem] box-border text-white font-open-sans">
            <div className="relative leading-[150.68%] inline-block w-[14rem]">
              Understanding how people move within a space, identifying
              congested areas, and optimizing traffic flow for improved
              efficiency and safety.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-14.81rem] left-[35.56rem] w-[105.04rem] h-[80.31rem] overflow-hidden text-[0.94rem] text-black font-open-sans">
        <img
          className="absolute top-[12.81rem] left-[26.69rem] w-[54.75rem] h-[65.54rem] opacity-[0.3]"
          alt=""
          src="/group-15.svg"
        />
        <div className="absolute top-[22.19rem] left-[0rem] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[55.94rem] h-[33.06rem]" />
        <b className="absolute top-[17rem] left-[0.94rem] text-[3.13rem] inline-block font-poppins text-darkslategray w-[34.75rem] h-[5.19rem]">
          Crowd Analysis
        </b>
        <div className="absolute top-[56.63rem] left-[0rem] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[35.19rem] h-[23.69rem]" />
        <div className="absolute top-[56.63rem] left-[36.75rem] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[43.19rem] h-[23.69rem]" />
        <div className="absolute top-[24rem] left-[2.81rem] text-[1.38rem] font-semibold inline-block w-[12.5rem] h-[2.13rem]">
          Real Time Analysis
        </div>
        <div className="absolute top-[58.56rem] left-[2.44rem] text-[1.38rem] font-semibold inline-block w-[12.5rem] h-[2.13rem]">
          Weekly Report
        </div>
        <div className="absolute top-[57.94rem] left-[38.38rem] text-[1.38rem] font-semibold inline-block w-[19rem] h-[2.13rem]">
          Real Time Crowd Detection
        </div>
        <div className="absolute top-[60.75rem] left-[38.31rem] rounded-8xs w-[40.06rem] h-[17.63rem] object-cover">
          <video
            ref={videoRef}
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
          >
            <source src="/SIH VIDEO.mp4" type="video/mp4" />
          </video>
       
      </div>
        <div className="absolute top-[24.06rem] left-[47.44rem] rounded-6xs box-border w-[6.19rem] h-[2.06rem] text-[1rem] border-[1px] border-solid border-lightgray">
          <div className="absolute top-[0.31rem] left-[1.13rem] inline-block w-[3.63rem] h-[1.5rem]">
            Today
          </div>
          <img
            className="absolute top-[0.53rem] left-[4.69rem] w-[0.81rem] h-[0.95rem] object-cover"
            alt=""
            src="/Mask group.png"
          />
        </div>
        <div className="absolute top-[29.75rem] left-[2.39rem] w-[50.14rem] h-[21.31rem] text-center text-[0.63rem] font-poppins">
          <div className="absolute top-[0rem] left-[7.08rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            10am
          </div>
          <div className="absolute top-[1.7rem] left-[10.76rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            11am
          </div>
          <div className="absolute top-[4.53rem] left-[14.51rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            12am
          </div>
          <div className="absolute top-[10.05rem] left-[18.18rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            1pm
          </div>
          <div className="absolute top-[8.35rem] left-[21.86rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            2pm
          </div>
          <div className="absolute top-[9.41rem] left-[25.54rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            3pm
          </div>
          <div className="absolute top-[3.82rem] left-[29.22rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            4pm
          </div>
          <div className="absolute top-[0.14rem] left-[32.83rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            5pm
          </div>
          <div className="absolute top-[10.68rem] left-[36.65rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            6pm
          </div>
          <div className="absolute top-[13.66rem] left-[40.26rem] flex items-center justify-center w-[2.34rem] h-[1.34rem]">
            7pm
          </div>
          <div className="absolute top-[4.71rem] left-[3.58rem] box-border w-[42.95rem] h-[0.06rem] opacity-[0.3] border-t-[1px] border-dashed border-black" />
          <div className="absolute top-[9.24rem] left-[3.58rem] box-border w-[42.95rem] h-[0.06rem] opacity-[0.3] border-t-[1px] border-dashed border-black" />
          <div className="absolute top-[13.62rem] left-[3.58rem] box-border w-[42.95rem] h-[0.06rem] opacity-[0.3] border-t-[1px] border-dashed border-black" />
          <div className="absolute top-[1.56rem] left-[0rem] w-[50.14rem] h-[19.76rem]">
            <img
              className="absolute top-[15.72rem] left-[-1.19rem] w-[52.51rem] h-[6.67rem]"
              alt=""
              src="/vector-3.svg"
            />
            <div className="absolute top-[0rem] left-[7.22rem] [backdrop-filter:blur(45px)] w-[35.37rem] h-[18.04rem]">
              <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_#c8553d,_rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5))] w-[2.16rem] h-[18.04rem]" />
              <div className="absolute top-[0rem] left-[3.69rem] w-[2.16rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[1.75rem] left-[0rem] [background:linear-gradient(180deg,_#c8513d,_rgba(255,_255,_255,_0.5))] w-[2.16rem] h-[16.29rem]" />
              </div>
              <div className="absolute top-[0rem] left-[7.35rem] w-[2.19rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[4.6rem] left-[0rem] [background:linear-gradient(180deg,_#f28f3b,_rgba(255,_255,_255,_0.5))] w-[2.19rem] h-[13.44rem]" />
              </div>
              <div className="absolute top-[0rem] left-[11.1rem] w-[2.12rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[10.05rem] left-[0rem] [background:linear-gradient(180deg,_#5fa8d3,_rgba(255,_255,_255,_0.5))] w-[2.12rem] h-[8rem]" />
              </div>
              <div className="absolute top-[0rem] left-[14.76rem] w-[2.16rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[8.3rem] left-[0rem] [background:linear-gradient(180deg,_#5fa8d3,_rgba(255,_255,_255,_0.5))] w-[2.16rem] h-[9.74rem]" />
              </div>
              <div className="absolute top-[0rem] left-[18.45rem] w-[2.16rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[9.39rem] left-[0rem] [background:linear-gradient(180deg,_#5fa8d3,_rgba(255,_255,_255,_0.5))] w-[2.16rem] h-[8.65rem]" />
              </div>
              <div className="absolute top-[0rem] left-[22.14rem] w-[2.19rem] h-[17.69rem] overflow-hidden">
                <div className="absolute top-[3.82rem] left-[0rem] [background:linear-gradient(180deg,_#f28f3b,_rgba(255,_255,_255,_0.5))] w-[2.19rem] h-[13.87rem]" />
              </div>
              <div className="absolute top-[0rem] left-[25.82rem] [background:linear-gradient(180deg,_#c8513d,_rgba(255,_255,_255,_0.5))] w-[2.19rem] h-[18.04rem]" />
              <div className="absolute top-[0rem] left-[29.5rem] w-[2.19rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[10.83rem] left-[0rem] [background:linear-gradient(180deg,_#5fa8d3,_rgba(255,_255,_255,_0.5))] w-[2.19rem] h-[7.22rem]" />
              </div>
              <div className="absolute top-[0rem] left-[33.18rem] w-[2.19rem] h-[18.04rem] overflow-hidden">
                <div className="absolute top-[13.66rem] left-[0rem] [background:linear-gradient(180deg,_#588b8b,_rgba(255,_255,_255,_0.5))] w-[2.19rem] h-[4.39rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[65.69rem] left-[22.06rem] rounded-8xs bg-red w-[1.5rem] h-[1.5rem]" />
        <div className="absolute top-[67.63rem] left-[22.06rem] rounded-8xs bg-chocolate w-[1.5rem] h-[1.5rem]" />
        <div className="absolute top-[69.56rem] left-[22.06rem] rounded-8xs bg-darkslategray w-[1.5rem] h-[1.5rem]" />
        <div className="absolute top-[71.5rem] left-[22.06rem] rounded-8xs bg-honeydew w-[1.5rem] h-[1.5rem]" />
        <div className="absolute top-[73.44rem] left-[22.06rem] rounded-8xs bg-lightskyblue w-[1.5rem] h-[1.5rem]" />
        <div className="absolute top-[65.94rem] left-[24.19rem] text-[0.9rem] flex items-center w-[6.75rem] h-[0.81rem]">{`Time crowded `}</div>
        <div className="absolute top-[67.94rem] left-[24.25rem] text-[0.9rem] flex items-center w-[7.5rem] h-[0.81rem]">
          Time less crowded
        </div>
        <div className="absolute top-[69.88rem] left-[24.25rem] text-[0.9rem] flex items-center w-[6.75rem] h-[0.81rem]">{`Time close `}</div>
        <div className="absolute top-[71.81rem] left-[24.25rem] text-[0.9rem] flex items-center w-[6.75rem] h-[0.81rem]">{`Time open `}</div>
        <div className="absolute top-[73.75rem] left-[24.25rem] text-[0.9rem] flex items-center w-[6.75rem] h-[0.81rem]">{`Emergencies `}</div>
        <div className="absolute top-[76.13rem] left-[4.63rem] rounded-[50%] bg-darkgray [filter:blur(39px)] w-[10.69rem] h-[2.25rem]" />
        <div className="absolute top-[62.94rem] left-[2.81rem] w-[14.06rem] h-[14.06rem] text-center text-[2.81rem] text-red font-poppins">
          <img
            className="absolute top-[0rem] left-[0rem] w-[14.06rem] h-[14.06rem]"
            alt=""
            src="/Group 18251.png"
          />
          <div className="absolute top-[5.06rem] left-[4.13rem] font-semibold flex items-center justify-center w-[6.56rem] h-[4.06rem]">
            38%
          </div>
        </div>
        <div className="absolute top-[65.75rem] left-[54.81rem] rounded-[50%] bg-gray-200 [backdrop-filter:blur(8px)] w-[7.06rem] h-[7.06rem]" />
        <img
          className="absolute top-[67.85rem] left-[57.53rem] w-[2.53rem] h-[2.92rem]"
          alt=""
          src="/Polygon 1.svg"
        />
        <b className="absolute top-[26.5rem] left-[42.75rem] text-[1.25rem] inline-block text-firebrick text-right w-[10.81rem] h-[1.75rem]">
          Densely crowded
        </b>
        <div className="absolute top-[22.19rem] left-[57.69rem] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[22.13rem] h-[33.06rem]" />
        <b className="absolute top-[23.88rem] left-[59.31rem] text-[1.38rem] inline-block text-darkslategray w-[12.5rem] h-[2.13rem]">
          Today’s Report
        </b>
        <div className="absolute top-[30.81rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`10am `}</b>
            <span>- Most Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[27.56rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`2am `}</b>
            <span>- Least Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[29.19rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`7am `}</b>
            <span>- Rush hour</span>
          </span>
        </div>
        <div className="absolute top-[35.75rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`10am `}</b>
            <span>- Most Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[32.44rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`2am `}</b>
            <span>- Least Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[34.13rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`7am `}</b>
            <span>- Rush hour</span>
          </span>
        </div>
        <div className="absolute top-[39.06rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`10am `}</b>
            <span>- Most Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[37.44rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`7am `}</b>
            <span>- Rush hour</span>
          </span>
        </div>
        <div className="absolute top-[43.69rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`10am `}</b>
            <span>- Most Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[45.31rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`Now `}</b>
            <span>- Moderately Crowded</span>
          </span>
        </div>
        <div className="absolute top-[40.5rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`2am `}</b>
            <span>- Least Crowdy</span>
          </span>
        </div>
        <div className="absolute top-[42.06rem] left-[59.88rem] flex items-center w-[15.5rem] h-[1.38rem]">
          <span className="[line-break:anywhere] w-full">
            <b>{`7am `}</b>
            <span>- Rush hour</span>
          </span>
        </div>
        <div className="absolute top-[18.19rem] left-[57.69rem] rounded-xl bg-darkslategray w-[22.13rem] h-[2.97rem] text-[1.13rem] text-white font-poppins">
          <div className="absolute top-[0.56rem] left-[1.55rem] font-light flex items-center w-[9.98rem] h-[1.94rem]">
            Change Platform
          </div>
          <img
            className="absolute top-[0.81rem] left-[19.46rem] w-[1.42rem] h-[1.4rem] object-cover"
            alt=""
            src="/Mask group.png"
          />
        </div>
        <div className="absolute top-[15.13rem] left-[57.69rem] text-[1.63rem] font-medium font-poppins text-darkslategray flex items-center w-[18.56rem] h-[3rem]">
          Pune Station
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default Crowd;
