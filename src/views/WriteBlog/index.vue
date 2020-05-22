<template>
  <div class="WriteBlog">

    <mavon-editor
    ref="blogContent"
    v-model="blogContent"
    @save="saveMD"/>

    <mavon-editor
      :value="blogContent"
      :subfield = "false"
      :defaultOpen = "'preview'"
      :toolbarsFlag = "false"
      :editable="false"
      :scrollStyle="true"
      :ishljs = "true"
    ></mavon-editor>


  </div>
</template>

<script>
export default {
  data(){
    return{
      blogContent: '# test',

    }
  },

  created() {
  },

  methods:{
    saveMD(value,render){
      console.log(this.blogContent)
      console.log("this is render"+render);
    }
  }
}
</script>

<style>

</style>