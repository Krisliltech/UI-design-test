import styled from "styled-components"
import { pro } from "../responsive"
import { tablet } from "../responsive"
import { mobile } from "../responsive"
import { smallMobile } from "../responsive"


const Container = styled.div``
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Topwrapper = styled.div`
    display: flex;
    padding: 25px 0;
    flex-wrap: wrap;
    ${tablet({flexDirection: "column",})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
`
const Text = styled.span`
    font-weight: 600;
    font-size: ${props=>props.type === "pay" && "23px"};
    ${pro({fontSize: `${props=>props.type === "pay" && "15px"}`})}
    ${smallMobile({fontWeight: "600", fontSize: "12px"})}
`
const Code = styled.span`
    color: lightgray;
    font-weight: 500;
    padding:12px 0 10px;
    ${smallMobile({fontWeight: "500", fontSize: "13px"})}
`
const Atmcard = styled.img`
    width:80%;
    border-radius: 6px;
`
const Right= styled.div`
    flex: 1;
`
const Imagecontainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 40px;
    ${tablet({display: "flex", justifyContent: "left"})}
    ${smallMobile({marginTop: "40px",})}
`
const Image = styled.img`
    height: 30px;
    width: 50px;
`
const Inputcontainer= styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
    font-weight: 600;
    ${tablet({flexWrap: "wrap",})}
`
const Label = styled.label`
    width: 100%;
    padding-right: ${props=>props.type === "left" && "18px"};
    ${pro({fontSize:"13px",width:"49%"})}
    ${tablet({paddingRight: "0", width: "100%"})}
`
const Input = styled.input`
    margin: 7px 100px 20px 0px;
    padding:16px;
    width: 87%;
    outline:none;
    background-color: #f7f7f7;
    border: 0.5px solid lightgrey;
    border-radius: 4px;
    display:"block";
    flex-wrap: wrap
    ${pro({width: "82%",})}
`
const Addcontainer = styled.div`
    display: flex;
    flex-direction: column
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
const Addbutton = styled.button`
    margin-top:20px;
    padding: 15px 0;
    background-color: #2386ee;
    color: white;
    border: none;
    border-radius: 4px;
    ${pro({width: "102%",})}
    ${tablet({width: "93%",})}
    ${mobile({width: "95%",})}
`
const Circle = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin-right: 5px;
    border: 0.5px solid lightgrey;
`
const Bottomwrapper = styled.div``
const Subtotal = styled.div`
    padding: 15px;
`
const Subtotal1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Bottomsubtotal1 = styled.div``
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const Button = styled.button`
    padding: 15px 30px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;    
    background-color: #2386ee;
    color: white;
    border: none;
    border-radius: 5px;
    width: 19%;
    ${pro({width: "50%"})}
    ${mobile({fontWeight: "100", fontSize: "13px"})}
    ${smallMobile({width: "30%",display: "flex", alignItems: "center", padding: "10px 0px", fontSize: "11px"})}
`
const Amount = styled.span`
    font-weight: 700;
    color: grey;
    ${smallMobile({fontWeight: "700", fontSize: "12px"})}
`
const Price= styled.div`
    font-weight: 700;
    ${smallMobile({fontWeight: "700", fontSize: "13px"})}
`
const Amounttext =styled.span``
const Amountprice =styled.span`
    padding-left: 4px;
`

const Bottomsection = () => {
    return (
        <Container>
            <Topwrapper>
                    <Left>
                        <Text type="pay">Payment Information</Text>
                        <Code>Choose your method payment</Code>
                        <Atmcard src="/images/master.jpeg"/>                    
                    </Left>
                    <Right>
                        <Imagecontainer>
                            <Image src="/images/cc-visa-brands.svg"/>
                            <Image src="/images/cc-discover-brands.svg"/>
                            <Image src="/images/cc-paypal-brands.svg"/>
                        </Imagecontainer>                 
                        <Inputcontainer>
                            <Label type="left">
                                Credit Card Number
                                <Input placeholder = "432 543 5334 2442" />
                            </Label>
                            <Label >
                                Expiration Date
                                <Input type = "date" />
                            </Label>            
                        </Inputcontainer>
                        <Inputcontainer >            
                            <Label type="left">
                                Security Code 
                                <Input type = "number" placeholder = "420"/>
                            </Label>
                            <Label >
                                Postal Code
                                <Input type = "number" placeholder = "1011" />
                            </Label> 
                        </Inputcontainer>
                        <Addcontainer>
                            <Wrapper>
                                <Circle />
                                <Text>Use this card for next time purchase</Text>
                            </Wrapper>
                            <Addbutton>Add card</Addbutton>
                        </Addcontainer>
                    </Right>               
            </Topwrapper>
             <Hr />
            <Bottomwrapper>
                <Subtotal>
                    <Subtotal1>
                        <Text>Subtotal</Text>
                        <Amount>#2,497.00</Amount>
                    </Subtotal1>
                    <Subtotal1>
                        <Text>Estimated TAX</Text>
                        <Amount>#119.64</Amount>
                    </Subtotal1>
                    <Subtotal1>
                        <Bottomsubtotal1>
                            <Text>Promotional Code:</Text>
                            <Code>Z4KXLM94</Code>
                        </Bottomsubtotal1>               
                        <Amount>#119.64</Amount>
                    </Subtotal1>
                </Subtotal>
                 <Hr />             
                 <Bottom>
                    <Button>Complete payment</Button>
                    <Price>
                        <Amounttext>Total:</Amounttext>
                        <Amountprice>#2556.64</Amountprice>
                    </Price>
                </Bottom>
            </Bottomwrapper>
        </Container>
    )
}

export default Bottomsection
