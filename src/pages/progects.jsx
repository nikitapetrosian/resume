import React, { useEffect, useState } from 'react';
import Progect from '../components/progect';

const Progects = () => {
    const slides = [
        "//jsfiddle.net/nikitaPetrosian/2ft41bws/1/embed/result/",
        "//jsfiddle.net/nikitaPetrosian/objf13L6/embed/result/",
        "//jsfiddle.net/nikitaPetrosian/4e2kptqy/1/embed/result/",
        "//jsfiddle.net/nikitaPetrosian/f8wt130m/2/embed/result/",
        "//jsfiddle.net/nikitaPetrosian/3vbuh2wa/2/embed/result/"
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slide, setSlide] = useState(0)
    useEffect(() => {
        setSlide(slides[currentSlide])
    }, [currentSlide])
    const next = () => {
        if (currentSlide >= slides.length - 1) setCurrentSlide(0)
        else setCurrentSlide(prev => ++prev)

    }
    const prev = () => {
        if (currentSlide < 1) setCurrentSlide(slides.length - 1)
        else setCurrentSlide(prev => --prev)
    }

    console.log(currentSlide);
    return (<>
        <div className='container progects'>
            <Progect slides={slide} />
            <div className='btn'>
                <button className='btn btn-primary m-2'
                    onClick={prev}
                >Предыдущий
                </button>
                <button className='btn btn-primary'
                    onClick={next}
                >Следующий
                </button>
            </div>
        </div>
    </>
    )
}

export default Progects;


