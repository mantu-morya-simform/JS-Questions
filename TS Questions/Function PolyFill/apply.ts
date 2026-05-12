interface nameObj {
  id: number;
  name: string;
  city: string;
  state: string;
}

const mantu: nameObj = {
  id: 5,
  name: "Mantu Kumar Morya",
  city: "Jaipur",
  state: "Rajsthan",
};

const satyam: nameObj = {
  id: 6,
  name: "Satyam Singh",
  city: "jamsheadpur",
  state: "Jharkhand",
};

function getFullDetail(this: nameObj, data: any[]) {
  console.log(
    `Name:${this.name}, City:${this.city}, State: ${this.state}, Country:${data[0]}`,
  );
}

// getFullDetail.apply(mantu, "India");
// getFullDetail.apply(satyam, "India");

interface Function {
  myApply(context: any, args: any[]): any;
}

Function.prototype.myApply = function (context: any, args: any[]) {
  const fn = Symbol("fn");
  context[fn] = this;
  const result = context[fn](args);
  delete context[fn];
  return result;
};

getFullDetail.myApply(mantu, ["India"]);
getFullDetail.myApply(satyam, ["India"]);
