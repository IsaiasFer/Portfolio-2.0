import React from 'react'
import School from './schools'

import '../styles/study.css'

function Study(){
    return(
        <section className='studySection'>
            <h3>Lugares donde estudié</h3>
            <div className="schools">
                <School
                    class='schoolSection'
                    image='https://i.imgur.com/g7HrStZ.png'
                    title='Platzi'
                    description='Educación online efectiva'
                    courses='Varios cursos'
                    time='2020 - actualmente'
                />
                <School
                    class='schoolSectionReverse'
                    image='https://i.imgur.com/l8r1gtG.png'
                    title='IITA'
                    description='Instituto de innovación y Tecnología Aplicada'
                    courses='Robotica con Arduino'
                    time='2020'
                />
                <School
                    class='schoolSection'
                    image='https://i.imgur.com/7ymG1mA.png'
                    title='EETN° 3141'
                    description='Escuela de Educación Técnica Número 3141'
                    courses='Tecnicatura Química'
                    time='2016 - actulmente'
                />
                <School
                    class='schoolSectionReverse'
                    image='https://i.imgur.com/AIEonI0.png'
                    title='UNSa'
                    description='Universidad Nacional de Salta'
                    courses='Taller Física al alcance de todos'
                    time='2019'
                />
            </div>
        </section>
    )
}

export default Study