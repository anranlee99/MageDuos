export default function Mana({turn}){
    
    const bars = Array(5).fill(<div style={{border:'1px solid black', height: '30px', width:'100px'}}>

    </div>).fill(<div style={{border:'1px solid black', height: '30px', width:'100px', background: 'dodgerblue'}}>

</div>, turn-1)
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        {bars}
    </div>
)}