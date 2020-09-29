new Vue({
  el: '#app',
  data: { //initialize
    textInput: ''
  },
  
  computed: {
    identicon: function(){
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  
  methods: { //use these functions to change data
    onInput: function(event){
      this.textInput = event.target.value;
    }
  },
  //template needs exactly one root element
  template: `
    <div>
     <h3>My Identicon Generator</h3>
    <div>
      Input: 
      <input v-on:input="onInput" />
    </div>
  
    <div>
      Output:
      {{ textInput }}
      <div v-html="identicon"></div>
    </div>
   </div>
  `
});
