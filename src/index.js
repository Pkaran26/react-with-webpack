import koa from 'koa'
import http from 'http'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import Router from 'koa-router'
import { createReadStream } from 'fs'
import serve from 'koa-static'
import webpack from 'webpack'
import webpackMiddleware from "koa-webpack-dev-middleware"

const app = new koa()
const server = http.createServer(app.callback())
server.listen(8181)
console.log('Server running...')

app.use(bodyParser())
app.use(cors())
app.use(serve(__dirname + '/public'));

app.use(webpackMiddleware(webpack({
  devServer: {
    contentBase: __dirname+"./src/front",
    historyApiFallback: true
  },
    entry: __dirname+"/front/index.js",
    mode: 'development', //production
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader"
        },
        //{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      ]
    },
    output: {
      path:  __dirname+"/public",
      publicPath: "http://localhost:8181/",
      filename: "bundle.js"
    }
}), {
  stats: {
        colors: true
    }
}));

const router = new Router({ prefix: '' })

router.get('/', ctx=>{
  ctx.type = 'html';
  ctx.body = createReadStream(`${ __dirname }/public/index.html`)
})

app.use(router.routes()).use(router.allowedMethods())
