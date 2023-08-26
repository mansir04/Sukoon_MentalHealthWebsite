import React, { useState } from 'react'

function AdhdResult(props) {


    return (
        <>
            <div className='show-score'>
                <p className='score'> Your Score:{props.score}</p><br />
                <p className='result'>Result :{props.score > 0 && props.score <= 20 ? 'you have MILD ADHD,it  is characterized by many symptoms that are not very disruptive to daily life. People with mild ADHD may need medication and other interventions to manage their symptoms and function in daily life.' : props.score > 20 && props.score <= 35 ? 'you have Moderate ADHD,it  is characterized by more symptoms that are more disruptive to daily life. People with moderate ADHD may need medication or other interventions to manage their symptoms.' 
                : props.score > 35 && props.score <= 50 ? 'you have severe ADHD ,it  is characterized by many symptoms that are very disruptive to daily life. People with severe ADHD may need medication and other interventions to manage their symptoms and function in daily life' : a} </p>

            </div>
        </>
    )
}

export default AdhdResult 