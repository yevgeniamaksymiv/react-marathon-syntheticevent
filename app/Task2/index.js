import React, { Component } from "react";

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: "hidden text 1",
        },
        {
          id: 2,
          text: "hidden text 2",
        },
        {
          id: 3,
          text: "hidden text 3",
        },
      ],
      text: "",
    };
  }

  render() {
    const { list, text } = this.state;
    return (
      <div>
        <ul>
          {list.map((item) => (
            <li
                  key={item.id}
                  className="element"
                  onMouseOver={() => { this.setState({ text: item.text }) }}
                  onMouseOut={() => { this.setState({ text: '' }) }}
            >
              id - {item.id}
            </li>
          ))}
        </ul>
        <div className="text">{text}</div>
      </div>
    );
  }
}
