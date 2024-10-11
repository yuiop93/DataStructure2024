var readline = require("readline-sync");

// Generate 4 digit randomly
var Ans = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // permutation
for (var i = 0; i < 4; i++) {
  var rand = Math.floor(Math.random() * (10 - i)) + i; //避免重複
  var temp = Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;    //洗牌
}

Ans = Ans.slice(0, 4); // 只取前 4 個作為正確答案

var countA = 0;//計算玩家輸入中有多少個數字既正確又位置正確的
while (countA !== 4) {
  do {
    var G = readline.questionInt("Please input 4 digits? ");
  } while (G < 1000 || G >= 10000); // 檢查輸入是否是 4 位數

  var Gstr = G.toString();

  countA = 0;
  var countB = 0;

  for (var i = 0; i < 4; i++) {
    if (Ans[i] == Gstr[i]) {
      countA++;
    } else {
      for (var j = 0; j < 4; j++) {
        if (Ans[i] == Gstr[j]) {
          countB++;
        }
      }
    }
  }

  console.log(countA + "A" + countB + "B");
}

console.log("Win!");
