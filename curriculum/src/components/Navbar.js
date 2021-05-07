/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma';
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {


    return (
        <div>
            <nav className="navbar is-transparent" style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                backgroundColor: 'transparent',
                color: 'white'
            }}>
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="true">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to="/" isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }

                            // only consider an event active if its event id is an odd number
                            const eventID = parseInt(match.params.eventID);
                            return !isNaN(eventID) && eventID % 2 === 1;
                        }}>
                            Inicio      </NavLink>
                        <NavLink className="navbar-item" to="/lenguajes" isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }

                            // only consider an event active if its event id is an odd number
                            const eventID = parseInt(match.params.eventID);
                            return !isNaN(eventID) && eventID % 2 === 1;
                        }}>
                            Lenguajes      </NavLink>
                        <NavLink className="navbar-item" to="/estudios" isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }

                            // only consider an event active if its event id is an odd number
                            const eventID = parseInt(match.params.eventID);
                            return !isNaN(eventID) && eventID % 2 === 1;
                        }}>
                            Educacion      </NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://github.com/alexisglez78" rel="noreferrer">
                                        <span className="icon">
                                            <FaGithub />
                                        </span>
                                        <span>
                                            Github
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>)

}



