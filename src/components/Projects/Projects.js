import { useEffect, useRef } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const projectsContainerRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const projectsGridRef = useRef(null)

  // 统一所有项目块的高度
  useEffect(() => {
    const updateProjectHeights = () => {
      if (projectsGridRef.current) {
        const projectElements = projectsGridRef.current.querySelectorAll('.project')
        if (projectElements.length > 0) {
          let maxHeight = 0
          // 先计算最大高度
          projectElements.forEach((element) => {
            const el = element
            el.style.height = 'auto'
            const height = el.offsetHeight
            if (height > maxHeight) {
              maxHeight = height
            }
          })
          // 再应用最大高度
          projectElements.forEach((element) => {
            const el = element
            el.style.height = `${maxHeight}px`
          })
        }
      }
    }

    // 延迟执行以确保DOM已渲染
    setTimeout(() => {
      updateProjectHeights()
    }, 100)

    window.addEventListener('resize', updateProjectHeights)
    return () => {
      window.removeEventListener('resize', updateProjectHeights)
    }
  }, [projects])

  // 处理导航跳转，重置横向滚动位置
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#projects' && scrollContainerRef.current) {
        // 跳转到projects时，重置横向滚动到开始位置
        scrollContainerRef.current.scrollLeft = 0
      }
    }

    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange)
    
    // 监听点击事件（处理直接点击链接的情况）
    const handleClick = (e) => {
      const target = e.target.closest('a[href="#projects"]')
      if (target && scrollContainerRef.current) {
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0
          }
        }, 100)
      }
    }
    
    document.addEventListener('click', handleClick)
    
    // 初始检查
    if (window.location.hash === '#projects') {
      setTimeout(handleHashChange, 200)
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // 横向滚动效果：只有当Projects区域完全进入视口时才开始横向滑动
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const projectsSection = projectsContainerRef.current;
    
    if (!scrollContainer || !projectsSection) {
      return undefined;
    }

    let ticking = false;
    let isManualNavigation = false;
    let manualNavTimeout = null;

    const updateScroll = () => {
      if (isManualNavigation) {
        ticking = false;
        return;
      }

      const projectsRect = projectsSection.getBoundingClientRect();
      const skillsSection = document.getElementById('skills');

      let progress = 0;

      // 只有当projects区域完全进入视口时才开始横向滚动
      // 判断标准：projects区域顶部到达视口顶部附近（比如100px以内），说明已经完全进入视口
      const fullyVisibleThreshold = 100; // projects顶部距离视口顶部的阈值

      if (projectsRect.top <= fullyVisibleThreshold && projectsRect.bottom > 0) {
        // projects区域已经完全进入视口，开始计算横向滚动进度
        if (skillsSection) {
          const skillsRect = skillsSection.getBoundingClientRect();
          const projectsTop = projectsRect.top;
          const skillsTop = skillsRect.top;
          const distance = skillsTop - projectsTop;

          if (distance > 0) {
            // 计算滚动进度：
            // 当projects顶部在fullyVisibleThreshold位置时，progress = 0（显示前几个项目）
            // 当滚动到skills区域开始进入视口时，progress = 1（显示最后几个项目）
            const scrollStartPoint = fullyVisibleThreshold; // projects完全进入视口的起始点
            const scrollEndPoint = skillsTop; // skills区域开始的位置

            // 当前projects顶部的位置
            const currentPos = projectsTop;

            // 计算进度：从scrollStartPoint滚动到scrollEndPoint
            if (currentPos >= scrollStartPoint) {
              // 还在起始点，进度为0
              progress = 0;
            } else if (currentPos <= scrollEndPoint) {
              // 已经到达结束点，进度为1
              progress = 1;
            } else {
              // 在起始点和结束点之间，计算进度
              const scrolledDistance = scrollStartPoint - currentPos;
              const totalDistance = scrollStartPoint - scrollEndPoint;
              progress = Math.max(0, Math.min(1, scrolledDistance / totalDistance));
            }
          } else {
            // 如果skills在projects上方，保持在开始位置
            progress = 0;
          }
        } else {
          // 如果没有skills区域，保持在开始位置
          progress = 0;
        }
      } else if (projectsRect.top > fullyVisibleThreshold) {
        // projects区域还没完全进入视口，保持在开始位置
        progress = 0;
      } else if (projectsRect.bottom <= 0) {
        // projects区域已经完全滚出视口，保持在最后位置
        progress = 1;
      }

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll > 0) {
        scrollContainer.scrollLeft = progress * maxScroll;
      } else {
        scrollContainer.scrollLeft = 0;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    // 处理手动导航跳到 #projects 时归位
    const handleHashChange = () => {
      if (window.location.hash === '#projects') {
        isManualNavigation = true;
        scrollContainer.scrollLeft = 0;
        if (manualNavTimeout) clearTimeout(manualNavTimeout);
        manualNavTimeout = setTimeout(() => {
          isManualNavigation = false;
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // 初始检查
    handleScroll();     // 初始计算

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      if (manualNavTimeout) {
        clearTimeout(manualNavTimeout);
      }
    };
  }, []);

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' ref={projectsContainerRef}>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__scroll-container' ref={scrollContainerRef}>
        <div className='projects__grid' ref={projectsGridRef}>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects