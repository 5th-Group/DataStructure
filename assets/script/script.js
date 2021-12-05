const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Variables
const input = $("#input");
const addBtn = $(".button");
const log = $(".log");
//
const inputHeap = $("#inputHeap");
const inputStone = $("#inputStone");
//
const submit = $(".submit");
//
const startBtn = $(".start");
const resetBtn = $(".reset");
// Game
const nimGame = {
  nStones: [],
  botTurn() {
    const _this = this;
    const rand = Math.floor(Math.random() * 2);
    const choose = Math.floor(Math.random() * _this.nStones.length);
    const oriStone = _this.nStones[choose].Stones;
    const chooseStone = Math.floor(Math.random() * oriStone) + 1;
    // console.log(chooseStone);
    // console.log(oriStone);
    if (rand == 0) {
      console.log("Bot turn 1: - Heap:", choose + 1);
      _this.nStones.splice(choose, 1);
      if (_this.nStones.length <= 1 && _this.nStones[choose] == 1) {
        alert("Bot won!!!");
      } else {
        _this.render();
      }
    } else {
      if (chooseStone == oriStone) {
        _this.nStones.splice(choose, 1);
        console.log(`Bot turn 2: - Heap: ${choose + 1} Stone: ${chooseStone}`);
        if (_this.nStones.length <= 1 && _this.nStones[choose] == 1) {
          alert("Bot won!!!");
        } else {
          _this.render();
        }
      } else if (chooseStone != oriStone) {
        _this.nStones[choose].Stones -= chooseStone;
        console.log(`Bot turn 3: - Heap: ${choose + 1} Stone: ${chooseStone}`);
        if (_this.nStones.length <= 1 && _this.nStones[choose] == 1) {
          alert("Bot won!!!");
        } else {
          _this.render();
        }
      }

      if (_this.nStones.length <= 1) {
        alert("Bot won!!!");
      }
      _this.render();
    }
  },
  //   Handle clicks
  handleEvent() {
    const _this = this;
    // Submit handle
    submit.onclick = () => {
      const stone = Number(inputStone.value);
      const heap = Number(inputHeap.value);
      function checkStone() {
        if (stone > 0) {
          return _this.nStones[inputHeap.value - 1].Stones;
        } else {
          return "";
        }
      }
      const oriStone = checkStone();
      //   Case 1
      if (heap > 0) {
        if (stone > 0 && stone != oriStone) {
          let choose = inputHeap.value - 1;
          _this.nStones[choose].Stones -= stone;
          console.log(
            `Player turn: - Heap: ${inputHeap.value} - Stones: ${stone}`
          );
          if (
            _this.nStones.length <= 1 &&
            _this.nStones[inputHeap.value - 1].Stones == 1
          ) {
            alert("Player won!!!");
            _this.render();
          } else {
            inputHeap.value = "";
            inputStone.value = "";
            _this.botTurn();
            _this.render();
          }
        }
        //   Case 2
        else if (stone > 0 && stone == oriStone) {
          let heap = Number(inputHeap.value);
          let choose = heap - 1;
          console.log(`Player turn: - Heap: ${heap} - Stones: ${stone}`);
          _this.nStones.splice(choose, 1);
          const checkkk = _this.nStones[inputHeap.value - 1] === 1;
          console.log(checkkk);
          if (
            _this.nStones.length <= 1 &&
            _this.nStones[inputHeap.value - 1].Stones == 1
          ) {
            alert("Player won!!!");
            _this.render();
          } else {
            inputHeap.value = "";
            inputStone.value = "";
            _this.botTurn();
            _this.render();
          }
        }
        //   Case 3
        else {
          let heap = Number(inputHeap.value);
          let choose = heap - 1;
          console.log("Player turn: - Heap:", heap);
          _this.nStones.splice(choose, 1);
          if (
            _this.nStones.length <= 1 &&
            _this.nStones[inputHeap.value - 1].Stones == 1
          ) {
            alert("Player won!!!");
            _this.render();
          } else {
            inputHeap.value = "";
            inputStone.value = "";
            _this.botTurn();
            _this.render();
          }
        }
      } else {
        alert("Please input positive number");
      }
    };
    // Reset handle
  },
  //   Render
  render() {
    const _this = this;
    // Num stone in heap
    const html = _this.nStones.map(function (elem, index) {
      return `<ul>Heap num:${index + 1} - Stones: ${elem.Stones}</ul>`;
    });
    // Stone heaps
    log.innerHTML = `<ul class="list">
    Number of Stone Heaps
     <strong>${_this.nStones.length}</strong> 
     ${html.join("")}
      </ul>`;
  },
  //   Init N
  init() {
    const _this = this;
    let n;
    addBtn.onclick = () => {
      const num = Number(input.value);
      if (!n) {
        const isDisable = false;
        if (typeof num === "number" && num > 0) {
          n = num;
          addBtn.disabled = !isDisable;
          for (let i = 1; i <= n; i++) {
            _this.nStones.push({
              HeapNumber: i,
              Stones: Math.floor(Math.random() * 10) + 1,
            });
          }
          _this.render();
        } else {
          alert("Please input a positive number");
        }
      }
    };
    // Start function
  },
  start() {
    _this = this;
    this.init();
    this.render();
    this.handleEvent();
    startBtn.onclick = () => {
      const dice = Math.floor(Math.random() * 2);
      if (dice == 0) {
        console.log("Bot first");
        _this.botTurn();
      } else {
        console.log("Player first");
      }
    };
  },
};

nimGame.start();
