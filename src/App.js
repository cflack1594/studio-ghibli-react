import React from "react";
import "./App.css";
import { ControlledTable } from "./components";
import { getStudioGhibliData } from "./API";

export class App extends React.Component {
  state = {
    activeDataKey: "films",
    activeData: [],
    dataKeys: {
      films: ["title", "director", "producer"],
      people: ["name", "age", "eye_color"],
      locations: ["name", "climate", "terrain"],
      species: ["name", "classification", "hair_colors"],
      vehicles: ["name", "description", "length"],
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const ret = await getStudioGhibliData(this.state.activeDataKey);
      this.setState({ activeData: ret });
    } catch (error) {
      console.error(error);
    }
  };

  updateActiveData = (clickedButton) => {
    console.log(clickedButton);
    this.setState({ activeDataKey: clickedButton });
    this.getData();
  };

  render() {
    return (
      <div className="App">
        <ControlledTable
          dataToDisplay={this.state.activeData}
          dataKeys={this.state.dataKeys}
          updateData={this.updateActiveData}
        />
      </div>
    );
  }
}
