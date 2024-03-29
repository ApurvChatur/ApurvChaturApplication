import React from 'react'
import './index.css';
import { BsBuilding } from 'react-icons/bs'
import { FaAward } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from "react-icons/ai";
import parse from 'html-react-parser';


const AboutComponent = ({Redux}) => {
  // Variables
	const object = Redux?.state?.ReceivedObject?.Retrieve?.AboutRetrieve

	// JSX
  return (
    <section id='about'>
      <h5>{object.title}</h5>
      <h2>{object.subtitle}</h2>

      <div className='container about__container' >
        <div className='about__me' >
          <div className='about__me-image' >
            <img src={object.image.url} alt="about" />
          </div>
        </div>

        <div className='about__content' >
          <div className="about__cards">
            {object.cards &&
              object.cards.map((each, index) => {
              return (
                <article className='about__card' key={index} >
                  {
										each.icon.toLowerCase() === "award" ? <FaAward className='about__icon' ></FaAward> :
										each.icon.toLowerCase() === "project" ? <AiOutlineFundProjectionScreen className='about__icon' ></AiOutlineFundProjectionScreen> :
										each.icon.toLowerCase() === "company" ? <BsBuilding className='about__icon' ></BsBuilding> :
										each.icon.toLowerCase() === "experience" ? <AiOutlineUserAdd className='about__icon' ></AiOutlineUserAdd> : <BiAtom className='about__icon' ></BiAtom>
									}
                  <h5>{each.title}</h5>
                  <small>{each.subtitle}</small>
                </article>
              )
            })}
          </div>

          {/* <p>{object.description}</p> */}
          <div>{parse(object.description)}</div>

          <a href='#event' className='btn' style={{ marginRight: "1.2rem" }} >Check Events</a>
          <a href='#contact' className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>            
    </section>
  )
}

export default AboutComponent