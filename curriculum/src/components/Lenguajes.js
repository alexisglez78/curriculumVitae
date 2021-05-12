import React from 'react'
import 'bulma'
import { FaHtml5, FaNode, FaPhp, FaReact, FaAngular, FaBootstrap, FaSass } from 'react-icons/fa'
import { DiHtml5, DiCss3, DiAndroid, DiIonic, DiReact } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { IoLogoPwa } from "react-icons/io5";
import { SiMaterialdesign, SiXamarin, SiMysql, SiMongodb, SiBulma, SiAngularjs, SiPython, SiFirebase, SiShopify } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Gradient = (props) => {

    return (
        <div className={(props.className) ? props.className : 'column zoom tooltip'} title="prueba de ">
            <span className="tooltiptext" >{props.tooltip}</span>
            <div style={{ width: '100%', height: 5, marginTop: '0px', fontSize: 10 }}>
                {props.porcentaje}
            </div>
            <div style={{ backgroundColor: 'white', width: '100%', height: 5, borderRadius: 3 }}>
                <div style={{ backgroundColor: '#0c7965', width: props.porcentaje, height: 5, marginTop: 10, marginBottom: '100px' }}>
                </div>
            </div>
            <div className="iconS " >
                {props.icon}
            </div>
        </div>
    )
}

export default function Lenguajes() {
    return (
        <div className="imagen2" style={{ color: 'white', height: '100vh' }} >
            <div className="container p-5" style={{ overflow: 'auto', height: '100%', width: '100%' }}>
                <div className="columns " style={{ position: 'absolute', marginTop: '10%', }}>
                    <div className="column " style={{ marginBottom: '10%' }} >
                        <div className="card p-2" style={{ backgroundColor: 'transparent', color: 'white', boxShadow: 'none', border: 'none' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: '-20px' }}>Development </div>
                            <div className="columns ">
                                <Gradient
                                    tooltip="Html"
                                    porcentaje="95%"
                                    icon={<DiHtml5 />}
                                />
                                <Gradient
                                    tooltip="Javascript"
                                    porcentaje="90%"
                                    icon={<IoLogoJavascript />}
                                />
                                <Gradient
                                    tooltip="NodeJS"
                                    porcentaje="80%"
                                    icon={<FaNode />}
                                />
                                <Gradient
                                    tooltip="Php"
                                    porcentaje="90%"
                                    icon={<FaPhp />}
                                />
                                <Gradient
                                    tooltip="React and ReactNative"
                                    porcentaje="93%"
                                    icon={<DiReact />}
                                />
                                <Gradient
                                    tooltip="Angular"
                                    porcentaje="75%"
                                    icon={<FaAngular />}
                                />


                            </div>
                            <div className="columns" >
                                <Gradient
                                    tooltip="Xamarin Forms"
                                    porcentaje="70%"
                                    icon={<SiXamarin />}
                                />
                                <Gradient
                                    tooltip="Phyton"
                                    porcentaje="50%"
                                    icon={<IoLogoPython />}
                                />
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white', boxShadow: 'none', border: 'none' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: '-20px' }}>Databases</div>
                            <div className="columns ">
                                <Gradient
                                    tooltip="Mysql"
                                    porcentaje="60%"
                                    icon={<SiMysql />}

                                />
                                <Gradient
                                    tooltip="Mongodb"
                                    porcentaje="50%"
                                    icon={<SiMongodb />}

                                />
                                <Gradient
                                    tooltip="Firebase Storage"
                                    porcentaje="70%"
                                    icon={<SiFirebase />}

                                />
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white', boxShadow: 'none', border: 'none' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: '-20px' }}>Ui Design</div>
                            <div className="columns ">
                                <Gradient
                                    tooltip="Css"
                                    porcentaje="85%"
                                    icon={<DiCss3 />}
                                />
                                <Gradient
                                    tooltip="Sass"
                                    porcentaje="65%"
                                    icon={<FaSass />}
                                />
                                <Gradient
                                    tooltip="Bulma"
                                    porcentaje="90%"
                                    icon={<SiBulma />}
                                />
                                <Gradient
                                    tooltip="Bootstrap"
                                    porcentaje="90%"
                                    icon={<FaBootstrap />}
                                />
                                <Gradient
                                    tooltip="Material Design"
                                    porcentaje="80%"
                                    icon={<SiMaterialdesign />}
                                />
                                <Gradient
                                    tooltip="Material Angular"
                                    porcentaje="70%"
                                    icon={<SiAngularjs />}
                                />
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white', boxShadow: 'none', border: 'none' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: 10 }}>Others</div>
                            <div className="columns ml-5">
                                <Gradient
                                    tooltip="Progresive Web Apps"
                                    porcentaje="70%"
                                    icon={<IoLogoPwa />}

                                />
                                <Gradient
                                    tooltip="Shopify"
                                    porcentaje="60%"
                                    icon={<SiShopify />}

                                />
                                <Gradient
                                    tooltip="Github"
                                    porcentaje="85%"
                                    icon={<AiFillGithub />}

                                />
                                <Gradient
                                    tooltip="Ionic"
                                    porcentaje="45%"
                                    icon={<DiIonic />}

                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
