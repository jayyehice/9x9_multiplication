

const App = {
    data() {
      return {
        level:7,
        checkClass: ["", "", "", "", ""],
        examList: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 9]],
        ans:["", "", "", "", ""],
      }
    },
    
    methods:{
      changeIndex(idx){
        const rightAns = this.examList[idx][0]*this.examList[idx][1];
        
        if(rightAns == this.ans[idx]){
          this.checkClass[idx] = "right";
        }else{
          this.checkClass[idx] = "err";
          console.log(rightAns);
        }
      }
    },
    mounted() {
      for(let i=0; i<this.examList.length; i++){
        this.examList[i][0] = Math.floor(Math.random()*this.level)+2;
        this.examList[i][1] = Math.floor(Math.random()*this.level)+2;
      }
    }
    
  }
  
  Vue.createApp(App).mount('#app')


