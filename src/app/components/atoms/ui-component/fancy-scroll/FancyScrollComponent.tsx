import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Style from "./FancyScrollComponent.module.scss"
import { FancyScrollProps } from '../../../../interfaces'
import { useInView } from 'react-intersection-observer'

const FancyScrollComponent: React.FC<FancyScrollProps> = ({ title, heading, description, image }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })

  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <React.Fragment>
      <div ref={ref} className={Style['container']}>
        <div className={Style['content-wrapper']}>
          <div className={Style['content']} style={{ opacity: inView ? 1 : 0.5 }}>
            <h2 className={Style['title']}>{title}</h2>
            <p className={Style['heading']}>{heading}</p>
            <p className={Style['description']}>{description}</p>
          </div>
          <CSSTransition
            in={inView}
            timeout={500}
            classNames={{
              enter: Style['img-enter'],
              enterActive: Style['img-enter-active'],
              exit: Style['img-exit'],
              exitActive: Style['img-exit-active'],
            }}
            mountOnEnter
            unmountOnExit
            nodeRef={imageRef} 
          >
            <img
              ref={imageRef} 
              src={image}
              alt="image"
              className={`${Style['image']} ${Style['fixed']}`}
            />
          </CSSTransition>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FancyScrollComponent
