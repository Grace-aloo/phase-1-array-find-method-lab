// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  function superbowlWin(record) {
    for (let element of record){
        if (element.result === "W")
          return element.year
    }
    //return record.find((el) => {
    //for( let result of record ){
     //   if (el.result === "W"){
      //      return el.year
        //    }
    
      //  }})
    
    }
    


record.find(superbowlWin(record));

    // record.find(superbowlWin)
    // return record.filter(element => {
    //     return element.result === "W"
    //     // if (element.result === "L") {
    //     //     console.log(element);
    //     // }
    // })

