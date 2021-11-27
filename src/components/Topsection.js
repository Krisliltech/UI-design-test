import styled from "styled-components"
import { mobile } from "../responsive"
import { smallMobile } from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
    ${mobile({justifyContent: "spaceEvenly",})}
`
const Right = styled.h5`
    padding-right: 40px;
    font-size: 15px;
    ${mobile({paddingRight: "10px", fontSize:"11px",})}
`
const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({display: "none",})}
`
const Image = styled.img``
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Topsection = () => {
    return (
        <Container>
           <Wrapper>
               <Right>TRIPS</Right>
               <Right>RECENTLY VIEWED</Right>
               <Right>BOOKINGS</Right>
               <Circle>
                    <Image src="/images/user-circle-regular.svg"/>
               </Circle>
           </Wrapper>
           <Hr />    
        </Container>
    )
}

export default Topsection
