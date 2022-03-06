<style scoped>

.cat{
  margin: 2px;
  background-color: transparent;
  border-radius: 14px;
  border: 1px solid #000;
  overflow: hidden;
  float: left;
}

.cat label {
  float: left; line-height: 3.0em;
  width: 6.0em; height: 3.0em;
}

.cat label span {
  text-align: center;
  padding: 1px 0;
  display: block;
}

.cat label input {
  position: absolute;
  display: none;
  color: #000 !important;
}
/* selects all of the text within the input element and changes the color of the text */
.cat label input + span{color: #000;}


/* This will declare how a selected input will look giving generic properties */
.cat input:checked + span {
    color: #000;
}

/*
This following statements selects each category individually that contains an input element that is a checkbox and is checked (or selected) and chabges the background color of the span element.
*/
.action input:checked + span{background-color: #56def6;}

.colors{
  margin: 2px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #000;
  overflow: hidden;
  float: left;
}
.colors label {
  float: left; line-height: 3.0em;
  width: 2.0em; height: 2.0em;
}

.colors label span {
  text-align: center;
  padding: 1px 0;
  display: block;
}

.colors label input {
  position: absolute;
  display: none;
  color: #000 !important;
}
</style>

<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="columns-12 w-auto">
      <h1>Filters</h1>

      <div class="filter">
      <h1>Shapes</h1>
      <div v-for="(tag, index) in tags" :key="index" class="cat action">
        <label>
            <input type="checkbox" :value="tag" v-model="selectedTags" :id="tag" :true-value="1">
            <span :for="tag">{{ tag }}</span>
        </label>
      </div>
      </div>
      <br><br><br>
      <!-- <div v-for="(tag, index) in tags" :key="index" class="inline;">
        <input type="checkbox" :value="tag" v-model="selectedTags" :id="tag" :true-value="1">
        <label :for="tag">{{ tag }}</label>
      </div> -->


      <h1>Colors</h1>
      <div v-for="(color, index) in filterColors" :key="'A'+index" class="colors" v-bind:style="{ backgroundColor: color}">
        <label>
            <input type="checkbox" :value="color" v-model="selectedColors" :id="color">
        </label>
      </div>
      

      
      <br><br><br>
     
      <div class="mt-8  overflow-hidden shadow sm:rounded-lg">
        <h2 class="text-2xl leading-7 font-semibold">
          {{title}} ({{activeCards.length}})
        </h2>
        <div class="grid grid-cols-4 gap-4">
          <div  v-for="(size, index) in activeCards" :key="index" class="bg-white flex justify-center text-6l border-2 border-gray-300 rounded-xl p-6">
            {{ size.name }} 
            {{ size.color }} 
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data: function() {
  return {
    tags: ['Oval', 'Round','Triangle','Square','Rectangle'],
    filterColors: ['Red', 'Green','Blue','Yellow','Black'],
    shapes:
    [{
    "name": "Oval",
    "shape": "Oval",
    "color": "Red",
    }, 
    {
    "name": "Round",
    "shape": "Round",
    "color": "Blue",
    }, 
    {
    "name": "Triangle",
    "shape": "Triangle",
    "color": "Green",
    }, 
    {
    "name": "Square",
    "shape": "Square",
    "color": "Yellow",
    },
    {
    "name": "Rectangle",
    "shape": "Rectangle",
    "color": "Black",
    },
    {
    "name": "Rectangle",
    "shape": "Rectangle",
    "color": "Red",
    }],
    selectedTags: ['Oval', 'Round','Triangle','Square','Rectangle'],
    selectedColors: ['Red', 'Green','Blue','Yellow','Black'],
    title: "",
    // middleware: ['auth']
    }
    
  },
  computed: {
   
    activeCards: function() {
      
      var selected = ['Oval', 'Round','Triangle','Square','Rectangle'];
      var allColors = ['Red', 'Green','Blue','Yellow','Black'];
    
      if(this.selectedTags.length == 0 ) {
        this.selectedTags = selected;
        return this.shapes;
      }
      var activeCards = [];
      // this.count = this.shapes.length
      this.title = "All Items: ";
      
      var filters = this.selectedTags;
      var colorFilters = this.selectedColors;
     
      if (this.selectedTags.length != selected.length || this.selectedColors.length != allColors.length ) {
        this.title = "Multiple Items: "
      } 
      if (this.selectedTags.length == selected.length && this.selectedColors.length == 1){
        this.title = "All " + this.selectedColors[0] + " Items: "
      }
      if (this.selectedTags.length == 1 && this.selectedColors.length == allColors.length){
        this.title = "All " + this.selectedTags[0] + " Items: "
      }
      if (this.selectedTags.length > 1 && this.selectedColors.length == 1){
        this.title = "Multiple " + this.selectedColors[0] + " Items: "
      }
      if (this.selectedTags.length == 1 && this.selectedColors.length > 1){
        this.title = "Multiple " + this.selectedTags[0] + " Items: "
      }
       if (this.selectedTags.length == 1 && this.selectedColors.length == 1){
        this.title = this.selectedColors[0] + " "+ this.selectedTags[0] + " Items: "
      }
      this.shapes.forEach(function(card) {
        
        function cardContainsFilter(filter) {
          return card.name.indexOf(filter) != -1 ;
        }

        function cardContainsColorFilter(filter) {
          return card.color.indexOf(filter) != -1 ;
        }
        
        if(filters.some(cardContainsFilter) ) {
          if (colorFilters.some(cardContainsColorFilter)) {
            activeCards.push(card);
          }
        }
      });
     
      this.count = activeCards.length - 1;
      return activeCards;
    }
  },
  


}
</script>
