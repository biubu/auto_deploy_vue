/*Created by Wang Junqiang on 12 12,2018 16:40 */

const PROJECT_PATH = "/tmp/Project";// 服务器部署目录,请根据实际需求更改
const TEMP_PATH = "/tmp/deploy/";// 临时目录

module.exports = {
    deploy: {
        production: {
            key: '~/.ssh/id_rsa', // 登录服务器密钥对路径
            user: 'root',//登录服务器的用户
            host: '192.168.1.20',//部署项目的服务器地址
            repo: 'git@192.168.1.20:wangjq/vue_template.git',//当前项目的git仓库地址,建议使用ssh,没测试http
            ref: 'origim/master',//部署分支
            path: TEMP_PATH,
            'post-setup': `npm i && npm run build && mv -f ./dist ${PROJECT_PATH} && rm -rf ${TEMP_PATH}`,
        }
    }
};
