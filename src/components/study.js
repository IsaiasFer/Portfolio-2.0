import React from 'react'
import School from './schools'

function Study(){
    return(
        <section className='studySection'>
            <h3>Lugares donde estudié</h3>
            <div className="schools">
                <School
                    url='https://platzi.com/'
                    class='schoolSection'
                    image='https://i.imgur.com/g7HrStZ.png'
                    title='Platzi'
                    description='Educación online efectiva'
                    courses='Varios cursos'
                    time='2020 - actualmente'
                />
                <School
                    url='https://iita.com.ar/salta/'
                    class='schoolSectionReverse'
                    image='https://i.imgur.com/l8r1gtG.png'
                    title='IITA'
                    description='Instituto de innovación y Tecnología Aplicada'
                    courses='Robotica con Arduino'
                    time='2020'
                />
                <School
                    url='https://isaiasfer.github.io/SchoolWeb-2.0/'
                    class='schoolSection'
                    image='https://i.imgur.com/7ymG1mA.png'
                    title='EETN° 3141'
                    description='Escuela de Educación Técnica Número 3141'
                    courses='Tecnicatura Química'
                    time='2016 - actulmente'
                />
                <School
                    url='http://www.unsa.edu.ar/web/index.php'
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