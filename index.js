fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const number = 100;

    //============Red Box================
    const redImg = document.getElementById("red-img");
    redImg.src = data[0].icon;

    const redTitle = document.getElementById("red-title");
    redTitle.innerHTML = data[0].category;

    const redScore = document.getElementById("red-score");
    redScore.innerHTML = ` ${data[0].score}<span class="number-opacity"> /${number}</span>`;

    //============Yellow Box==============

    const yellowImg = document.getElementById("yellow-img");
    yellowImg.src = data[1].icon;

    const yellowTitle = document.getElementById("yellow-title");
    yellowTitle.innerHTML = data[1].category;

    const yellowScore = document.getElementById("yellow-score");
    yellowScore.innerHTML = `${data[1].score}<span class="number-opacity"> /${number}</span>`;

    // ============Green Box================

    const greenImg = document.getElementById("green-img");
    greenImg.src = data[2].icon;

    const greenTitle = document.getElementById("green-title");
    greenTitle.innerHTML = data[2].category;

    const greenScore = document.getElementById("green-score");
    greenScore.innerHTML = `${data[2].score}<span class="number-opacity"> /${number}</span>`;

    // ===============Purple Box===============

    const purpleImg = document.getElementById("purple-img");
    purpleImg.src = data[3].icon;

    const purpleTitle = document.getElementById("purple-title");
    purpleTitle.innerHTML = data[3].category;

    const purpleScore = document.getElementById("purple-score");
    purpleScore.innerHTML = `${data[3].score}<span class="number-opacity"> /${number}</span>`;

    let calcNum = 0;

    const calculateScore = (num) => {
      let count = 0;
      for (var i = 0; i < num.length; i++) {
        count += num[i].score;
      }
      return count;
    };
    calcNum = calculateScore(data);

    const bigNumber = document.getElementById("big-number");
    bigNumber.innerHTML = Math.trunc(calcNum / 4);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

// here 2
