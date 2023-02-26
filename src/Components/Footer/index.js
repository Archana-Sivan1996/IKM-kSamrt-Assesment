import React from 'react'
import styled from 'styled-components'
import { BiCopyright } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap'
import './index.css'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <Row className='footer-row'>
                    <Col xs={3} sm={3} md={5}>
                        <BiCopyright />
                        2023 Company
                    </Col>
                    <Col xs={9} sm={9} md={7}>
                        <Ul>
                            <Li>
                                {'About'}
                            </Li>
                            <Li>
                                {'Terms of use'}
                            </Li>
                            <Li>
                                {'Contact'}
                            </Li>
                        </Ul>
                    </Col>
                </Row>
            </FooterDiv>
        </>
    )
}

const FooterDiv = styled.div`
background-color:grey;
color:#fff;
font-size:16px;
height:45px;
padding-top:30px;
padding-left:40px;
padding-right:40px;
padding-bottom:30px;
display:flex;
align-items:center;
position: fixed;
left:0;
bottom:0;
right:0;
`;

const Ul = styled.ul`
text-decoration:none;
float:right;
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
text-decoration:none;
list-style-type:none;
align-items:center;
padding-left:15px;
text-align:right;
cursor:pointer;`;

export default Footer