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

// getFullDetail.bind(mantu, "India")();
// getFullDetail.bind(satyam, "India")();

interface Function {
  myBind(context: any, ...args: any[]): (...newArgs: any[]) => any;
}

Function.prototype.myBind = function (context: any, ...args: any[]) {
  const fn = this;
  return function (...newArgs: any[]) {
    fn.apply(context, [...args, ...newArgs]);
  };
};

let getMantuDetail = getFullDetail.myBind(mantu, "India")();
let getSatyamDetail = getFullDetail.myBind(satyam, "India")();
