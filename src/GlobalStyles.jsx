import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*{
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    font-size: 14px;
    margin: 0;
    background-color: #0a0a0a;
    color: #fff;
  }

  body::-webkit-scrollbar {
    display:none;
  }

  a{
    text-decoration: none;
  }

  .mastodon-link{
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mastodon-link img{
    width: 25px;
    height: 25px;
  }
`

export default GlobalStyles;