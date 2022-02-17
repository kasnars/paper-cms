<template>
  <div>
    123123
    {{ userInfo }}
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人资料</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          @click="changeInfo">修改资料</el-button
        >
      </div>
      <!-- <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div> -->
      <div>
          {{userInfo.name}}
      </div>
      <div>
          {{userInfo.phone}}
      </div>
      <div>
          {{userInfo.email}}
      </div>
    <div>
          {{userInfo.level}}
      </div>
    <div>
          {{userInfo.status}}
      </div>
    </el-card>
  </div>
</template>

<script>
import { getUserInfo } from "@/tools/localDataTools";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.userInfo = getUserInfo();
    console.log(this.userInfo);
  },
  methods:{
    changeInfo(){
        console.log(this.userInfo);
    }
  }
};
</script>

<style>
</style>