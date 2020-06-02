<template>
  <div class="message">
    <el-card class="box-card-message">
      <el-tabs class="tab" tab-position="left" type="border-card" @tab-click="toDialog"> 
        <el-tab-pane label="公告">
          <div class="list">
            <el-scrollbar class="scrollbar">
              <el-card v-for="(item,i) in noticeList" :key="i">
                <span>{{ item.content }}</span>
              </el-card>
            </el-scrollbar>
          </div>
        </el-tab-pane>

        <el-tab-pane v-for="(item,i) in userList" :key="i" :label="item.nickname">
          <div class="list">
            <el-scrollbar class="scrollbar">
              <ul>
                <li v-for="(m, j) in messagelist" :key="j">{{ (isSelf() == m.senderId ? '我' : item.nickname) + ':   ' + m.content}}</li>
              </ul>
            </el-scrollbar>
          </div>
          <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="22">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 3}"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" style="height:75px;width:100%" @click="sendMessage(item.userId)">发送</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { selectLetterUserId, selectLetterByBoth, insertLetter } from '@/api/message'
import { selectAllNotice } from '@/api/notice'
import { getToken } from '@/utils/token'
export default {
  data(){
    return{
      noticeList:[],

      textarea: '',
      userList: [],
      messagelist:[]
    }
  },

  created(){
    selectAllNotice().then(res => {
      console.log(res)
      if(res.status == 200){
        this.noticeList = res.data
      }
    })

    selectLetterUserId(getToken()).then(res => {
      if(res.status == 200){
        this.userList=res.data
      }
    })
  },

  methods:{
    toDialog(i) {
      if(i.index!=0){
        selectLetterByBoth(getToken(), this.userList[i.index-1].userId).then(res => {
          if(res.status == 200){
            this.messagelist = res.data
          }
        })
      }
    },

    isSelf(){
      return getToken()
    },

    sendMessage(recipientId){
      if(this.textarea != ''){
        var data = new FormData()
        data.append('recipientId',recipientId)
        data.append('senderId', getToken())
        data.append('content', this.textarea)
        insertLetter(data).then(res => {
          if(res.status == 200){
            selectLetterByBoth(getToken(), recipientId).then(res => {
              if(res.status == 200){
                this.messagelist = res.data
              }
            })
            this.textarea = ''
          }
        })
      }
    }
  }
}
</script>

<style>
  .box-card-message{
    width: 80%;
    height: 500px;
    margin: 0 auto;
  }
  
  .tab{
    height: 450px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .list{
    height: 300px;
    width: 100%;
  }

  .scrollbar{
    height: 100%;
  }

  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>