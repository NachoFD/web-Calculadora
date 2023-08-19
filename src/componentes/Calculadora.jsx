/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import './styleCalculadora.css'

function Calculadora(props) {

    const { error } = props

    const [ cuenta, setCuenta ] = useState('Cuenta')
    const [ resultado, setResultado ] = useState('Resultado')

    const handleCuenta = (valor) => {

        const ultValor = cuenta[cuenta.length - 1]

        if(cuenta == '0' || ultValor == 'a' || ultValor == '*' || ultValor == '/' || ultValor == '-' || ultValor == '+'){
        
            if(valor == '*' || valor == '/' || valor == '-' || valor == '+'){
                error()
            }
            else
            {
                if(cuenta == '0' || cuenta == 'Cuenta'){
                    setCuenta('')
                }
    
                setCuenta(prevCuenta => [
                    ...prevCuenta,
                    valor
                ])
            }
        }
        else
        {
            if(cuenta == 'Cuenta'){
                setCuenta('')
            }

            setCuenta(prevCuenta => [
                ...prevCuenta,
                valor
            ])
        }
    }

    const reset = () => {
        setCuenta('0')
        setResultado('0')
    }

    const retroceder = () => {

        const ultValor = cuenta[cuenta.length - 1]

        if(ultValor == 'a'){
            // MOSTRAR ERROR (ANIMACION)
        }
        else
        {
            const nuevaCuenta = cuenta.slice(0, cuenta.length-1)
            setCuenta(nuevaCuenta)

            if(nuevaCuenta == ''){
                setCuenta('0')
            }
        }


    }

    const realizarCuenta = () => {

        if (cuenta === 'Cuenta' || cuenta === '0') {
            return;
        }
        
        const ultValor = cuenta[cuenta.length - 1]
        if(ultValor == 'a' || ultValor == '*' || ultValor == '/' || ultValor == '-' || ultValor == '+'){
            error()
            return
        }
    
        if (resultado === 'Resultado' || resultado === '0') {
            setResultado('');
        }
    
        let num1 = ''
        let num2 = ''
        let operador = ''
    
        for (let i = 0; i < cuenta.length; i++) {
            const char = cuenta[i];
    
            if (parseInt(char) >= 0 && parseInt(char) <= 9) {

                if (operador === '') {
                    num1 += char;

                } else {
                    num2 += char;
                }

            } else {

                if(operador != ''){
                    num1 = calcular(num1, num2, operador)
                    num2 = ''
                    operador = char
                }
                else
                {
                    operador = char;
                }

            }
        }
    
        setResultado(calcular(num1, num2, operador));
        console.log('---')
    }

    const calcular = (num1, num2, valor) => {
        if(valor == '+'){
            return parseInt(num1) + parseInt(num2)
        }
        else if(valor == '-'){
            return parseInt(num1) - parseInt(num2)
        }
        else if(valor == '/'){
            return parseInt(num1) / parseInt(num2)
        }
        else if(valor == '*'){
            return parseInt(num1) * parseInt(num2)
        }
    }

  return (
    <div className='contenedorCalculadora'>

        <div className='pantallaCalculadora'>
            <h1>{resultado}</h1>
            <h3>{cuenta}</h3>
        </div>

        <div className='botones'>
            <div className='superiores'>
                <button>CE</button>
                <button onClick={reset}>C</button>
                <button onClick={retroceder}>ATRAS</button>
                <button onClick={() => handleCuenta('/')}>/</button>
            </div>

        <div className='numeros'>
            <div className='fila'>
                <button onClick={() => handleCuenta('7')}><strong>7</strong></button>
                <button onClick={() => handleCuenta('8')}><strong>8</strong></button>
                <button onClick={() => handleCuenta('9')}><strong>9</strong></button>
                <button id='simbolo' onClick={() => handleCuenta('*')}>x</button>
            </div>
            <div className='fila'>
                <button onClick={() => handleCuenta('4')}><strong>4</strong></button>
                <button onClick={() => handleCuenta('5')}><strong>5</strong></button>
                <button onClick={() => handleCuenta('6')}><strong>6</strong></button>
                <button id='simbolo' onClick={() => handleCuenta('-')}>-</button>
            </div>
            <div className='fila'>
                
                <button onClick={() => handleCuenta('1')}><strong>1</strong></button>
                <button onClick={() => handleCuenta('2')}><strong>2</strong></button>
                <button onClick={() => handleCuenta('3')}><strong>3</strong></button>
                <button id='simbolo' onClick={() => handleCuenta('+')}>+</button>
            </div>
            <div className='fila'>
                <button></button>
                <button onClick={() => handleCuenta('0')}><strong>0</strong></button>
                <button></button>
                <button id='simbolo' onClick={realizarCuenta}>=</button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Calculadora