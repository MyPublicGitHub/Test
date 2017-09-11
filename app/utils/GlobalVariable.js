const Gv = {
    
        /**
         * 用户昵称，默认为null,测试时 江苏沃因思
         */
        USER_NAME: "",
    
        /**
         * 环信UserName 也就是登录的UserId
         */
        HX_USERNAME: "",
    
        /**
         * 环信Password
         */
        HX_PASSWORD: "",
    
        /**
         * 用户id,默认.MAX_VALUE，暂时为-1
         */
        USER_ID: -1,
    
        /**
         * 用户头像URL
         */
        USER_PORTRAIT: "",
    
        /**
         * 用户帐号，默认为null,暂时调试为1
         */
        USER_ACCOUNTS: "",
    
        /**
         * 用户手机号
         */
        USER_PHONE: "",
    
        /**
         * 用户邮箱
         */
        USER_EMAIL: "",
    
        /**
         * 用户职务,角色
         */
        USER_JOB: "",
    
        /**
         * 用户职务,角色id
         */
        USER_JOB_ID: -1,
    
        /**
         * 用户部门，默认为null,暂时调试为技术部
         */
        USER_DEPARTMENT: "",
    
        /**
         * 用户部门id，.MAX_VALUE,暂时调试为7Loain
         */
        USER_DEPARTMENT_ID: -1,
        /**
         * 专用于新手帮助，政策隐私说明，调用web
         */
        BASE_WEB_URL: "http://erp.zhu-ku.com/zhuku/",
    
        /**
         * 公用SharedPreferences文件名
         */
        SP_FINENAME: "zhuku_confige",
    
        /**
         * DesUtils的秘钥
         */
        DES_UTILS_SECRET: "zhuku",
    
        /**
         * 当前用户token，默认为null,暂时调试为0000
         * 2016年11月08日14:26:11
         * 暂时默认为0000 切换正式服务器时改成0
         */
        ACCESS_TOKEN: "",
    
        /**
         * 执行人ID
         */
        EXECUTORID: "",
    
        /**
         * 生成二维码前缀
         */
        QR_CODE: "woyinsi_",
        /**
         * 本地存储根目录
         */
        // FILE_ROOT : Environment.getExternalStorageDirectory().getAbsolutePath()+
        // "/Android/data/user.zhuku.com",
        /**
         * 缓存目录
         */
        // FILE_IMAGE_LOADER_CACHE : FILE_ROOT + "/cache",
    
        /**
         * 业主项目ID(**********************营销项目ID**************************)
         */
        OWNER_PROJECTID: 0,
    
        /**
         * 业主默认监管的立项项目ID( *****************立项项目ID*********************)
         */
        OWNER_PROJID: 0,
    
        /**
         * 业主公司ID // 普通用户公司ID也存在这
         */
        OWNER_COMPANYID: -1,
    
        /**
         * 业主公司ID // 普通用户公司ID也存在这
         */
        OWNER_OPID: -1,
    
        /**
         * 业主项目经理名称
         */
        OWNER_PROJECT_MANAGER_NAME: "",
    
        /**
         * null
         */
        NULL: "",
    
        /**
         * 企业类型---改为用户类型 2017年2月28日 13:37:08
         * 1:需求方  2:供应商----改为0是施工方 1是监管方 2017年2月28日 13:37:36
         */
        COMPANYTYPE: -1,
    
        /**
         * 企业名称
         */
        COMPANYNAME: "",
        /**
         * 驳回审核的默认回复
         */
        REJECT_CONTEXT: "驳回,审核不通过",
        /**
         * 同意审核的默认回复
         */
        AGREE_CONTEXT: "审核通过，可以执行",
        /**
         * 切换企业UI Flag
         */
        BROADCAST_FILTER: "com.broadcast.switchmain",
        /**
         * 审核回复传值Flag
         */
        DATAS: "datas",
    
        /**
         * 所有权限列表 在login页面一次性获得
         */
        permissionsIdList: "",
    
        /**
         * 列表页默认条目个数
         */
        PAGESIZE: 20,
    
        /**
         * 输入时间间隔
         */
        INPUT_TIME_ERVAL: 1000,
    
        /**
         * 计数器，计算应用前后台
         * activityCount>:1，那么就是前台，activityCount::0，那就是后台
         */
        activityCount: 0,
    
        getUserName() {
            // return _saveUserName();
            
            if (Gv.USER_NAME == '') {
                return _saveUserName();
            } else {
                return Gv.USER_NAME;
            }
        },
    
        setUserName(userName) {
            if (userName == null || userName == undefined) {
                return;
            }
            console.log('保存的username：'+userName);
            Gv.USER_NAME = userName;
    
            // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
            storage.save({
                key: global.constants.USER_NAME, // 注意:请不要在key中使用_下划线符号!
                data: userName,
    
                // 如果不指定过期时间，则会使用defaultExpires参数 如果设为null，则永不过期 expires: 1000 * 3600
            });
        }
    };
    
    function _saveUserName() {
        var result ='';
    
        global
            .storage
            .load({
                key: global.constants.USER_NAME,
    
                // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                autoSync: false,
    
                // syncInBackground(默认为true)意味着如果数据过期， 在调用sync方法的同时先返回已经过期的数据。
                // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
                syncInBackground: true,
    
                // 你还可以给sync方法传递额外的参数 syncParams: {     extraFetchOptions: {         // 各种参数 },
                // someFlag: true }
            })
            .then(ret => {
                // 如果找到数据，则在then方法中返回 注意：这是异步返回的结果（不了解异步请自行搜索学习） 你只能在then这个方法内继续处理ret数据
                // 而不能在then以外处理 也没有办法“变成”同步返回 你也可以使用“看似”同步的async/await语法
    
                console.log('获取store中usename:' + ret);
                // this.setState({user: ret});
                 result=ret;
            })
            .catch(err => {
                //如果没有找到数据且没有sync方法， 或者有其他异常，则在catch中返回
                console.warn('获取store中usename出错message:' + err.message);
                console.warn('获取store中usename出错name:' + err.name);
                switch (err.name) {
                    case 'NotFoundError':
                        // TODO;
                        break;
                    case 'ExpiredError':
                        // TODO
                        break;
                }
            })
            console.log('result'+result);
            return result;
    };
    
    global.gv = Gv;
    export default Gv;