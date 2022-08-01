const { getUserInfoByUsername } = require("../service/User.js");
function LoginController(ctx) {
  //   console.log(ctx.query);
  const { username, password } = ctx.query;
  const userInfo = getUserInfoByUsername(username, password);
  if (userInfo) {
    ctx.body = {
      success: true,
      data: userInfo,
    };
  } else {
    ctx.body = {
      success: false,
      data: "用户名或密码错误",
    };
  }
  // console.log(username,password)

  // ctx.body = {
  //   success: true,
  //   data: ctx.query,
  // data: {
  // //   msg: '请求成功',

  // },
  //   };
}

module.exports = {
  LoginController,
};
