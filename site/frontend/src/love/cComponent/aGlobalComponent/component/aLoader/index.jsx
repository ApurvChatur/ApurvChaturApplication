import React, { useEffect, useRef } from 'react'
import Shadow from 'src/love/hAsset/shadow_dog.png'
import { useState } from 'react';
import { FaBath, FaDog } from 'react-icons/fa';
import { GiChickenLeg, GiCircleSparks, GiSittingDog } from "react-icons/gi";
import { BsDiscFill, BsFillLightningChargeFill } from 'react-icons/bs';


const Loader = () => {
  // Normal Variables
  const canvasRef = useRef(null);
  const bg = import.meta.env.VITE_APPLICATION === "ApurvChatur" ? "#4db5ff" :
             import.meta.env.VITE_APPLICATION === "SofieBerkin" ? "#06b7b7" :
             import.meta.env.VITE_APPLICATION === "AnushreeMandape" ? "#C8A2C8" : "#4db5ff"
 
  // State Variables
  const [playerState, setPlayerState] = useState("idle")

  // All Render
  // First Render
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = 600;
    const CANVAS_HEIGHT = canvas.height = 600;
    
    const scaledWidth = CANVAS_WIDTH / 2;
    const scaledHeight = CANVAS_HEIGHT / 2;
    const offsetX = (CANVAS_WIDTH - scaledWidth) / 2;
    const offsetY = (CANVAS_HEIGHT - scaledHeight) / 2;
    ctx.translate(offsetX, offsetY);

    ctx.scale(0.5, 0.5);

    const playerImage = new Image();
    playerImage.src = Shadow;
    
    const spriteWidth = 575;
    const spriteHeight = 523;
    
    let gameFrame = 0;
    const staggerFrames = 5;
    
    // let playerState = "run"
    
    const spriteAnimations = []
    const animationStates = [
        { name: "idle", frames: 7 },
        { name: "jump", frames: 7 },
        { name: "fall", frames: 7 },
        { name: "run", frames: 9 },
        { name: "dizzy", frames: 11 },
        { name: "sit", frames: 5 },
        { name: "roll", frames: 7 },
        { name: "bite", frames: 7 },
        { name: "ko", frames: 12 },
        { name: "getHit", frames: 4 },
    ]
    
    animationStates.forEach((state, i) => {
        let frames = {
            loc: [],
        }
        for (let j=0; j<state.frames; j++) {
            let positionX = j*spriteWidth;
            let positionY = i*spriteHeight;
            frames.loc.push({
                x: positionX,
                y: positionY
            })
        }
        spriteAnimations[state.name] = frames;
    })
    
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        
        ctx.beginPath();
        ctx.arc(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 300, 0, 2 * Math.PI);
        ctx.fillStyle = bg;
        ctx.fill();

        let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    
        let frameX = spriteWidth * position
        let frameY = spriteAnimations[playerState].loc[position].y
    
        ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
        gameFrame++;
        requestAnimationFrame(animate);
    }
    
    animate()
  }, [playerState]);

  // JSX
  return (
    <div className='container my_loader'>
      
      <div style={{position: "absolute", top: "2%"}}>
        <div style={{transform: "scale(0.5)", transformOrigin: '0, 0', marginBottom:0}}>
          {import.meta.env.VITE_APPLICATION === "ApurvChatur" ? 
            <div className="loadingio-spinner">
              <div className="ldio">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div> </div>
              </div>
            </div> 
            :
            import.meta.env.VITE_APPLICATION === "SofieBerkin" ? 
            <div className="loadingio-spinner">
              <div className="ldio">
                <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
              </div>
            </div>
            :
            import.meta.env.VITE_APPLICATION === "AnushreeMandape" ? 
            <div className="loadingio-spinner">
              <div className="ldio">
                <div></div><div></div><div></div>
              </div>
            </div>
            : 
            "Looooading....."
          }  
        </div>
      </div>

      <canvas ref={canvasRef} style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%"}} />

      <div style={{position: "absolute", bottom: "5%"}}>
        <div style={{marginBottom: "0.5rem"}}>
          <p style={{marginTop: 0}} >Fetching Data...</p>
          <small>In the mean time play with the dog...</small>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(4 , 1fr)", gap: "0.5rem", justifyItems: "center", alignItems: "center"}} >
          <button className='btn btn-primary' onClick={() => setPlayerState("idle")} ><FaDog /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("jump")} ><GiSittingDog /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("run")} ><GiCircleSparks /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("dizzy")} ><BsFillLightningChargeFill /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("sit")} ><GiChickenLeg /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("roll")} ><BsDiscFill /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("ko")} ><FaBath /></button>
          <button className='btn btn-primary' onClick={() => setPlayerState("bite")} ><GiSittingDog /></button>

        </div>
      </div>

    </div>
  )
}

export default Loader