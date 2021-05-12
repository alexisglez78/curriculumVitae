import React from 'react'
import Foto from '../assets/alexis.jpg'



export default function Inicio() {
    return (
        <div className="imagen" style={{ color: 'white', height: '100vh'}} >
            <div className="pri" >
                <div className="columns" >
                    <div className="column " style={{ textAlign: 'center',marginTop:'0%' }}>
                        <div className="is-capitalized is-size-1 mb-5" style={{marginTop:'10%'}}>paul alexis gonzalez casas</div>
                        <figure className="mb-5" >
                            <img className="is-rounded" src={Foto} alt="Logo" style={{ borderRadius: '50%', width: '150px' }} />
                        </figure>
                        <div className="is-subtitle is-italic has-text-justified is-size-6" style={{marginLeft:'15%',marginRight:'15%'}}>Desarrollador web creativo dedicado al desarrollo y optimización de sitios web interactivos, fáciles de usar y ricos en funciones. Aprovechar las habilidades analíticas y una gran atención a los detalles para ofrecer soluciones web originales y eficientes, proporcionar conocimientos técnicos y experiencia, crear nuevos sitios web de principio a fin.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
