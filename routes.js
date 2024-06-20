import { nextRoutes } from '@edgio/next'
import { Router } from '@edgio/core/router'

export default new Router()
  .use(nextRoutes)
  .match('/edgio-api/:path*', {
    caching: { max_age: '86400s', stale_while_revalidate: '31536000s', bypass_client_cache: true },
    url: {
      url_rewrite: [
        {
          source: '/edgio-api/:path*',
          syntax: 'path-to-regexp',
          destination: '/:path*',
        },
      ],
    },
    origin: { set_origin: 'api' },
  })
  .if(
    {
      edgeControlCriteria: {
        in: [{ "request.path": "extension" }, ["jpg", "jpeg", "pjpg", "pjpeg", "png", "ppng", "webp", "tiff", "tif"]],
      }
    },
    {
      caching: { cache_key: { exclude_all_query_params: true } },
      response: { optimize_images: true }
    }
  )
  // .if(
  //   {
  //     edgeControlCriteria: {
  //       in: [{ "request.path": "extension" }, ["svg", "js", "xml"]],
  //     }
  //   },
  //   {
  //     response: { optimize_images: false }
  //   }
  // )
  // .get(/.*\\.svg.*/, {
  //   response: { optimize_images: false }
  // })
  // .if(
  //   {
  //     edgeControlCriteria: {
  //       "=~": [{ "request.origin_query": "url" }, ".*\\.svg.*"],
  //     },
  //   },
  //   { response: { optimize_images: false } }
  // )
  // .get(":path+", {
  //   response: { optimize_images: false }
  // })
  
