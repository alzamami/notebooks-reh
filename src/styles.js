import styled from "styled-components";
import { Link } from "react-router-dom";
import background from './bk.jpg'
import sheetImage from './data_image_svg+xml;….svg'
import sheetBk from './sheetBk.jpg'
/* Start App */
export const ImageBk = styled.div`
 background: url(${background}) no-repeat center center fixed; 
  background-size: cover;
  min-height: 100vh;
`;
/* End App */

/* Start Notebook Section */
export const NotebookStyle = styled.div`
height: 250px;
  width: 175px;
  position: relative;
  transition: 0.4s ease-in-out;
  border-radius: 5px 15px 15px 5px;
  transform-origin: left center 0px;
  display: inline-block;
  margin: 30px;
  perspective: 800px;
  &:hover {
    transform: rotateZ(-10deg);
    .notebook-cover {
      transform: rotateY(-50deg);
      z-index: 999;
      box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const BookCover = styled.div`
 background: #abc3b5;
 position: absolute;
 margin: 10px;
  height: 250px;
  width: 175px;
  border-radius: 5px 15px 15px 5px;
  z-index: 10;
  transition: 0.5s linear;
  transform-style: preserve-3d;
  transform-origin: left center 0px;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: calc(100% + 2px);
    top: -1px;
    z-index: 100;
    border-radius: 2px;
    right: 25px;
    transition: 2s ease;
    background: linear-gradient(to right, #7ea38e 0%, #abc3b5 12%, #7ea38e 25%, #abc3b5 37%, #7ea38e 50%, #abc3b5 62%, #7ea38e 75%, #abc3b5 87%, #7ea38e 100%);
  }
`;
export const NoteSkin = styled.div`
  height: 50px;
  background: #e8e8e0;
  margin-top: 80px;
  padding: 15px;
  font-size: 12px;
  position: relative;
  z-index: 10;
  color: #222;
  text-align: left;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    left: 0;
    bottom: 0;
    background: #000;
  }
`;
export const NotePage = styled.div`
height: 100%;
  width: 175px;
 margin: 10px;
  position: absolute;
  background-color: #fbfae8;
  z-index: 0;
  border-radius: 5px 16px 16px 5px;
  overflow: hidden;
  background: linear-gradient(to bottom, #fbfae8 9px, #e4e4e4 1px);
    background-size: 100% 10px;
`;
export const NoteLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    :hover {
        color: #000
    }
`
export const SearchBar = styled.input`  
        width: 80%;
        margin: 0px 10%;
        padding: 12px 24px;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        color: #575756;
        background-color: transparent;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 50px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        ::placeholder {
            color: color(#575756 a(0.8));
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }
        :hover,
        :focus {
            padding: 12px 0;
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            border-radius: 0;
            background-position: 100% center;
        }
`
/* End Notebook Section */

/* Start Netbook Details */
export const SheetImageBk = styled.div `
 background: url(${sheetBk}) no-repeat center center fixed; 
  background-size: cover;
`;
export const SheetWrap = styled.div `
  display: flex;
  padding: 15px;
  justify-content: center;
`;
export const Sheet = styled.div `
 background-color: #fff;
  background-image: url(${sheetImage});
  background-repeat: repeat-y;
  font-family: cursive;
  font-size: 20px;
  min-height: 91.4vh;
  padding-left: 100px;
  width: 680px;
  line-height: 2;
  h3 {
    margin-bottom: 0px;
    margin-top: 2px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    width: 100%;
    margin-bottom: 24px;
  }
  @media (min-width: 900px) {
  p {
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
  }
  }
`;