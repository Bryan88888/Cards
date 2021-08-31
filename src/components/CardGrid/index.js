import React from 'react';
import './index.css';

const users = [
  {
    name: "Bob",
    title: "Wants to be a Basketball Player",
    picture:
      "https://th.bing.com/th/id/OIP._rhG4tersaE8COU9Go3FvAHaLI?pid=ImgDet&rs=1",
  },
  {
    name: "Joe",
    title: "Nuclear Physicist",
    picture:
      "https://th.bing.com/th/id/OIP.R_nWiS36kfykxYOTg5cc-wHaEK?pid=ImgDet&rs=1",
  },
  {
    name: "Anna",
    title: "Lawyer",
    picture:
      "https://th.bing.com/th/id/OIP.wpItoX0rCB1-gU7CE_81FgHaNK?w=182&h=324&c=7&o=5&pid=1.7",
  },
  {
    name: "Tabitha",
    title: "retired(used to be an artist)",
    picture:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Jake",
    title: "scientist",
    picture:
      "https://th.bing.com/th/id/OIP.A2vAHqSIwTbJGw9I6dObEwHaDt?pid=ImgDet&rs=1",
  },
  {
    name: "Ella",
    title: "Wants to be a doctor",
    picture:
      "https://th.bing.com/th/id/OIP.ghnyWIu_Rt9hUPtNEvu-zQHaEK?pid=ImgDet&rs=1",
  },
  {
    name: "Dylan",
    title: "Unemployed",
    picture:
      "https://th.bing.com/th/id/OIP.PajWD5hfOe4r5Be__58HIAHaE6?pid=ImgDet&rs=1",
  },
  {
    name: "Alexander",
    title: "Construction Worker",
    picture:
      "https://th.bing.com/th/id/OIP.VL7qQ4UWT_8oZQeias0q0wHaI5?pid=ImgDet&rs=1",
  },
  {
    name: "Robin",
    title: "CEO",
    picture:
      "https://th.bing.com/th/id/OIP.cq4W8ncmB64nMMNg3SgVngHaEo?pid=ImgDet&rs=1",
  },
];

function CardGrid() {
    return (
        <div className="cards-container">
            {users.map((v, i) => (
                <Card {...v} key={i} />
            ))}
        </div>
    )
}

const Card = ({ name, title, picture }) => {
    return (
      <div className="card">
        <div className="picture-container">
          <img src={picture} alt="person" />
        </div>
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
        </div>
      </div>
    );
};


export default CardGrid;