import { useState } from 'react'
import Info from './Info'
import Ball from './Ball'
import './Bingo.css'

const Bingo = () => {
    const [numbers, setNumbers] = useState([])
    const min = 1
    const max = 75

    const bingoSet = {
        "b": Array(15).fill(1).map((x, y) => x + y),
        "i": Array(15).fill(16).map((x, y) => x + y),
        "n": Array(15).fill(31).map((x, y) => x + y),
        "g": Array(15).fill(46).map((x, y) => x + y),
        "o": Array(15).fill(61).map((x, y) => x + y)
    }

    const nextNumberHandler = () => {
        const tempNumbers = [...numbers]
        const newNumber = getNewNumber()
        if (newNumber > 0) {
            tempNumbers.push(newNumber)
            setNumbers(tempNumbers)    
        } else {
            console.log('All numbers used')
        }
    }

    const resetGame = () => {
        setNumbers([])
    }

    const getNewNumber = () => {
        if (numbers.length >= max) return false
        let newNumber
        do {
            newNumber = Math.floor(Math.random() * (max - min + 1) + min)
         } while (numbers.includes(newNumber))
        return newNumber;
      }

    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <button onClick={nextNumberHandler}>Next number</button> 
                    <button onClick={resetGame}>Reset game</button> 
                </div>
                <div className="header-right">
                    <Info className="infoElement" heading="Move" content={`${numbers.length} / ${max}`}></Info>
                    <Info className="infoElement" heading="Min" content={`${Math.min(...numbers)}`}></Info>
                    <Info className="infoElement" heading="Max" content={`${Math.max(...numbers)}`}></Info>
                    <Info className="infoElement" heading="Avg" content={`${(numbers.length > 0) ? Math.round(numbers.reduce((a, b) => a + b) / numbers.length) : ""}`}></Info>
                </div>
            </div>
            <div className="bingoSet">
                {[..."bingo"].map(letter => {
                    return(
                        <div className="row" key={letter}>
                        {bingoSet[letter].map((item) => {
                            return(
                                <Ball key={item} number={item} bingoSet={bingoSet} numbers={numbers}></Ball>
                            )
                        })}                
                        </div>
                    )
                }
                )}
            </div>
            <div className="numbers">
                {numbers.map((item) => {
                    return (
                        <Ball key={item} number={item} bingoSet={bingoSet}></Ball>
                    )
                })}
            </div>
        </div>
    )
}

// blue, red, white, green, yellow


export default Bingo