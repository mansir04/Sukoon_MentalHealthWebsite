import React, { useState } from 'react'

function AnxietyResult(props) {


    return (
        <>
            <div className='show-score'>
                <p className='score'> Your Score:{props.score}</p><br />
                <p className='result'>Result :{props.score > 40&& props.score <= 50 ? 'You have Panic level anxiety it is a type of severe anxiety that is characterized by a sudden and intense episode of fear. Panic attacks can last for several minutes and can cause a variety of physical symptoms, such as chest pain, shortness of breath, dizziness, and nausea.' : props.score > 30 && props.score <= 40 ? 'You have Severe anxiety it is the most severe level of anxiety. It causes very intense physical and mental symptoms, such as panic attacks, chest pain, and difficulty breathing. Severe anxiety can make it impossible to function at all.' : props.score > 10 && props.score <= 30 ?
                    'You have Moderate anxiety it is a more severe level of anxiety. It causes more intense physical and mental symptoms, such as difficulty concentrating, fatigue, and irritability. Moderate anxiety can make it difficult to function at work or school, and it can also interfere with relationships.' : props.score > 0 && props.score <= 10 ? 'You have Mild anxiety it is the least severe level of anxiety. It may cause mild physical symptoms, such as a racing heart or sweating, and some mental symptoms, such as worry or restlessness. Mild anxiety is usually manageable and does not interfere with daily life.' : 'You have Mild anxiety it is the least severe level of anxiety. It may cause mild physical symptoms, such as a racing heart or sweating, and some mental symptoms, such as worry or restlessness. Mild anxiety is usually manageable and does not interfere with daily life.'}</p>
            </div>
        </>
    )
}

export default AnxietyResult