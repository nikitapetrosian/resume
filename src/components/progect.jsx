import React, { createRef, useEffect, useState } from 'react';
const Progect = ({ slides }) => {
    const firstBlock = createRef(null)

    useEffect(() => {
        if (!firstBlock) return
        const oldWrapper = document.getElementById('wrapper')
        if (oldWrapper) firstBlock.current.removeChild(oldWrapper)
        const wrapper = document.createElement('div')
        wrapper.setAttribute('id', 'wrapper')

        const script = document.createElement('script')
        script.src = slides
        script.async = true
        wrapper.appendChild(script)
        firstBlock.current.appendChild(wrapper)
    }, [firstBlock, slides])



    return (
        <div className='slide'>

            <h1>Проекты</h1>
            <div ref={firstBlock}
                className='firstBlock'
            >
            </div>


        </div>
    )
}

export default Progect;