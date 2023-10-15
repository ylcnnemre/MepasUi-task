import React, { useMemo } from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap"
import "./header.scss"
import { CheckCircle, InfoCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

interface IcardItem {
  count: number,
  desc: string,
  color: string,
  icon: () => any,
  mode: "a" | "b"
}

const Header = () => {


  const cardList = useMemo<IcardItem[]>(() => {

    return [{
      count: 6523,
      desc: "Tickets Completed",
      mode : "a",
      color: "#91E444",
      icon: () => {
        return (
          <CheckCircle size={24} color='white' />
        )
      }
    },
    {
      count: 25456,
      desc: "Tickets Critical",
      color: "#F65C73",
      mode : "a",
      icon: () => {
        return (
          <InfoCircleFill size={24} color='white' />
        )
      }
    },
    {
      count: 1234,
      desc: "Tickets in Progress",
      color: "#FFCE57",
      mode : "a",
      icon: () => {
        return (
          <InfoCircleFill size={24} color='white' />
        )
      }
    },
    {
      count: 1234,
      desc: "Tickets un-assigned",
      color: "#FFCE57",
      mode : "a",
      icon: () => {
        return (
          <PlusCircleFill size={24} color='white' />
        )
      },
    },
    {
      count: 1234,
      desc: "Tickets un-assigned",
      color: "#FFCE57",
      mode : "a",
      icon: () => {
        return (
          <PlusCircleFill size={24} color='white' />
        )
      }
    },
    {
      count: 1234,
      desc: "Tickets un-assigned",
      color: "#FFCE57",
      mode :"b",
      icon: () => {
        return (
          <PlusCircleFill size={24} color='white' />
        )
      }
    }

    ]

  }, [])



  return (
    <header>
      <h5 className='text-white'>
        Dashboard
      </h5>
      <h6 className='text-white'>
        Concluded summary of every tickets are avalaible here
      </h6>

      <Row className='row_item  ' >
        {
          cardList.map((item, index) => {
            return (
              <Col md={3} className='mb-5' >
                <div className='p-4 card_item' style={{ backgroundColor: `${item.color}`,position:item.mode =="b" ? "relative" : "initial" }}  >
                  <div className='title'>
                    <p className='text-white  count '>
                      {item.count}
                    </p>
                    {item.icon()}
                  </div>
                  <p className='text-white desc'>
                    {item.desc}
                  </p>
                  {item.mode=="a" && <ProgressBar now={60} style={{ maxHeight: "7px" }} variant='info' /> }

                  {item.mode=="b" && (<div    className='progress-b'  style={{position:"absolute",bottom:0,width:"100%",left:0}} > 
                    <ProgressBar now={60} style={{ maxHeight: "5px" }} variant='info' />

                  </div>)  }
                </div>
              
              </Col>
            )
          })
        }


      </Row>

    </header>
  )
}

export default Header