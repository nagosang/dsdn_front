<template>
  <div class="download">
    <el-card class="box-card-download">
      <div slot="header" class="title">
        <span>文件列表</span>
        <el-button class="upBtn" icon="el-icon-upload2" type="primary" @click="upBtnClick">上传文件</el-button>
      </div>

      <el-table
      :data="fileList">
        <el-table-column
          type="selection"
          width="60">
        </el-table-column>

        <el-table-column
          label="文件名"
          width="400"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ scope.row.realName }}</template>
        </el-table-column>

        <el-table-column
          label="描述"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ scope.row.description }}</template>
        </el-table-column>

        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-download"
              @click=""
            >下载</el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="delFile(scope.row.fileName)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange"
        @prev-click="pageChange"
        @next-click="pageChange"
        style="text-align: center">
      </el-pagination>
    </el-card>

    <el-dialog
      title="上传文件"
      :visible.sync="dialogVisible"
      width="500px">
      <el-upload
        class="upload"
        drag
        action=""
        :http-request="upLoadFile"
        :multiple="false"
        :show-file-list="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { upLoadFile, insertFile, selectFileByUploader, deleteFile } from '@/api/file'
import { getToken } from '@/utils/token'
export default {
  data(){
    return{
       dialogVisible: false,

       fileList:[],

       total: 0,
       page:1
    }
  },

  created(){
    this.getList()
  },

  methods:{
    getList(){
      selectFileByUploader(getToken()).then(res => {
        if(res.status == 200){
          this.total = res.data.length
          console.log(res.data)
          this.fileList=this.chunk(res.data,10)[this.page - 1]
        }
      })
    },

    pageChange(page){
      this.page = page
      this.getList()
    },

    chunk(arr, size) {
      var rsArr = [];
      for(var i=0;i<arr.length;i+=size){
        var tempArr=[];
        for(var j=0;j<size&&i+j<arr.length;j++){
          tempArr.push(arr[i+j]);
        }
        rsArr.push(tempArr);
      }
      return rsArr;
    },

    upLoadFile(f){
      this.dialogVisible =false
      var file = f.file
      var data = new FormData()
      data.append('file_data', file)
      data.append('fileType', 'image')
      upLoadFile(data).then(res => {
        if(res.status == 200){
          var fileName = res.data.fileName
          var fileData = new FormData()
          fileData.append('uploaderId', getToken())
          fileData.append('fileName', fileName)
          fileData.append('realName', file.name)
          insertFile(fileData).then(res => {
            if(res.status == 200){
              this.$message({
                type: 'success',
                message: '上传成功!'
              });
              this.getList()
            }
            else{
              this.$message({
                type: 'error',
                message: '上传失败!'
              });
            }
          })
        }
      })
    },

    upBtnClick(){
      this.dialogVisible = true
    },

    delFile(fileName){
      deleteFile(fileName).then(res => {
        if(res.status == 200){
          if(res.status == 200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getList()
          }
          else{
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          }
        }
      })
    }
  }
}
</script>

<style>
  .box-card-download{
    width: 95%;
    margin: 0 auto;
  }

  .el-upload-dragger{
    width: 465px;
  }
  
  .title{
    position:relative;
  }

  .upBtn{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>