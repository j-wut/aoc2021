import testInput from "./input.json";

// part 1
function part1(input) {
  let increases = 0;
  input.forEach((value,index)=>{
    if(index && value>input[index-1])
      increases++;
  });
  return increases;
}
console.log(part1(testInput));

// part 2
function part2(input) {
  //did some convoluted math here to reduce access of each input by 1... although now we're keeping a running sum
  let sum = 0;
  return part1(input.map((value,index)=>{
    if(index+2>=input.length)
      return 0;
    if(index === 0){
      sum = value + input[index+1] + input[index+2];
      return sum;
    } else {
      sum-=input[index-1];
      sum+=input[index+2];
      return sum;
    }
  }));
}
console.log(part2(testInput));