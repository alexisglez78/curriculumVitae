import React from 'react'
import { FaHome, FaMusic, FaBeer,FaPhone,FaWhatsapp } from 'react-icons/fa'
import { RiComputerLine } from "react-icons/ri";
import { BiGame } from "react-icons/bi";
import { IoFootballOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";




import Mapa from './Mapa'


export default function Estudios() {
    return (
        <div className="imagen3" style={{ color: 'white' }} >
            <div className="container contenedor" style={{ overflow: 'auto', height: '100%', width: '100%' }}>
                <div style={{ marginTop: '70px' }}>
                    <div className="is-size-3 mb-5 ml-5">Experiencia laboral</div>
                </div>
                <div className="columns p-5" style={{ width: '99%' }}>
                    <div className="column">
                        <div className="card border-button" style={{ backgroundColor: ' rgba(255,255,255,0.9)',width:'100%' }}>
                            <div className="card-content">
                                <div>
                                    <div className="is-size-5 is-capitalized">
                                        Soluciones de desarrollo empresarial globalpaq
                                    </div>
                                    <div className="is-size-9 is-italic mb-3">Enero 2020- Presente</div>
                                    <div>
                                        <ol id="lista" >
                                            <li>Programador web html,css y js</li>
                                            <li>Programacion back end php, api rest</li>
                                            <li>programacion React (javascript)</li>
                                            <li>desarrollo de herramientas administrativas web</li>
                                            <li>creacion de paneles administrativos Angular</li>
                                            <li>Desarrollo backend con Slim para  peticiones CRUD</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column" >
                        <div className="card border-button" style={{ backgroundColor: ' rgba(255,255,255,0.9)',width:'100%' }}>
                            <div className="card-content">
                                <div>
                                    <div className="is-size-5 is-capitalized">
                                        Genesis Technologies
                                    </div>
                                    <div className="is-size-9 is-italic mb-3">Enero 2018 - Diciembre 2019</div>
                                    <div>
                                        <ol id="lista">
                                            <li >manejo de firebase storage, auth,Real-time database y hosting</li>
                                            <li>vuelo de drones con python y reconocimiento facial</li>
                                            <li>proyectos multiplataforma con Xamarin Forms</li>
                                            <li>Desarrollo de apps en React-Native</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column ">
                        <div className="card border-button" style={{ backgroundColor: ' rgba(255,255,255,0.9)',width:'100%' }}>
                            <div className="card-content">
                                <div>
                                    <div className="is-size-5 is-capitalized">
                                        Phicom tecnologías
                                    </div>
                                    <div className="is-size-9 is-italic mb-3">Mayo 2017 - Enero 2018</div>
                                    <div>
                                        <ol id="lista">
                                            <li>Maquetado de paginas web</li>
                                            <li>Administrador de datos en oracle de empleados</li>
                                            <li>Soporte tecnico de equipos de computo</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '0%' }}>
                    <div className="is-size-3 ml-5">Estudios</div>
                </div>
                <div className="columns" style={{ width: '99%' }}>
                    <div className="column">
                        <div className="card" style={{ backgroundColor: ' rgba(255,255,255,0.9)',width:'100%'}}>
                            <div className="card-content" >
                                <div>
                                    <div className="is-size-5 is-capitalized">
                                        Universidad Fidel Velasquez
                                    </div>
                                    <div className="is-size-9 is-italic mb-3">Tecnico Superior Universitario</div>
                                    <Mapa />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '0%' }}>
                    <div className="is-size-3 ml-5">Por ultimo</div>
                </div>
                <div className="columns" style={{ width: '99%' }}>
                    <div className="column">
                        <div className="card" style={{ backgroundColor: ' rgba(255,255,255,0.9)',width:'100%' }}>
                            <div className="card-content" >
                                <div class="columns">

                                    <div class="column">
                                        <div className="is-size-5">Habilidades</div>
                                        <div className="is-size-7">Responsable</div>
                                        <div className="is-size-7">Comprometido</div>
                                        <div className="is-size-7">Positivo</div>
                                        <div className="is-size-7">Proactivo</div>
                                        <div className="is-size-7">Adaptable</div>
                                        <div className="is-size-7">Sincero</div>
                                        <div className="is-size-7">Empático</div>
                                        <div className="is-size-7">Creativo</div>
                                    </div>
                                    <div class="column">
                                        <div className="is-size-5">Debilidades</div>
                                        <div className="is-size-7">Tímido</div>
                                        <div className="is-size-7">Impaciente</div>
                                        <div className="is-size-7">Perfeccionista</div>
                                        <div className="is-size-7">Desorganizado</div>
                                    </div>
                                    <div class="column">
                                        <div className="is-size-5">Idiomas</div>
                                        <div className="is-size-7">Español (nativo)</div>
                                        <div className="is-size-7">Ingles (35% Escritura - 65%Lectura)</div>
                                    </div>

                                </div>
                                <div className="is-size-5 mb-4">Entretenimiento</div>
                                <div className="columns " style={{ textAlign: 'center' }}>
                                    <div className="column"><FaHome className="zoom"/><br /> Relajacion en casa</div>
                                    <div className="column"><RiComputerLine className="zoom"/><br />Internet de las cosas</div>
                                    <div className="column"><BiGame className="zoom"/><br />Videojuegos</div>
                                    <div className="column"><IoFootballOutline className="zoom"/><br />Football Soccer</div>
                                    <div className="column"><FaMusic className="zoom"/><br />Escuchar musica</div>
                                    <div className="column"><FaBeer className="zoom"/><br />Cerveza</div>
                                </div>
                                <div className="is-size-5 mb-4 mt-5">Contactame</div>
                                <div className="columns " style={{ textAlign: 'center' }}>
                                    <div className="column"><FaPhone className="zoom"/><br />+52 5574518872</div>
                                    <div className="column"><AiOutlineMail className="zoom"/><br />alexisglez78@gmail.com</div>
                                    <div className="column"><FaWhatsapp className="zoom"/><br />+52 5574518872</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
