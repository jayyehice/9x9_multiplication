

const App = {
  data() {
    return {
      level: 7,
      checkClass: ["", "", "", "", ""],
      examList: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 9]],
      ans: ["", "", "", "", ""],
    }
  },

  methods: {
    changeIndex(idx) {
      const rightAns = this.examList[idx][0] * this.examList[idx][1];

      if (rightAns == this.ans[idx]) {
        this.checkClass[idx] = "right";
      } else {
        this.checkClass[idx] = "err";
        console.log(rightAns);
      }
    }
  },
  computed:{
    score(){
      let total = 0;
      for(let i=0; i<this.checkClass.length; i++){
        if(this.checkClass[i] == "right"){
          total += 100/(this.checkClass.length);
        }
      }
      return total;
    },
  },
  mounted() {
    const firstNum = Math.floor(Math.random() * this.level) + 2;

    let arr = [2, 3, 4, 5, 6, 7, 8, 9];
    arr.sort(function () {
      return (0.5 - Math.random());
    });

    for (let i = 0; i < this.examList.length; i++) {
      this.examList[i][0] = firstNum;
      this.examList[i][1] = arr[i];
    }
  }

}

Vue.createApp(App).mount('#app')


