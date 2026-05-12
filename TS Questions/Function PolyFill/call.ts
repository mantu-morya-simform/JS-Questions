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

function getFullDetail(this: nameObj, country: string) {
  console.log(
    `Name:${this.name}, City:${this.city}, State: ${this.state}, Country:${country}`,
  );
}

// getFullDetail.call(mantu, "India");
// getFullDetail.call(satyam, "India");

interface Function {
  myCall(context: any, ...args: any[]): any;
}

Function.prototype.myCall = function (context: any, ...args: any[]) {
  const fn = Symbol("fn");
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

getFullDetail.myCall(mantu, "India");
getFullDetail.myCall(satyam, "India");
