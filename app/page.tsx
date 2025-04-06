"use client";  
import React, { useState, useEffect } from 'react';

const IndexBox = () =>{
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);;
  const [visibleMainBox, setvisibleMianBox] = useState(false)
  const boxWidthArr = Array.from({ length: 10 }, (_, index) => index / 2 + 0.5);
  useEffect(() => {
    const animateBoxes = () => {
      boxWidthArr.forEach((_, index) => {
        requestAnimationFrame(() => {
          setVisibleBoxes((prev) => [...prev, index]);
        });
      });
    };

    animateBoxes();
    setTimeout(() => setvisibleMianBox(true), 1500); // 延迟显示主盒子
  }, [boxWidthArr]);
  return (
    <div className="w-4/5 h-[50vw] min-h-[600px] flex items-center">
      {boxWidthArr.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${item}%`,
              height: `${item * 14 + 5}%`,
              opacity:  0,
              transition: 'opacity 0.5s ease',
              background: `rgb(${-item * 20 + 150}, ${-item * 20 + 150}, ${-item * 20 + 150})`,
              margin: `0 ${item + 2}px 0 0`,
              animationDelay: `${index * 0.15}s`, // 动画延迟
            }}
            className="rounded-l-3xl animate-fade-in"
          ></div>
      ))}
      {
        <div 
          className="w-2/3 h-4/5 bg-[#303030] rounded-3xl flex flex-col justify-around items-center"
          style={{
            opacity:visibleMainBox?1:0,
            transition: 'opacity 0.5s ease'
          }}
        >   

          <div 
            className='text-[#eee] text-[clamp(48px,6vw,120px)] select-none flex flex-col justify-center mt-[5vw]'
            style={{
              fontFamily:'SuperLobster',
            }}
          >
            <div className='flex flex-wrap mx-[5rem]'>Hi <div className='hover:rotate-60 transition'>👋</div> Here,</div>
            <div className='flex flex-wrap mx-[5rem]'>
              <div>Task</div>
              <div>Manager</div>
              <div>OL.</div>
            </div>
          </div>
          <div
            className='text-[#eee] flex select-none flex-wrap justify-center w-full'
            style={{
              fontFamily:'Backso'
            }}
          >
            <div className='mx-2.5'>Gentler</div> / <div className='mx-2.5'>Faster</div> / <div className='mx-2.5'>More passionate</div>
          </div>
        </div>
      }
    </div>
  )
}

const BlogBox = () => {
  return (
    <div 
      className="w-4/5 my-[3rem] bg-[#a9a9a9] relative flex flex-wrap"
    >
      <div 
        className='absolute top-[-6rem] left-2 text-[100px] font-bold'
        style={{
          fontFamily:'KGPerfectPenmanship'
        }}
      >
        Blog.
      </div>
      <div
        className='w-1/2 min-w-[300px] h-[600px] bg-[#616161]'
      >

      </div>
      <div
        className='w-1/2 min-w-[300px] h-[600px] bg-[#616161]'
      >

      </div>
    </div>
  )
}

const ProjectBox = () => {
  return (
    <div 
      className="w-4/5 h-[700px] my-[3rem] bg-[#a9a9a9] relative flex flex-wrap"
    >
      <div 
        className='absolute top-[-6rem] left-2 text-[100px] font-bold'
        style={{
          fontFamily:'KGPerfectPenmanship'
        }}
      >
        Project.
      </div>
      <div
        className='w-1/2 min-w-[300px] bg-[#616161]'
      >

      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#fefbf5] flex-col">
      <IndexBox/>
      <BlogBox/>
      <ProjectBox/>
    </div>
  );
}
