<template>
  <div class="examine">
    <el-card class="box-card-examine">
      <el-table
      :data="blogList">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>

        <el-table-column
          label="标题"
          width="250"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>

        <el-table-column
          label="用户名"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ scope.row.userName }}</template>
        </el-table-column>

        <el-table-column
          label="用户账号"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ scope.row.userId }}</template>
        </el-table-column>

        <el-table-column
          label="分区"
          header-align="center"
          align="center">
          <template slot-scope="scope">{{ getArea(scope.row.type) }}</template>
        </el-table-column>

        <el-table-column
          label="发表时间"
          header-align="center"
          align="center"
          width="200">
          <template slot-scope="scope">{{ getTime(scope.row.time) }}</template>
        </el-table-column>

        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-top-right"
              @click="gotoBlog(scope.row.blogId)"
            >查看</el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click=""
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
      style="text-align:center"
    />
    </el-card>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { pageBlog } from '@/api/blog'
export default {
  components: { Pagination },
  data(){
    return{
      blogList: [],

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
      pageBlog(this.listQuery).then(res => {
        if(res.status == 200){
          this.blogList = res.data
          this.total = res.totalCount
        }
      })
    },

    getArea(type) {
      if(type == 1){
        return '分区1'
      }
      else if(type == 2){
        return '分区2'
      }
      else{
        return '分区3'
      }
    },

    getTime(time) {
      var date = new Date(time)
      return date
    },

    gotoBlog(blogId) {
      this.$router.push({
        path: '/readBlog/'+blogId
      })
    }
  }
}
</script>

<style>
  .box-card-examine{
    width: 95%;
    margin: 0 auto;
  }
</style>