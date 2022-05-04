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
border-radius: 3px;
background: transparent;
cursor:pointer;

    color: ${(props)=>(props.type==="primary"? "#ffffff":"")};
    background-color: ${(props)=>(props.type==="primary"? "#2490fe":"")};
    border: ${(props)=>(props.type==="primary"? "1px solid #2490fe":"")};

    color: ${(props)=>(props.type==="default"? "#000000":"")};
    border: ${(props)=>(props.type==="default"? "1px solid #c0c0c0":"")};

    border:${(props)=>(props.type==="dashed"? "1px dashed #c0c0c0":"")};

    border: ${(props)=>(props.type==="text"? "none":"")};

    color: ${(props)=>(props.type==="link"? "#1578c9":"")};
`;

export { Button, Div };
