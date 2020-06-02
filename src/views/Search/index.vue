<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card v-for="(item,i) in blogList" :key="i" class="box-card" style="text-align: left">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
            <el-button style="float: right; padding: 3px 0" type="text"  @click="readBlog(item.blogId)">阅读全文</el-button>
          </div>
          <div>
            {{ item.content }}
          </div>
        </el-card>
      </el-col>

      <el-col :span="24" class="page">
        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          @pagination="getList"
        />
      </el-col>
    </el-row>

    <h1 v-if="total == 0" style="text-align: center">暂无数据</h1>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { searchBlog } from '@/api/blog'
export default {
  components: { Pagination },
  data(){
    return{
      blogList:[],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
    }
  },

  created(){
    this.getList()
  },

  methods:{
    getList(){
      searchBlog(this.listQuery.page, this.listQuery.limit, this.$route.params.title).then(res => {
        if(res.status == 200){
          this.blogList = res.data
          this.total = res.totalCount
        }
      })
    },

    readBlog(blogId){
      this.$router.push({
        path: '/readBlog/'+blogId
      })
    }
  }
}
</script>

<style>

</style>