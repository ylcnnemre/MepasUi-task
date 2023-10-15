import React, { useMemo } from 'react'
import "./performance.scss"
import { Row, Col, Button } from "react-bootstrap"

interface Idata {
  name: string,
  location: string,
  ticket: number,
  desc: string,
  color : string,
  status: string
  buttonVariant : "outline-primary" |"outline-warning" |"outline-danger" |"outline-success"
}


const Performance = () => {

  const data = useMemo<Idata[]>(() => {
    return [{
      name: "Eagle",
      location: "New Jersey, UK",
      color : "#673AB7",
      ticket: 32655,
      desc: "Doing fentastic work every day",
      status: "Take Up",
      buttonVariant : "outline-primary"
    },
    {
      name: "MarsXspace",
      color : "#11A0F8",
      location: "New Jersey, UK",
      ticket: 32655,
      desc: "Doing fentastic work every day",
      status: "Avarage",
      buttonVariant : "outline-warning"
    },
    {
      name: "ChinMayaar",
      location: "New Jersey, UK",
      ticket: 32655,
      color : "#FFB803",
      desc: "Doing fentastic work every day",
      status: "Critical",
      buttonVariant : "outline-danger"
    },
    {
      name: "Foogle",
      location: "New Jersey, UK",
      ticket: 32655,
      color : "#EC4061",
      desc: "Doing fentastic work every day",
      status: "Closed",
      buttonVariant : "outline-success"
    },
    {
      color : "#67CD2E",
      name: "OpenFiled",
      location: "New Jersey, UK",
      ticket: 32655,
      desc: "Doing fentastic work every day",
      status: "Closed",
      buttonVariant : "outline-success"
    }]
  }, [])


  return (
    <div className='performance_wrapper'>
      <h3 className='title'>
        Total Number of tickets : This Year <b style={{ color: "black" }}> 256015</b> , This Month <b style={{ color: "black" }}>46523</b>
      </h3>
      <div className='top_performance_list bg-white p-4'>
        <h5 className='mb-4' >
          Top Performance
        </h5>
        <Row>
          {
            data.map((item, index) => {
              return (
                <React.Fragment key={index}  >
                  <Col md={4} className='mb-4'>
                    <div className='d-flex list_item align-items-center'>
                      <div className='profile_badge d-flex justify-content-center align-items-center text-white ' style={{backgroundColor:item.color}} >
                        {item.name.charAt(0)}
                      </div>
                      <div className='d-flex flex-column name_field ms-2 ' >
                        <p className=' fw-bold '>
                          {item.name}
                        </p>
                        <p>
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className='d-flex flex-column count_item'>
                      <p className='fw-bold' >
                        {item.ticket}
                      </p>
                      <p className='text-secondary'>
                        Tickets
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <p className='text-secondary fs-4'>
                      Doing fentastic every day
                    </p>
                  </Col>
                  <Col md={2}>
                    <Button variant={item.buttonVariant} className='rounded' >
                      {item.status}
                    </Button>
                  </Col>
                </React.Fragment>




              )
            })
          }
        </Row>

      </div>
    </div>
  )
}

export default Performance