import React from 'react'
import 'bulma'
import { FaHtml5, FaNode, FaPhp, FaReact, FaAngular, FaBootstrap, FaSass } from 'react-icons/fa'
import { DiHtml5, DiCss3, DiAndroid } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPwa } from "react-icons/io5";
import { SiMaterialdesign, SiXamarin, SiMysql, SiMongodb, SiBulma, SiAngularjs, SiPython, SiFirebase, SiShopify } from "react-icons/si";

export default function Lenguajes() {
    return (
        <div className="imagen2" style={{ color: 'white', height: '100vh' }} >
            <div className="container" style={{ overflow: 'auto', height: '100%', width: '100%' }}>
                <div className="columns " style={{ position: 'absolute', marginTop: '10%', padding: '-100%' }}>
                    <div className="column " style={{ marginBottom: '10%' }}>
                        <div className="card p-2" style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: 10 }}>Development </div>
                            <div className="columns ">
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Html</span>
                                    <div className="iconS "><DiHtml5 /></div>
                                </div>

                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Javascript</span>
                                    <div className="iconS "><IoLogoJavascript /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">NodeJS</span>
                                    <div className="iconS "><FaNode /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Php</span>
                                    <div className="iconS "><FaPhp /></div>
                                </div>

                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">React, ReactNative</span>
                                    <div className="iconS "><FaReact /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Angular</span>
                                    <div className="iconS "><FaAngular /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Android</span>
                                    <div className="iconS "><DiAndroid /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Xamarin Forms</span>
                                    <div className="iconS "><SiXamarin /></div>
                                </div>
                                <div className="column zoom tooltip">
                                    <span className="tooltiptext">Phyton</span>
                                    <div className="iconS "><SiPython /></div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: 10 }}>Databases</div>
                            <div className="columns ml-5">
                                <div className="column zoom tooltip is-1">
                                    <span className="tooltiptext">Mysql</span>
                                    <div className="iconS "><SiMysql /></div>
                                </div>
                                <div className="column zoom tooltip is-1">
                                    <span className="tooltiptext">Mongodb</span>
                                    <div className="iconS "><SiMongodb /></div>
                                </div>
                                <div className="column zoom tooltip is-1">
                                    <span className="tooltiptext">Firebase Storage</span>
                                    <div className="iconS "><SiFirebase /></div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: 10 }}>Ui Design</div>
                            <div className="columns ml-5">
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Css </span>
                                    <div className="iconS "><DiCss3 /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Sass</span>
                                    <div className="iconS "><FaSass /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Bulma</span>
                                    <div className="iconS "><SiBulma /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Bootstrap</span>
                                    <div className="iconS "><FaBootstrap /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Material Design</span>
                                    <div className="iconS "><SiMaterialdesign /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Material Angular</span>
                                    <div className="iconS "><SiAngularjs /></div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-2 " style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <div style={{ fontSize: '27px', marginBottom: '10px', marginLeft: 10 }}>Others</div>
                            <div className="columns ml-5">
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Progresive Web Apps </span>
                                    <div className="iconS "><IoLogoPwa /></div>
                                </div>
                                <div className="column zoom is-2 tooltip ">
                                    <span className="tooltiptext">Shopify</span>
                                    <div className="iconS "><SiShopify /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
