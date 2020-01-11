import React from "react";
import "../styles.css";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      map2: undefined,
      denominition: [2000, 500, 100, 50, 20, 10, 5, 2, 1]
    };
  }

  setValues = event => {
    event.preventDefault();
    let a = this.state.inputValue;
    let inputv = event.target.value;
    a = a.concat(inputv);
    if (a.length < 11) {
      this.setState({ inputValue: a, map2: undefined });
    }
  };

  clearValues = event => {
    event.preventDefault();
    this.setState({ inputValue: "", map2: undefined });
  };
  deleteValue = event => {
    event.preventDefault();
    let v = this.state.inputValue;
    let modifiedval = v.substr(0, v.length - 1);
    this.setState({ inputValue: modifiedval, map2: undefined });
  };
  convertCurrency = event => {
    //  console.log(Object.keys(this.state.map2).length);

    event.preventDefault();
    if (this.state.inputValue.length !== 0) {
      // this.setState({ inputValue: "", map2: undefined });

      let inpValue = parseInt(this.state.inputValue);

      let temp = 0;

      let denomin = this.state.denominition;
      temp = inpValue;
      let map1 = new Map();
      for (let i of denomin) {
        if (temp !== 0) {
          let divi = Math.floor(temp / i);
          let modu = temp % i;
          if (modu !== 0) {
            temp = temp % i;
            map1.set(i, divi);
            this.setState({ map2: map1 });
          } else {
            if (divi !== 0) {
              map1.set(i, divi);

              temp = 0;
              this.setState({ map2: map1 });

              continue;
            }
          }
        } else {
          map1.set(i, 0);
          this.setState({ map2: map1 });
        }
      }
    }
  };

  isEmpty = obj => {
    return Object.keys(obj).length === 0;
  };

  getIterate = () => {
    var values = [];
    for (let [key, value] of this.state.map2) {
      values.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      );
    }
    return values;
  };

  render() {
    return (
      <div>
        <div className="left-side">
          <form>
            <table>
              <tbody>
                <tr>
                  <td colSpan="4">
                    <input
                      type="text"
                      name="display"
                      id="display"
                      value={this.state.inputValue}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="button"
                      name="one"
                      onClick={this.setValues}
                      value="1"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="two"
                      onClick={this.setValues}
                      value="2"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="three"
                      onClick={this.setValues}
                      value="3"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="button"
                      name="four"
                      onClick={this.setValues}
                      value="4"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="five"
                      onClick={this.setValues}
                      value="5"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="six"
                      onClick={this.setValues}
                      value="6"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="button"
                      name="seven"
                      onClick={this.setValues}
                      value="7"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="eight"
                      onClick={this.setValues}
                      value="8"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="nine"
                      onClick={this.setValues}
                      value="9"
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <input
                      type="button"
                      name="zero"
                      onClick={this.setValues}
                      value="0"
                    />
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <input
                      type="button"
                      id="clear"
                      name="Enter"
                      onClick={this.convertCurrency}
                      value="Enter"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      onClick={this.deleteValue}
                      name="Delete"
                      value="Delete"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      name="Refresh"
                      onClick={this.clearValues}
                      value="Refresh"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="right-side">
          {this.state.map2 !== undefined ? (
            <table border="1">
              <tbody>
                <tr>
                  <th>denominition</th>
                  <th>count</th>
                </tr>
                {this.getIterate()}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Calculator;
