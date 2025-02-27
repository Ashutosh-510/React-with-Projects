// eslint-disable-next-line no-unused-vars
import React from 'react'

// Link - we use link in place of anchor tag because a tag refresh after new changes and react did not support this concept
        // that's why we use link instead of anchor tag

// NavLink -  Navlink provide some additional things as compared to link 
import {Link,NavLink} from 'react-router-dom'
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                /* Navlink provide a feature to use dynamic css for colouring the current active page icon or anything that shows user is currently on this page or url */
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                /* Navlink provide a feature to use dynamic css for colouring the current active page icon or anything that shows user is currently on this page or url */
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                /* Navlink provide a feature to use dynamic css for colouring the current active page icon or anything that shows user is currently on this page or url */
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                /* Navlink provide a feature to use dynamic css for colouring the current active page icon or anything that shows user is currently on this page or url */
                                to="/Github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

