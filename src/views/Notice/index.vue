<template>
  <div class="notice">
    <el-row>
      <el-row class="row">
        <mavon-editor
        ref="content"
        v-model="content"
        @save="saveMD"/>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="2">
          <el-button class="saveButton" @click="content=''">取消发布</el-button>
        </el-col>

        <el-col :span="2">
          <el-button class="saveButton" type="primary" @click="saveMD">发布公告</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-divider>历史公告</el-divider>
  </div>
</template>

<script>
import { insertNotice } from '@/api/notice'
import { getToken } from '@/utils/token'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    saveMD(value,render){
      if(this.content == ''){
        this.$message({
          type: 'warning',
          message: '请完善公告内容后再发表'
        });
      }
      else{
        this.$confirm('确定要发布此篇公告?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          var data = new FormData();
          data.append("content",this.content)
          data.append("userId",getToken())
          insertNotice(data).then(res => {
            if(res.status = 200){
              this.$message({
                type: 'success',
                message: '发布成功!'
              });
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
    }
  }
}
</script>

<style>

</style>