import React, { useState } from 'react'

function DepressionResult(props) {


    return (
        <>
            <div className='show-score'>
                <p className='score'> Your Score:{props.score}</p><br />
                <p className='result'>Result :{props.score > 0 && props.score <= 10 ? 'you have Mild depression  This is the mildest form of depression and is characterized by a few depressive symptoms that do not significantly interfere with daily life.' : props.score > 10 && props.score <= 20 ? ' you have Moderate depression: This level of depression is more severe than mild depression and causes more noticeable symptoms. It can interfere with daily activities and relationships.' : props.score > 20 && props.score <= 30 ?
                    'you have Severe depression: This is the most severe form of depression and is characterized by a number of disabling symptoms. It can make it difficult to function at all.' : props.score > 30 && props.score <= 50 ? 'This is a rare form of depression that is accompanied by psychotic symptoms, such as delusions or hallucinations.':a } </p>
            </div>
        </>
    )
}

export default DepressionResult
