'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Slider } from 'radix-ui'
import Slide from './Slide'
import styles from './Carousel.module.css'

const calculateInvisibleAreaWidth = swiper => {
  // 300 = slide width; 20 = spaceBetween
  const swiperSlidesWidth = swiper.slides.length * 300 + (swiper.slides.length - 1) * 20
  const invisibleAreaWidth = swiperSlidesWidth - swiper.width

  return invisibleAreaWidth
}

const calculateSliderThumbWidth = (sliderRootRef, swiper) => {
  const sliderRootWidth = sliderRootRef.current.getBoundingClientRect().width
  return `${sliderRootWidth / swiper.slides.length}px`
}

const calculateSliderValue = (swiperTranslate, invisibleAreaWidth) => {
  const invisibleAreaWidthPercent = invisibleAreaWidth / 100
  const sliderValue = Math.abs(swiperTranslate / invisibleAreaWidthPercent)

  return sliderValue
}

const calculateSwiperTranslate = (sliderValue, invisibleAreaWidth) => {
  const invisibleAreaWidthPercent = invisibleAreaWidth / 100
  const swiperTranslate = -Math.abs(invisibleAreaWidthPercent * sliderValue)

  return swiperTranslate
}

const initializeCarousel = (
  swiperRef,
  sliderRootRef,
  sliderThumbRef,
  setInvisibleAreaWidth,
  setSliderValue
) => {
  // calculate invisibleAreaWidth
  const invisibleAreaWidth = calculateInvisibleAreaWidth(swiperRef.current.swiper)
  setInvisibleAreaWidth(invisibleAreaWidth)

  // calculate slider thumb width
  const sliderThumbWidth = calculateSliderThumbWidth(sliderRootRef, swiperRef.current.swiper)
  sliderThumbRef.current.style.width = sliderThumbWidth

  // initialize slider position
  const sliderValue = calculateSliderValue(swiperRef.current.swiper.translate, invisibleAreaWidth)

  console.log(
    'initializeCarousel, swiperRef.current.swiper.translate:',
    swiperRef.current.swiper.translate
  )
  console.log('initializeCarousel, sliderValue:', sliderValue)
  setSliderValue([sliderValue])
}

const Carousel = () => {
  const [invisibleAreaWidth, setInvisibleAreaWidth] = useState(0)
  // const [isSwiperTouched, setIsSwiperTouched] = useState(false)
  const [sliderValue, setSliderValue] = useState([0])
  const swiperRef = useRef(null)
  const sliderRootRef = useRef(null)
  const sliderThumbRef = useRef(null)

  useEffect(() => {
    register()

    const swiperParams = {
      slidesPerView: 'auto',
      spaceBetween: 20,
    }

    Object.assign(swiperRef.current, swiperParams)
    swiperRef.current.initialize()

    initializeCarousel(
      swiperRef,
      sliderRootRef,
      sliderThumbRef,
      setInvisibleAreaWidth,
      setSliderValue
    )

    window.addEventListener('resize', () => {
      initializeCarousel(
        swiperRef,
        sliderRootRef,
        sliderThumbRef,
        setInvisibleAreaWidth,
        setSliderValue
      )
    })

    // move slider when swiper is moving
    /*
      swiperRef.current.addEventListener('swipertouchstart', () => {
        console.log('swiper, on touchStart - isSwiperTouched:', isSwiperTouched)

        if (isSwiperTouched) return

        console.log('swiper, on touchStart, setting isSwiperTouched to true')

        setIsSwiperTouched(true)
      })

      swiperRef.current.addEventListener('swipertouchend', () => {
        console.log('swiper, on touchEnd - isSwiperTouched:', isSwiperTouched)

        if (!isSwiperTouched) return

        setIsSwiperTouched(false)
      })
    */

    swiperRef.current.addEventListener('swipersettranslate', ev => {
      const [swiper, translate] = ev.detail

      console.log('swipersettranslate, invisibleAreaWidth:', invisibleAreaWidth)

      const sliderValue = calculateSliderValue(translate, invisibleAreaWidth)

      console.log('swipersettranslate, sliderValue:', sliderValue)

      // console.log('swiper, on setTranslate - isSwiperTouched:', isSwiperTouched)
      // if (!isSwiperTouched) return

      setSliderValue([sliderValue])
    })
  }, [invisibleAreaWidth])

  const handleSliderValueChange = v => {
    // console.log('Carousel, handleSliderValueChange - v:', v)

    const swiperTranslate = calculateSwiperTranslate(v[0], invisibleAreaWidth)
    swiperRef.current.swiper.setTranslate(swiperTranslate)

    setSliderValue(v)
  }

  return (
    <>
      <div className={styles.swiperRoot}>
        <swiper-container ref={swiperRef} init="false">
          <swiper-slide>
            <Slide
              title={'NEAR/USDT'}
              subtitle={'SPOT · 1 мин. назад'}
              profit={'58.6206%'}
              goal={'Цель 4'}
              date={'06.10.2022'}
            />
          </swiper-slide>
          <swiper-slide>
            <Slide
              title={'NEAR/USDT'}
              subtitle={'SPOT · 1 мин. назад'}
              profit={'58.6206%'}
              goal={'Цель 4'}
              date={'06.10.2022'}
            />
          </swiper-slide>
          <swiper-slide>
            <Slide
              title={'NEAR/USDT'}
              subtitle={'SPOT · 1 мин. назад'}
              profit={'58.6206%'}
              goal={'Цель 4'}
              date={'06.10.2022'}
            />
          </swiper-slide>
          <swiper-slide>
            <Slide
              title={'NEAR/USDT'}
              subtitle={'SPOT · 1 мин. назад'}
              profit={'58.6206%'}
              goal={'Цель 4'}
              date={'06.10.2022'}
            />
          </swiper-slide>
          <swiper-slide>
            <Slide
              title={'NEAR/USDT'}
              subtitle={'SPOT · 1 мин. назад'}
              profit={'58.6206%'}
              goal={'Цель 4'}
              date={'06.10.2022'}
            />
          </swiper-slide>
        </swiper-container>
      </div>
      <Slider.Root
        ref={sliderRootRef}
        className={styles.sliderRoot}
        value={sliderValue}
        onValueChange={handleSliderValueChange}
      >
        <Slider.Track className={styles.sliderTrack}></Slider.Track>
        <Slider.Thumb ref={sliderThumbRef} className={styles.sliderThumb}></Slider.Thumb>
      </Slider.Root>
    </>
  )
}

export default Carousel
