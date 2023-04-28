/**
 * classic 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
  name: "iClient Classic",
};

var exampleConfig = {
  baseDemo: {
    name: "官方示例",
    name_en: "baseDemo",
    content: {
      mapDemo: {
        name: "地图示例",
        name_en: "mapDemo",
        content: [
          {
            name: "ArcGIS 地图",
            name_en: "",
            thumbnail: "basic_arcgis.png",
            fileName: "basic_arcgis",
            page: "basic_arcgis.html",
          },
          {
            name: "百度地图",
            name_en: "",
            thumbnail: "basic_baidu.png",
            fileName: "basic_baidu",
            page: "basic_baidu.html",
          },
          {
            name: "Bing地图",
            name_en: "",
            thumbnail: "basic_bing.png",
            fileName: "basic_bing",
            page: "basic_bing.html",
          },
          {
            name: "高德影像",
            name_en: "",
            thumbnail: "basic_gaode_img.png",
            fileName: "basic_gaode_img",
            page: "basic_gaode_img.html",
          },
          {
            name: "高德矢量",
            name_en: "",
            thumbnail: "basic_gaode_vec.png",
            fileName: "basic_gaode_vec",
            page: "basic_gaode_vec.html",
          },
          {
            name: "mapbox",
            name_en: "",
            thumbnail: "basic_mapbox.png",
            fileName: "basic_mapbox",
            page: "basic_mapbox.html",
          },
          {
            name: "天地图",
            name_en: "",
            thumbnail: "basic_tianditu_img.png",
            fileName: "basic_tianditu_img",
            page: "basic_tianditu_img.html",
          },
          {
            name: "本地单张图片",
            name_en: "",
            thumbnail: "basic_singleImage.png",
            fileName: "basic_singleImage",
            page: "basic_singleImage.html",
          },
        ],
      },
      terrainDemo: {
        name: "地形示例",
        name_en: "terrainDemo",
        content: [
          {
            name: "ArcGIS地形",
            name_en: "",
            thumbnail: "terrain_arcgis.png",
            fileName: "terrain_arcgis",
            page: "terrain_arcgis.html",
          },
          {
            name: "程序控制地形",
            name_en: "",
            thumbnail: "terrain_procedural.png",
            fileName: "terrain_procedural",
            page: "terrain_procedural.html",
          },
        ],
      },
      mapControlDemo: {
        name: "地图控件示例",
        name_en: "mapControlDemo",
        content: [
          {
            name: "导航球",
            name_en: "",
            thumbnail: "control_navigationBall.png",
            fileName: "control_navigationBall",
            page: "control_navigationBall.html",
          },
          {
            name: "自定义导航球",
            name_en: "",
            thumbnail: "control_navigationCustomize.png",
            fileName: "control_navigationCustomize",
            page: "control_navigationCustomize.html",
          },
          {
            name: "比例尺",
            name_en: "",
            thumbnail: "control_scale.png",
            fileName: "control_scale",
            page: "control_scale.html",
          },
        ],
      },
      layerDemo: {
        name: "图层控制示例",
        name_en: "layerDemo",
        content: [
          {
            name: " 绘制反选遮罩层",
            name_en: "",
            thumbnail: "layer_maskControl.png",
            fileName: "layer_maskControl",
            page: "layer_maskControl.html",
          },
        ],
      },
      sceneDemo: {
        name: "场景设置示例",
        name_en: "sceneDemo",
        content: [],
      },
      czmlDemo: {
        name: "CZML示例",
        name_en: "czmlDemo",
        content: [],
      },
      dataSourcesDemo: {
        name: "dataSources示例",
        name_en: "dataSourcesDemo",
        content: [
          {
            name: "shp数据源",
            name_en: "",
            thumbnail: "dataSource_shp.png",
            fileName: "dataSource_shp",
            page: "dataSource_shp.html",
          },
        ],
      },
      geometriesDemo: {
        name: "几何图形(entity)示例",
        name_en: "mouseDemo",
        content: [
          {
            name: "文字点",
            name_en: "",
            thumbnail: "geometry_fontPoint.png",
            fileName: "geometry_fontPoint",
            page: "geometry_fontPoint.html",
          },
          {
            name: "billboard",
            name_en: "",
            thumbnail: "geometry_billboard.png",
            fileName: "geometry_billboard",
            page: "geometry_billboard.html",
          },
        ],
      },
      "3DTilesDemo": {
        name: "3DTiles示例",
        name_en: "3DTilesDemo",
        content: [
          {
            name: "3DTiles图层",
            name_en: "",
            thumbnail: "model_3DTiles.png",
            fileName: "model_3DTiles",
            page: "model_3DTiles.html",
          },
        ],
      },
      ionDemo: {
        name: "Cesium Ion示例",
        name_en: "ionDemo",
        content: [],
      },
      postDemo: {
        name: "后期处理示例",
        name_en: "postDemo",
        content: [],
      },
      particleSystemDemo: {
        name: "粒子系统示例",
        name_en: "particleSystemDemo",
        content: [],
      },
      materialsDemo: {
        name: "材质示例",
        name_en: "materialsDemo",
        content: [],
      },
      ogcDemo: {
        name: "OGC服务示例",
        name_en: "ogcDemo",
        content: [],
      },
      otherDemo: {
        name: "其他示例",
        name_en: "otherDemo",
        content: [
          {
            name: "鹰眼图",
            name_en: "",
            thumbnail: "eagle_eye.png",
            fileName: "eagle_eye",
            page: "eagle_eye.html",
          },
        ],
      },
    },
  },
  extend: {
    name: "扩展示例",
    name_en: "extend",
    content: {
      development: {
        name: "开发者示例",
        name_en: "development",
        content: [],
      },
      primitive: {
        name: "几何图形(primitive)",
        name_en: "primitive",
        content: [],
      },
    },
  },
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
  baseDemo: "fa-edit",
  map: "fa-map-marker",
  overlay: "fa-image",
  control: "fa-cog",
  popup: "fa-commenting-o",
  query: "fa-search",
  theme: " fa-area-chart",
  analysis: "fa-leanpub",
  viz: "fa-map",
  OGC: "fa fa-globe",
  // "plot": "fa-edit",
  others: "fa-th-large",
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
  baseDemo: "fa-edit",
  map: "fa-map-marker",
  overlay: "fa-image",
  control: "fa-cog",
  popup: "fa-commenting-o",
  query: "fa-search",
  theme: " fa-area-chart",
  analysis: "fa-leanpub",
  viz: "fa-map",
  OGC: "fa fa-globe",
  // "plot": "fa-edit",
  others: "fa-th-large",
};
