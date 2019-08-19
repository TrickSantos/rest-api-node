/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState, useEffect} from 'react'
import './Header.css'

export default function Header(){
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const handleMediaQueryChange = mediaQuery =>{
        if(mediaQuery.matches){
            setIsSmallScreen(true)
        }else{
            setIsSmallScreen(false)
        }
    }
    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width: 700px)")
        mediaQuery.addListener(handleMediaQueryChange)
        handleMediaQueryChange(mediaQuery)

        return () =>{
            mediaQuery.removeListener(handleMediaQueryChange)
        }
    },[])
    const toggleNav= ()=>{
        setIsNavVisible(!isNavVisible)
    }
    return (
        <header className="header">
            <a href="#" className="logo">Logo</a>
            {(!isSmallScreen || isNavVisible) &&(
                <nav className="nav">
                    <a href="#">Inicial</a>
                    <a href="#">Caixa</a>
                    <a href="#">Loggout</a>
                    <button>Sair</button>
                </nav>
            )}
            <button onClick={toggleNav} className="burguer">Toggle</button>
            
        </header>
    )
}