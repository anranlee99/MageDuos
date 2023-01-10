export default function Spells({count, player, turn, p1, p2, p1Select, p2Select, setP1, setP2}){
    function setSelect(spell){
        if(player===1){
            setP1([...p1Select, spell])
        } else {
            setP2([...p2Select, JSON.parse(JSON.stringify(spell))])
        }
        
    }
    function removeFromPool(spell){
        if(player===1){
            setP1([])
        } else {
            let copy = [...p2Select]
            const idx = p2Select.indexOf(spell)
            console.log(idx)
            // if (idx !== -1) {
            //     copy = copy.splice(idx, 1);
            // }
            copy.splice(idx, 1)
            setP2([...copy])
        }
    }
    function handleClick(obj){
        if(player===1){
        
            if(obj.figure.style.border === ''){
                if(p1Select.length<1){
                    obj.figure.style = {...obj.figure.style, border:'4px solid red'}
                    setSelect(obj)
                }
            } else {
                obj.figure.style = {...obj.figure.style, border:''}
                removeFromPool(obj)
            }
            
        } else {
            console.log({p2Select, count})
            if(obj.figure.style.border === ''){
                if(p2Select.length < count){
                    obj.figure.style = {...obj.figure.style, border:'4px solid red'}
                    setSelect(obj)
                }
            } else {
                obj.figure.style = {...obj.figure.style, border:''}
                removeFromPool(obj)
            }
        }
    }
    return (
    <div style={{marginTop:'300px', marginBottom:'300px', display:'flex', justifyContent:'center'}}>
        <div className="playArea" style={{display: 'grid', gridTemplateColumns:'auto auto auto auto'}}>
            {player===1 ? p1.map(obj => (
                <figure style={obj.figure.style} onClick={() => handleClick({...obj})}>
                    <img src={obj.figure.imgSrc} alt={obj.figure.spellName} />
                    <figcaption style={{color:'black'}}>{obj.spellName}</figcaption>
                </figure>
            )) : p2.map(obj => (
                <figure style={obj.figure.style} onClick={() => handleClick({...obj})}>
                    <img src={obj.figure.imgSrc} alt={obj.figure.spellName} />
                    <figcaption style={{color:'black'}}>{obj.spellName}</figcaption>
                </figure>
            ))}
        </div>
    </div>
)}