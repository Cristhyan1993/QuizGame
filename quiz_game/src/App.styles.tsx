import styled, {createGlobalStyle} from 'styled-components'
import ctr_polar_pass from './Images/ctr_polar_pass.jpg' 

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}

body {
    background-image:url(${ctr_polar_pass});
    backckground-size :cover;
    margin: 0;
    padding 0 20px;
    display: flex;
    justify-context: center;
}

* {
    box-sizing: border-box;
    font-family: 'Bangers', cursive;

}`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    >p {
        color:#eee;
    }

    .score {
        color: #eee;
        font-size: 2rem;
        margin:0;
    }
    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #eee, #87f1ff);
        background-size: 100%;
        background-clip :text;
        -webkit-background-clip: text;
        -web-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color:transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px
    }`