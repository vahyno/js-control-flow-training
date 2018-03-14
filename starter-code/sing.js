console.log("sing.js loaded");


let numberOfBottles = window.prompt('How many verses do You want to hear?')

for (numberOfBottles; numberOfBottles>0; numberOfBottles-=1){
  if (numberOfBottles>2){
    console.log(`${numberOfBottles} bottles of beer on the wall,`);
    console.log(`${numberOfBottles} bottles of beer!`);
    console.log('Take one down and pass it around,');
    console.log(`${numberOfBottles-1} bottles of beer on the wall!`);
  }else if(numberOfBottles>1){
    console.log(`${numberOfBottles} bottles of beer on the wall,`);
    console.log(`${numberOfBottles} bottles of beer!`);
    console.log('Take one down and pass it around,');
    console.log(`${numberOfBottles-1} bottle of beer on the wall!`);
  } else if (numberOfBottles <= 1) {
    console.log(`${numberOfBottles} bottle of beer on the wall,`);
    console.log(`${numberOfBottles} bottle of beer!`);
    console.log('Take one down and pass it around,');
    console.log(`No more bottles of beer on the wall!`);
  }
  console.log('------------------------------------------------------')
}
