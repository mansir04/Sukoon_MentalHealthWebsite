import React, { useState } from 'react'

function OcdResult(props) {


    return (
        <>
            <div className='show-score'>
                <p className='score'> Your Score:{props.score}</p><br />
                <p className='result'>Result :{props.score > 0 && props.score <= 10 ? 'Subclinical OCD: Scores of 0-10 indicate subclinical OCD. This means that the person has some OCD symptoms, but they are not severe enough to cause significant distress or impairment in daily life..' : props.score > 10 && props.score <= 20 ? ' Mild OCD: Scores of 10-25 indicate mild OCD. This means that the persons OCD symptoms are causing some distress and impairment in daily life, but they are still manageable.' : props.score > 20 && props.score <= 35 ?
                    'Moderate OCD: Scores of 20-35 indicate moderate OCD. This means that the persons OCD symptoms are causing significant distress and impairment in daily life. They may have difficulty working, socializing, or taking care of themselves.' : props.score > 35 && props.score <= 50 ? 'Severe OCD: Scores of 35-450 indicate severe OCD. This means that the persons OCD symptoms are causing very significant distress and impairment in daily life. They may be unable to work or socialize, and they may have difficulty taking care of themselves.':a } </p>
            </div>
        </>
    )
}

export default OcdResult
