import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar { display: none; }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  input {
  ::placeholder {
    color: #d6d6d6;
  }
  }
  textarea{
  ::placeholder {
    color: #d6d6d6;
  }
  }
  .rdn-control{
  border: none;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  width: 90px;
  padding-right: 30px;
  }
  .rdn-drop{
  border: none;
  width: 130px;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform: translateX(-50px);
  }
`;
export default GlobalStyle;
