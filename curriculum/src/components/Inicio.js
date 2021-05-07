import React from 'react'
import Foto from '../assets/alexis.jpg'



export default function Inicio() {
    return (
        <div className="imagen" style={{ color: 'white', height: window.screen.height }} >
            <div className="pri" >
                <div className="columns " style={{ marginTop: '-200px' }}>
                    <div className="column " style={{ textAlign: 'center' }}>
                        <div className="is-capitalized is-size-1 mb-5">paul alexis gonzalez casas</div>
                        <figure className="mb-5" >
                            <img className="is-rounded" src={Foto} alt="Logo" style={{ borderRadius: '50%', width: '150px' }} />
                        </figure>
                        <div className="is-subtitle is-italic has-text-justified is-size-6" style={{marginLeft:'15%',marginRight:'15%'}}>Soy un desarrollador web con mas de 3 años en la creacion de aplicaciones web y moviles, fanatico de las nuevas herramientas y del software.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
