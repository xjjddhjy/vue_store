<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#avatar-default"
          ></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div v-if="!username" @click="">
            <router-link to="/login">登录/注册</router-link>
          </div>
          <div v-else @click="">
            <div>{{username}}</div>
          </div>
          <div class="zhuxiao" @click="zhuxiao"> 注销</div>
          <!-- this.$cookies.get(keyName)  -->
          <!-- <div v-if="state">登录/注册</div> -->
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile">
              <use
                data-v-735ff1be=""
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#mobile"
              ></use>
            </svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right">
        <use
          data-v-735ff1be=""
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#arrow-right"
        ></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      username: this.$cookies.get('username'),
    };
  },
  mounted(){
    // this.$cookies.remove('username');
    this.username=this.$cookies.get('username')
  },
  activated(){
    this.username=this.$cookies.get('username')
  },
  methods:{
    zhuxiao(){
      this.username=''
      this.$cookies.remove('username')
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.zhuxiao{
  position:relative;
  left: 50px;
  z-index: 3;
  border: 1px solid white;
  border-radius: 1px;
}
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
}

#user-info .privateImage-svg {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}

.left {
  float: left;
}

#user-info .arrow-svg {
  width: 11px;
  height: 22px;
  margin-top: 18px;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}

#user-info .login-info .phone .icon-mobile {
  position: absolute;
  width: 12px;
  height: 18px;
  left: -15px;
  top: 0px;
}
</style>
