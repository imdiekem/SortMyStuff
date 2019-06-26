import React, { Component } from "react";

import SortedList from "../../components/SortedList";

import { StyledSorter } from "./styled-components";

class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: [
        { shirts: 2 },
        { pants: 5 },
        { socks: 10 },
        { danties: 7 },
        { shirts: 9 },
        { socks: 9 },
        { danties: 2 },
        { danties: 13 },
        { ascots: 3 }
      ],
      merged: false
    };

    this.mergeStuff = this.mergeStuff.bind(this);
    this.sortStuffDescending = this.sortStuffDescending.bind(this);
    this.sortStuffAscending = this.sortStuffAscending.bind(this);
  }

  mergeStuff() {
    const stuffCopy = [...this.state.stuff];
    const stuffMerged = stuffCopy.reduce((prev, curr) => {
      const currKey = Object.keys(curr)[0];
      const existingIndex = prev.findIndex(item =>
        item.hasOwnProperty(currKey)
      );
      let prevCopy = [...prev];

      if (existingIndex !== -1) {
        prevCopy[existingIndex][currKey] =
          prevCopy[existingIndex][currKey] + curr[currKey];

        return prevCopy;
      }

      return [...prev, curr];
    }, []);

    this.setState({
      stuff: stuffMerged,
      merged: true
    });
  }

  sortStuffDescending() {
    const mergedDupesCopy = [...this.state.stuff];
    const descendingStuff = mergedDupesCopy.sort((a, b) => {
      const aKey = Object.keys(a);
      const bKey = Object.keys(b);
      return b[bKey] - a[aKey];
    });

    this.setState({
      stuff: descendingStuff
    });
  }

  sortStuffAscending() {
    const mergedDupesCopy = [...this.state.stuff];
    const ascendingStuff = mergedDupesCopy.sort((a, b) => {
      const aKey = Object.keys(a);
      const bKey = Object.keys(b);
      return a[aKey] - b[bKey];
    });

    this.setState({
      stuff: ascendingStuff
    });
  }

  render() {
    const { stuff, merged } = this.state;
    return (
      <StyledSorter>
        <h1>
          Sort <span>My</span> Stuff
        </h1>
        {!merged && (
          <p>
            I've got too much stuff. I tried to separate the stuff into piles by
            type but I have short term memory problems and I'm pretty sure I
            repeated some types. Also, I can't read and don't know how to use a
            mouse. Can you help me consolidate the dupe pile types? Just push
            that button.
          </p>
        )}
        {merged && (
          <p>
            K, cool. My mom also told me to sort the piles in order from most to
            least items... or was it least to most? mmmm, can't remember. Just
            push those buttons and figure out which looks better.
          </p>
        )}
        <SortedList
          merged={merged}
          list={stuff}
          sortStuffDescending={this.sortStuffDescending}
          sortStuffAscending={this.sortStuffAscending}
          mergeStuff={this.mergeStuff}
        />
      </StyledSorter>
    );
  }
}

export default Sorter;
