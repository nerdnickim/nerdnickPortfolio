import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    
    *{
        box-sizing: border-box;
    }
    body{
        font-size: 14px;
        
        font-family: 'Noto Sans KR', sans-serif;
        
    }
    
    a{
        text-decoration: none;
        color:black;
        outline: none;
    }
    input:focus{
        outline:none;
    }
    button{
        border: none;
        background:inherit;
        cursor:pointer;

    }
    button:focus{
        outline:none;
    }

    #root{
        width:100%;
        height:100%;
    }

    html{
        overflow:scroll;
    }
    
`;
