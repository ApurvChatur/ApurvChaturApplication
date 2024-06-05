import React from 'react';
import Header from '../../../component/aHeader';
import "./index.css";
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader';
import parse from 'html-react-parser';
import { FaLink, FaGithub, FaEye, FaShieldAlt } from "react-icons/fa";
import ImageSliderComponent from './component/aImageSliderComponent';


const PortfolioCardRetrievePageComponent = ({ ReduxUltimate, Redux }) => {
  return (
		<React.Fragment>
			{ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Portfolio"} />
          
          <section id='portfolio-card-single'>
            <div className='container portfolio-card-single__container' >
              <div className='portfolio-card-single__me' >
                <div className='portfolio-card-single__me-image' >
                  <img src={Redux.state.ReceivedObject?.PortfolioCardRetrieve?.image?.url} alt="" />
                </div>
              </div>

              <div className='portfolio-card-single__content' >
                <h2>{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.title}</h2>
                <h4 style={{marginTop: "0.5em"}} className="text-light" >{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.subtitle}</h4>

                {/* <p>{(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.description || "")}</p> */}
                <p>{parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.description || "")}</p>

                <div className='portfolio__item-cta' >
                  {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links &&
                    Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links.map((each, index) => {
                      return (
                        <a 
                          href={each.url} key={index} target="_blank" rel='noreferrer' 
													style={{padding: '0.4rem 0.8rem'}}
                          className='btn btn-primary'
                        >
                          {
                            each.title === 'Visit Application' ? (
                              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FaEye style={{marginRight: '0.5rem'}} /> Visit Application
                              </div>
                            ) :
                            each.title === "Visit Admin" ? (
                              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FaShieldAlt style={{marginRight: '0.5rem'}} /> Visit Admin
                              </div>
                            ) :
                            each.title === "Code" ? (
                              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FaGithub style={{marginRight: '0.5rem'}} /> Code
                              </div>
                            ) : (
                              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FaLink style={{marginRight: '0.5rem'}} /> {each.title}
                              </div>
                            )
                          }
                        </a>
                      )
                    })
                  }
                </div>	
              </div>
            </div>  

            {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.portfolioImages &&
              Redux.state.ReceivedObject?.PortfolioCardRetrieve?.portfolioImages?.length ?
                <div style={{ marginBlock: "20px" }}>
                  <div className='container portfolio-card-single__more' style={{ marginBottom: "10px" }} >
                    <h3>Details</h3>
                  </div>
                  <ImageSliderComponent Redux={Redux} />
                </div>
                : null
            }

            {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.detail &&
              <div className='container portfolio-card-single__more' >
                <h3>Details</h3>
                <div className='rich-text' >
                  {/* {(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.detail || "")} */}
                  {parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.detail || "")}
                </div>
              </div>
            }
              
            {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references.length > 0 &&
              <div className='container portfolio-card-single__more' >
                <h3>References</h3>
                <p>
                  {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references.map((each, index) => {
                      return (
                        <React.Fragment key={index}>
                          {each.title} :  <a href={each.url} style={{paddingLeft: "2em"}} target='_blank' rel="noreferrer" >{each.url}</a> <br/>
                        </React.Fragment>
                      )
                    })
                  }
                </p>
              </div>
            }
          </section>
        </React.Fragment>
      }
		</React.Fragment>
  )
}

export default PortfolioCardRetrievePageComponent