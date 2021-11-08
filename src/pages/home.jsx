import React, { createRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom'
import filePDF from './resumeTime.pdf'


const Home = () => {
    const leftBlockRef = createRef(null)
    const rightBlockRef = createRef(null)
    const middleBlockRef = createRef(null)


    const windowDimensions = useWindowDimensions()
    const handleMouseMove = ({ clientX, target }) => {
        const midleBlockWidth = 22;

        if (target == leftBlockRef.current) {
            const leftBlockWidth = 100 - clientX / windowDimensions.width * 100;
            const rightBlockWidth = clientX / windowDimensions.width * 100
            leftBlockRef.current.style.width = `${leftBlockWidth}%`
            rightBlockRef.current.style.width = `${rightBlockWidth < 50 ? 50 : rightBlockWidth}%`
            middleBlockRef.current.style.right = `${rightBlockWidth - 1}%`;
            leftBlockRef.current.style.zIndex = 9;
            rightBlockRef.current.style.zIndex = 0;
            if (rightBlockRef.current.style.width < '55%') {
                leftBlockRef.current.style.opacity = 1
            }


        } else {
            const rightBlockWidth = clientX / windowDimensions.width * 100;
            const leftBlockWidth = 100 - clientX / windowDimensions.width * 100;
            if (rightBlockWidth > 100 - midleBlockWidth) return
            rightBlockRef.current.style.width = `${rightBlockWidth}%`
            leftBlockRef.current.style.width = `${leftBlockWidth < 50 ? 50 : leftBlockWidth}%`
            middleBlockRef.current.style.right = `${rightBlockWidth}%`;
            leftBlockRef.current.style.zIndex = 0;
            rightBlockRef.current.style.zIndex = 9
            if (rightBlockRef.current.style.width > '50%') {
                leftBlockRef.current.style.opacity = 0.78 - rightBlockWidth / 100
            }
            if (leftBlockRef.current.style.width > '95%') {
                leftBlockRef.current.style.width = '99%'
                middleBlockRef.current.style.right = '0%'
                rightBlockRef.current.style.width = '0%'
            }
        }

    }

    return (
        <div className='mainWrapper'>
            <div
                ref={leftBlockRef}
                onMouseMove={handleMouseMove}
                className='leftBlockPr  p-0'
            >
                <div className='frontendHard'>
                    <Link to='/progects'>
                        <p>
                            <strong>Frontend Developer</strong>
                        </p>
                        <p>
                            <strong>Hard Skills</strong>
                        </p>
                    </Link>


                </div>
            </div>
            <div ref={middleBlockRef}
                className='middleBlockPr  p-0'
            >
            </div>
            <div ref={rightBlockRef}
                onMouseMove={handleMouseMove}
                className='rightBlockPr  p-0'
            >
                <a href={filePDF}>

                    <div
                        className='frontendSoft'>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home;


