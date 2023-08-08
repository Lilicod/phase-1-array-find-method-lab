// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(record) {
    const wins = record.find(rec => rec.result === "W");
    if (wins) {
      console.log("They won in ")
      return wins.year;
    } 
    else return undefined;
  }

  console.log(superbowlWin(record)); 
  