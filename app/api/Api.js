
var zhuku= 'http://api.test.zhu-ku.com/zhuku/';//BaseUrl

const Api = {
    
    access: zhuku+'ws/system/auth/access',//登录
    selectUserRoleAll: zhuku+'ws/system/sysroleapp/selectUserRoleAll/',//获取模块权限{tokenCode}

}

export default Api