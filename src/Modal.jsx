export default function Modal({toggle}){
    return (
        <div>
            <p style={{fontSize:'25px'}}>
                You and your partner are mages at the academy. <br/>
                This is a training exercise, where the objective <br/>
                is to do as much damage as possible.<br/>
                <br/>
                Merlin, you cannot directly deal damage, <br/>
                but you can empower your buddy to do as much damage as possible.<br/>
                <br/>
                There are types of spells: water and fire.<br/>
                Water(1), Icicle(2), and Blizzard(3), are water spells. <br/>
                Fire(1), Firestorm(2), and Volcano(3), are fire spells. <br/>
                <br/>
                There are also two special augmentation spells, <br/>
                Winter's Fury, and Blazing Heat. <br/>
                These double the damage of the water spells and fire spells <br/>
                cast along with them, respectively.<br/>
                <br/>
                Merlin can give additional spells that become available to Gandalf. <br/>
                Gandalf always starts with Water, Fire, Winter's Fury, and Blazing Heat. <br/>
                Merlin can only pick 1 spell, while Gandalf can pick 2.<br/>
                Merlin also always starts two unique spells, <strong>Limit Break</strong> and <strong>Empower</strong><br/>
                Limit Break allows Gandalf to cast 1 additional spell,<br/>
                while Empower gives Gandalf another copy of all the spells availble to them.<br/>
                <br/><br/>
                Merlin, it is your job to set Gandalf up for success,<br/>
                and Gandalf, it is your job to see the plan through.<br/><br/>
                Have fun!
            </p>
            <button onClick={()=> toggle(false)}>Start!</button>
        </div>
    )
}