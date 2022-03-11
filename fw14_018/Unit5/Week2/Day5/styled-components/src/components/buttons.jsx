import styledComponents from "styled-components";

const Div = styledComponents.div`
border: 1px solid #c0c0c0;
width: 500px;
margin:50px auto;
padding:20px;
text-align: justify;

`;

const Button = styledComponents.button`
color: black;
padding: 8px 17px;
font-size: 16px;
font-weight: 700; 
margin: 5px;
border:none;
background: transparent;
cursor:pointer;
&:nth-child(1){
    color: #ffffff;
    background-color: #0303ffaf;
}
&:nth-child(2){
    color: black;
    border: 1px solid #c0c0c0;
}
&:nth-child(3){
    border: 1px dashed #c0c0c0;
}
&:nth-child(4){
    border:none;
}
&:nth-child(5){
    color: #5168ff;
}

&:hover{
    color:red;
}
`;

export { Button, Div };
