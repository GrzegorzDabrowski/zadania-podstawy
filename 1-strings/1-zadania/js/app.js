// {
//   const text = "Koty to fajne zwierzaki";
//   const words = text.split(" ");
//   console.log(`Liczba wyrazów: ${words.length}`);
// }

// {
//   const name = prompt("Podaj swoje imię:");

//   if (name) {
//     const fix = name[0].toUpperCase() + name.substr(1);
//     alert(`Witaj ${fix}!`);
//   }
// }

// {
//   const text = "Ala ma kota";

//   if (text.includes("kot")) {
//     console.log(`Zdanie zawiera słowo kot`);
//   } else {
//     console.log(`Zdanie nie zawiera słowa kot`);
//   }
// }

// {
//   const text = "Ala ma kota";
//   console.log(text.toLowerCase());
//   console.log(text.toUpperCase());

//   let str = "";
//   for (let i = 0; i < text.length; i++) {
//     if (i % 2 === 0) {
//       str += text[i].toUpperCase();
//     } else {
//       str += text[i].toLowerCase();
//     }
//   }
//   console.log(str);

//   const newText = [...text]
//     .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
//     .join("");

//   console.log(newText);

//   console.log(text.replace("Ala", "Grześ"));
// }

// {
//   const tab = [];
//   for (let i = 0; i < 5; i++) {
//     let min = 5;
//     let max = 99999;
//     tab.push(Math.floor(Math.random() * (max - min + 1) + min));
//   }

//   tab.forEach((el) => {
//     console.log(String(el).padStart(10, "."));
//   });
// }
