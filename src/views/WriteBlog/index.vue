<template>
  <div class="WriteBlog">
    <el-row class="row">
      <el-input placeholder="请输入标题" v-model="title" class="input-with-select">
        <el-select v-model="type" slot="prepend" placeholder="请选择博文类型">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
      </el-input>
    </el-row>

    <el-row class="row">
      <mavon-editor
      ref="blogContent"
      v-model="blogContent"
      @save="saveMD"/>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="2">
        <el-button class="saveButton" @click="cancelSave">取消发布</el-button>
      </el-col>

      <el-col :span="2">
        <el-button class="saveButton" type="primary" @click="saveMD">发布博文</el-button>
      </el-col>
    </el-row>
    <!-- <mavon-editor
      :value="blogContent"
      :subfield = "false"
      :defaultOpen = "'preview'"
      :toolbarsFlag = "false"
      :editable="false"
      :scrollStyle="true"
      :ishljs = "true"
    ></mavon-editor> -->


  </div>
</template>

<script>
import { insertBlog } from '@/api/blog'
import { getToken } from '@/utils/token'
export default {
  data(){
    return{

      title: '',
      type: '',
      blogContent: ''
    }
  },

  created() {
  },

  methods:{
    saveMD(value,render){
      if(this.title =='' || this.type ==''||this.blogContent == ''){
        this.$message({
          type: 'warning',
          message: '请完善博客内容后再发表'
        });
      }
      else{
        this.$confirm('确定要发布此篇博文?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          var data = new FormData();
          data.append("title",this.title)
          data.append("content",this.blogContent)
          data.append("userId",getToken())
          data.append("type",this.type)
          insertBlog(data).then(res => {
            if(res.status = 200){
              this.$message({
                type: 'success',
                message: '发布成功!'
              });
              this.$router.push({
                path: '/readBlog/'+blogId
              })
            }
            else{
              this.$message({
                type: 'error',
                message: res.msg || '发生错误'
              })
            }
          })
        }).catch(() => {

        });
      }
    },

    cancelSave(){
      this.$confirm('确定要取消发布，取消发布不会保存现有内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$router.push({ path: '/' })
        }).catch(() => {

        });
    }
  }
}
</script>

<style>
  .el-select .el-input {
    width: 200px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .row{
    margin: 20px;
  }

  .saveButton{
    margin: 0 auto;
  }
</style>