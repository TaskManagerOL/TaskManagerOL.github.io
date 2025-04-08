"use client";  
import React, { useState, useEffect } from 'react';

const IndexBox = () =>{
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);;
  const [visibleMainBox, setvisibleMianBox] = useState(false)
  const [isMobile, setIsMobile] = useState(false); // 新增设备检测状态
  const boxWidthArr = Array.from({ length:10 }, (_, index) => index / 2 + 0.5);
  
  // 检测设备类型
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 判断屏幕宽度是否小于等于768px
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // 初始检查设备类型
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {boxWidthArr.map((item, index) => {
        if (isMobile && index < 5)return null;
        return (
          <div
            key={index}
            style={{
              width: `${item}%`,
              height: `${item * 14 + 5}%`,
              opacity: 0,
              transition: "opacity 0.5s ease",
              background: `rgb(${-item * 20 + 150}, ${-item * 20 + 150}, ${-item * 20 + 150})`,
              margin: `0 ${item + 2}px 0 0`,
              animationDelay: `${index * 0.15}s`, 
            }}
            className="rounded-l-3xl animate-fade-in"
          ></div>
        );
      })}
      {
        <div 
          className="w-2/3 h-4/5 bg-[#303030] rounded-3xl flex flex-col justify-around items-center"
          style={{
            opacity:visibleMainBox?1:0,
            transition: 'opacity 0.5s ease'
          }}
        >   

          <div 
            className='text-[#eee] text-[clamp(48px,6vw,120px)] select-none flex flex-col justify-center mt-[5vw] items-center md:items-start'
            style={{
              fontFamily:'SuperLobster',
            }}
          >
            <div className='flex flex-wrap mx-[5rem] justify-center'>Hi <div className='transition-all hover:rotate-[60deg]'>👋</div> Here,</div>
            <div className='flex flex-wrap mx-[5rem] justify-center'>
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
      className="w-4/5 mt-[5rem] mb-[15rem] bg-[#a9a9a9] relative flex flex-wrap justify-center"
    >
      <div 
        className='absolute top-[-4.5rem] md:top-[-6rem] left-2 text-[70px] md:text-[100px] font-bold z-50'
        style={{
          fontFamily:'KGPerfectPenmanship'
        }}
      >
        Blog.
      </div>

      <a
        className='w-full h-[500px] md:h-[700px]  bg-[#314964] flex justify-center items-center lg:w-1/2 flex-col group overflow-hidden relative'
        href='https://taskmanagerol.github.io/Blog/2023/06/24/CSS/#CSS%E4%B8%89%E8%A7%92%E5%BD%A2%E7%BB%98%E5%88%B6'
        target='_blank'
      >
        <div 
          className=' w-4/5 text-[#fff] text-[34px] md:text-[46px] font-black tracking-[-0.3px] font-[TT] transition-all group-hover:mb-2 flex flex-wrap justify-center items-center break-words text-center mt-[40px]'
        >
          Drawing a triangle or even a polygon with CSS
        </div>
        <div className='h-[175px] md:h-[250px] flex justify-center items-center'>
          <div className='animate-triangle'></div>
        </div>
        <div className='w-3/5 text-[#f4f5f6] tracking-[-0.3px] transition-all group-hover:mt-2 text-center mb-[40px]'>Stop using symbols.Complete a standard polygon by modifying the border, background attributes and other options</div>
        <div className='absolute bg-black w-[80px] md:w-[120px] h-[40px] md:h-[60px] right-[10px] md:right-[40px] top-[-60px] transition-all ease-in-out duration-200 text-[#fff] flex justify-center items-center group-hover:top-0'>
          <div className='mb-[20px] opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 group-hover:mb-0 text-[12px] tracking-[-0.3px]'>Read more</div>
        </div>
      </a>

      <a
        className='w-full h-[500px] md:h-[700px]  bg-[#2b2f3c] flex justify-center items-center lg:w-1/2 flex-col group overflow-hidden relative'
        href='https://taskmanagerol.github.io/Blog/2024/01/30/Problem/#Git-Time-out'
        target='_blank'
      >
        <div 
          className=' w-4/5 text-[#fff] text-[34px] md:text-[46px] font-black tracking-[-0.3px] font-[TT] transition-all group-hover:mb-2 flex flex-wrap justify-center items-center break-words text-center mt-[40px]'
        >
          Troubleshooting Timeout Issues with Git
        </div>
        <div className='h-[175px] md:h-[250px] flex justify-center items-center'>
          <div className='animate-typing'></div>
        </div>
        <div className='w-3/5 text-[#f4f5f6] tracking-[-0.3px] transition-all group-hover:mt-2 text-center mb-[40px]'>
          It must be hard to have a timeout when you've done a bunch of work, here's how to fix it
        </div>
        <div className='absolute bg-black w-[80px] md:w-[120px] h-[40px] md:h-[60px] right-[10px] md:right-[40px] top-[-60px] transition-all ease-in-out duration-200 text-[#fff] flex justify-center items-center group-hover:top-0'>
          <div className='mb-[20px] opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 group-hover:mb-0 text-[12px] tracking-[-0.3px]'>Read more</div>
        </div>
      </a>
    </div>
  )
}

const ProjectBox = () => {
  return (
    <div 
      className="w-4/5 my-[3rem] bg-[#a9a9a9] relative flex flex-wrap mb-[15rem]"
    >
      <div 
        className='absolute top-[-5rem] left-2 text-[80px] font-bold md:text-[100px] md:top-[-6rem] z-50'
        style={{
          fontFamily:'KGPerfectPenmanship'
        }}
      >
        Project.
      </div>

      <a
        className='w-full h-[500px] md:h-[500px]  bg-[#f7e8e4] flex justify-center items-center lg:w-full flex-col group overflow-hidden relative'
        href='https://taskmanagerol.space/todolist'
        target='_blank'
      >
        <div 
          className=' w-4/5 text-[#000] text-[34px] md:text-[46px] font-black tracking-[-0.3px] font-[TT] transition-all group-hover:mb-2 flex flex-wrap justify-center items-center break-words text-center mt-[40px]'
        >
          TaskList
        </div>
        <div className='h-[175px] md:h-[250px] flex justify-center items-center'>
          <div className='animate-tasklist'>T</div>
        </div>
        <div className='w-3/5 text-[#000] tracking-[-0.3px] transition-all group-hover:mt-2 text-center mb-[40px]'>
          Can I complete all ddl's while suffering from amnesia.A TODO site.
        </div>
        <div className='absolute bg-black w-[80px] md:w-[120px] h-[40px] md:h-[60px] right-[10px] md:right-[40px] top-[-60px] transition-all ease-in-out duration-200 text-[#fff] flex justify-center items-center group-hover:top-0'>
          <div className='mb-[20px] opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 group-hover:mb-0 text-[12px] tracking-[-0.3px]'>view project</div>
        </div>
      </a>
    </div>
  )
}

const BottomWave = () => {
  const [wavemove, setWavemove] = useState([
    'translateX(0)',
    'translateX(0)',
    'translateX(0)',
    'translateX(0)',
    'translateX(0)',
  ]);
  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const windowWidth = document.documentElement.clientWidth;
      const rate = mouseX / windowWidth;
      setWavemove([
        'translateX(' + 280 * (rate - 0.5) * 2 + 'px)',
        'translateX(' + 280 * (rate - 0.5) * 1.5 + 'px)',
        'translateX(' + 280 * (rate - 0.5) * 1 + 'px)',
        'translateX(' + 280 * (rate - 0.5) * 0.5 + 'px)',
        'translateX(' + 280 * (rate - 0.5) * 1 + 'px)',
      ]);
    };
    document.addEventListener('mousemove', mousemove);
    return () => {
      document.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div className="pointer-events-none relative w-full opacity-100 4xl:opacity-0">
      <div className="wave1 " style={{ transform: wavemove[0] }}></div>
      <div className="wave2 " style={{ transform: wavemove[1] }}></div>
      <div className="wave3 " style={{ transform: wavemove[2] }}></div>
      <div className="wave4 " style={{ transform: wavemove[3] }}></div>
      <div className="ship" style={{ transform: wavemove[2] }}>
        <div className="rollship"></div>
      </div>
      <div className="lighter" style={{ transform: wavemove[0] }}></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#fefbf5] flex-col overflow-hidden relative">
      <IndexBox/>
      <BlogBox/>
      <ProjectBox/>
      <BottomWave/>
    </div>
  );
}
