const base = {
    get() {
        return {
            url : "http://localhost:8080/php6qf4v/",
            name: "php6qf4v",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php6qf4v/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序的购物系统"
        } 
    }
}
export default base
