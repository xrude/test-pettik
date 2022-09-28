import { createProxyMiddleWare } from "http-proxy-middleware";


module.exports = appp =>{
    appp.use(
        createProxyMiddleWare('/user/details/store',
        {
            target:'https://6u26pb8q2e.execute-api.us-east-1.amazonaws.com',
            changeOrigin:true
        })
    )
}