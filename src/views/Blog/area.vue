<template>
  <div>
    <el-row class="head">
      <el-page-header @back="goBack" :content="title">
      </el-page-header>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card v-for="(item,i) in list" :key="i">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="head">
      <el-page-header @back="goBack" :content="title">
      </el-page-header>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Area',
  props: ['message'],

  data(){
    return{
      title: 'test',

      list:[1,2,3,4,5,6]
    }
  },

  created(){
    if(this.message == 1){
      this.title = '分区1'
    }
    else if(this.message == 2){
      this.title = '分区2'
    }
    else{
      this.title = '分区3'
    }
    console.log(this.message)
  },

  methods: {
    goBack() {
      this.$emit('go_back')
    }
  }
}
</script>

<style>
  .head{
    margin: 10px;
  }
</style>