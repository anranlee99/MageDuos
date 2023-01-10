import { useState } from "react";
import Mana from './Mana'
import Spells from './Spells'
import Library from "./Library";
import Modal from "./Modal"
export default function Game(){
    const [score, setScore] = useState(0)
    const [turn, setTurn] = useState(1)
    const [player, setPlayer] = useState(1)
    const [spellct, setSpellct] = useState(2)
    const [p1Pool, setP1Pool] = useState(getp1default())
    const [newGame, setNewGame] = useState(true)
    
    const [p2Pool, setP2Pool] = useState([JSON.parse(JSON.stringify(Library[0])),JSON.parse(JSON.stringify(Library[3])), JSON.parse(JSON.stringify(Library[6])), JSON.parse(JSON.stringify(Library[7]))])
    const [p1select, setP1Select] = useState([])
    const [p2select, setP2Select] = useState([])
    function getp1default(){
        let pool = [JSON.parse(JSON.stringify(Library[Library.length-1])), JSON.parse(JSON.stringify(Library[Library.length-2]))]
        while(pool.length < 4){
            let s = getRandSpell()
            if(!pool.includes(s)){
                pool.unshift(s)
            }
        }
        
        return pool
    }
    function getRandSpell(){
        return JSON.parse(JSON.stringify(Library[Math.floor(Math.random()*(Library.length-2))]))
    }

    function endTurn(){
        if(player===1){
            if(p1select.length===1){
                if(p1select[0].spellName==='Empower' ){
                    let copy = []
                    for (let i in p2Pool){
                        copy = [...copy, JSON.parse(JSON.stringify(p2Pool[i]))]
                        
                    }
                    setP2Pool([...p2Pool, ...copy])
                } else if(p1select[0].spellName==='Limit Break'){
                    setSpellct(spellct + 1)
                } else {
                    let s = JSON.parse(JSON.stringify(p1select[0]))

                    s.figure.style = {...s.figure.style, border:''}
                    setP2Pool([...p2Pool, s])
                }
                
            }
        }else{
            calcDamage()
            for (const spell of p2Pool){

                spell.figure.style = {...spell.figure.style, border:''}
            }
            setP1Pool(getp1default())
            setTurn(turn + 1)
        }
        setP1Select([])
        setP2Select([])
        setPlayer(player*-1)
        
    }
    function calcDamage(){
        console.log({p2select, p2Pool})
        
        let waterbase = 0 
        let firebase = 0 
        let wateraugments = 1
        let fireaugments = 1
        for (const spell of p2select){
            if (spell.type === 'water'){
                waterbase += spell.value
            } else if(spell.type === 'fire'){
                firebase += spell.value
            } else if(spell.type === 'augmentwater'){
                wateraugments *=2
            } else if(spell.type === 'augmentfire'){
                fireaugments *= 2
            } 
        }

        let dmg = (waterbase*wateraugments) + (firebase*fireaugments);
        setScore(score + dmg)
    }
    return (
        
            <>
            {newGame ? <Modal toggle={setNewGame}/> : 
                <div className="game-container">
                    <div className='score'
                    style={{
                    background: 'white',
                    
                    color: 'black' 
                    }}>
                         {player === 1 ? 'Merlin' : 'Gandalf'}'s Turn
                        <br/> 
                        <br/> 
                        Mana: 
                        <Mana turn={turn}/>
                        <br/> 
                        Damage Inflicted: {score} 
                    </div>
                    <Spells count={spellct} player={player} turn={turn} p1={p1Pool} p2={p2Pool} p1Select={p1select} p2Select={p2select} setP1={setP1Select} setP2={setP2Select}/>
                    <button style={{width:'100px', height:'30px', borderRadius:'10%'}}onClick={endTurn}>End Turn</button>
                </div>}
            </>
        

)}