import React, { useEffect, useRef, useState } from 'react'
import Style from "./FancyScrollComponent.module.scss";
import { FancyScrollProps } from '../../../../interfaces';

const FancyScrollComponent: React.FC<FancyScrollProps> = ({ title, heading, description, image }) => {
   const containerRef = useRef<HTMLDivElement>(null)
   const imageRef = useRef<HTMLImageElement>(null)
   const [isVisible, setIsVisible] = useState(false)
   const [scrollPosition] = useState(0)

   useEffect(() => {
       const observer = new IntersectionObserver(
           ([entry]) => {
               setIsVisible(entry.isIntersecting)
           },
           { threshold: 1 }
       )

       if (containerRef.current) {
           observer.observe(containerRef.current)
       }

   }, [])

   const parallaxStyle = {
       transform: `translateY(${scrollPosition * 0.5}px)`, 
   }

   return (
       <React.Fragment>
           <div ref={containerRef} className={Style['container']}>
               <div className={Style['content-wrapper']}>
                  <div className={Style['content']}>
                      <h2 className={Style['title']}>{title}</h2>
                      <p className={Style['heading']}>{heading}</p>
                      <p className={Style['description']}>{description}</p>
                  </div>
                  <img
                      ref={imageRef}
                      src={image[0]}
                      alt="image"
                      className={`${Style['image']} ${isVisible ? Style['fixed'] : ''}`}
                      style={isVisible ? parallaxStyle : undefined}
                  />
               </div>
           </div>
       </React.Fragment>
   )
}

export default FancyScrollComponent
