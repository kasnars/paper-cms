<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人资料</span>


        <el-button type="primary" round style="float: right; "
        icon="el-icon-edit"
        size="small"
        @click="changeInfo"
        >{{notChangeStatus?'修改资料':'提交修改'}}</el-button>

        <el-button type="info" round style="float: right; 
        margin-right:5px"
        icon="el-icon-edit"
        size="small"
        @click="notChangeStatus = true"
        v-if="!notChangeStatus"
        >取消修改</el-button>
      </div>

      <el-form label-position="left" label-width="80px" :model="userInfo">
        <el-form-item label="姓名" v-if="notChangeStatus">
          <div >{{ userInfo.name || "暂未设置" }}</div>
          <!-- <el-input v-model="userInfo.name" v-else></el-input> -->
        </el-form-item>
        <el-form-item label="手机号">
          <div v-if="notChangeStatus">{{ userInfo.phone || "暂未设置" }}</div>
          <el-input v-model="userInfo.phone" v-else></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <div v-if="notChangeStatus">{{ userInfo.email || "暂未设置" }}</div>
          <el-input v-model="userInfo.email" v-else></el-input>
        </el-form-item>
        <el-form-item label="等级" v-if="notChangeStatus">
          <div >{{ userInfo.level || "暂未设置" }}</div>
          <!-- <el-input v-model="userInfo.level" v-else></el-input> -->
        </el-form-item>
        <el-form-item label="状态" v-if="notChangeStatus">
          <div >{{ userInfo.status ? "启动" : "禁用" }}</div>
          <!-- <el-input v-model="userInfo.status" v-else></el-input> -->
        </el-form-item>
        <el-form-item label="输入密码" v-if="!notChangeStatus">
          <!-- <div v-if="notChangeStatus">{{ userInfo.level || "暂未设置" }}</div> -->
          <el-input v-model="userInfo.password" ></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getUserInfo, setUserInfo } from "@/tools/localDataTools";
import { updateHttp } from '@/api/user';
export default {
  data() {
    return {
      userInfo: {},
      notChangeStatus:true
    };
  },
  mounted() {
    this.userInfo = getUserInfo();
    console.log(this.userInfo);
  },
  methods: {
    changeInfo() {
      this.notChangeStatus = !this.notChangeStatus
      if(this.notChangeStatus){
        console.log(this.userInfo,'change');
        updateHttp(this.userInfo).then(res => {
          console.log(res);
          setUserInfo(this.userInfo)
          this.$message.success('修改成功')
          this.$router.go(0)
        })
      }
    },
  },
};
</script>

<style>
</style>