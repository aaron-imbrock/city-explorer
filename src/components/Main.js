import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
          <>
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
            <button onClick={this.getLocation}>Explore!</button>
            {this.state.location.place_id && 
              <h2>The city is: {this.state.location.display_name}</h2>
            }
          </>
        )
      }
    }

export default Main; 