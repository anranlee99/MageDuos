import water from './assets/water.png'
import icicle from './assets/icicle.png'
import blizzard from './assets/blizzard.png'
import wintersfury from './assets/wintersfury.png'
import fire from './assets/fire.png'
import firestorm from './assets/firestorm.png'
import volcano from './assets/volcano.png'
import blazingheat from './assets/blazingheat.png'
import empower from './assets/empower.png'
import limitbreak from './assets/limitbreak.png'
import { useState } from 'react'

function spellClick(){}

const library = [
    {   
        figure: {
            imgSrc: water,
            writable: true,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Water',
        value: 1,
        type: 'water'
    },
    {   
        figure: {
            imgSrc: icicle,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Icicle',
        value: 2,
        type: 'water'
    },
    {   
        figure: {
            imgSrc: blizzard,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Blizzard',
        value: 3,
        type: 'water'
    },
    {   
        figure: {
            imgSrc: fire,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Fire',
        value: 1,
        type:'fire'
    },
    {   
        figure: {
            imgSrc: firestorm,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Firestorm',
        value: 2,
        type: 'fire'
    },
    {   
        figure: {
            imgSrc: volcano,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Volcano',
        value: 3,
        type: 'fire'
    },
    {   
        figure: {
            imgSrc: wintersfury,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: "Winter's Fury",
        value: 2,
        type: 'augmentwater'
    },
    {   
        figure: {
            imgSrc: blazingheat,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Blazing Heat',
        value: 2,
        type: 'augmentfire'
    },
    {   
        figure: {
            imgSrc: empower,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Empower',
        // value: 2,
        type: 'empower'
    },
    {   
        figure: {
            imgSrc: limitbreak,
            style: {margin:'5px', cursor:'pointer', width:'200px', height:'200px',background: 'white', border:''}
        },
        spellName: 'Limit Break',
        // value: 1,
        type: 'limitbreak'
    }
]

export default library;