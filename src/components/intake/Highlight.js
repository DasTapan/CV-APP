import React, { Component } from "react";

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const [...items] = this.props.items;
    const { deleteItem } = this.props;

    return (
      <div className="highlight">
        {items.map((item) => {
          return (
            <div className="highlight-item" key={item.id}>
              <span>{item.text}</span>
              <button
                type="button"
                onClick={() => {
                  deleteItem(item.id);
                }}
              ></button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Highlight;
