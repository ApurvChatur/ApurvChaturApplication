import React from 'react';
import Header from '../../../component/aHeader';
import "./index.css";
import Loader from 'src/love/cComponent/aGlobalComponent/component/aLoader';
import parse from 'html-react-parser';


const BlogCardRetrievePageComponent = ({ ReduxUltimate, Redux }) => {
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject.Loading ? <Loader /> :
        <React.Fragment>
          <Header heading={"Blog"} />
          
          <section id='about'>
            <div className='container blog-card-single__container' >
              <div className='blog-card-single__me' >
                <div className='blog-card-single__me-image' >
                  <img src={Redux.state.ReceivedObject?.BlogCardRetrieve?.image?.url} alt="" />
                </div>
              </div>


              <div className='blog-card-single__content' >
                <h2>{Redux.state.ReceivedObject?.BlogCardRetrieve?.title}</h2>
                <h4 style={{marginTop: "0.5em"}} className='text-light' >{Redux.state.ReceivedObject?.BlogCardRetrieve?.subtitle}</h4>

                <p>{(Redux.state.ReceivedObject?.BlogCardRetrieve?.description || "")}</p>
                {/* <p>{parse(Redux.state.ReceivedObject?.BlogCardRetrieve?.description || "")}</p> */}

              </div>
            </div>  

            {Redux.state.ReceivedObject?.BlogCardRetrieve?.detail &&
              <div className='container portfolio-card-single__more' >
                <h3>Details</h3>
                <div className='rich-text' >
                  {(Redux.state.ReceivedObject?.BlogCardRetrieve?.detail || "")}
                  {/* {parse(Redux.state.ReceivedObject?.BlogCardRetrieve?.detail || "")} */}
                </div>
              </div>
            }
              
          </section>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default BlogCardRetrievePageComponent